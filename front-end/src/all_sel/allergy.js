import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Axios from "axios";
import {Navigate, useNavigate } from "react-router-dom";
const queryString = require('query-string');
const OPTIONS = ['Milk','Egg','Fish','Crustacean shellfish','Tree Nut','Peanut','Wheat','SoyBean'];
const Allergy = () => {
  // state = {
  //     checkboxes: OPTIONS.reduce(
  //         (options, option) => ({
  //             ...options,
  //             [option]: false
  //         }),
  //         {}
  //     )
  // };
   const [checkboxes, setCheckboxes] = useState(OPTIONS.reduce(
      (options, option) => ({
          ...options,
          [option]: false
      }),
      {}
  ));
  let navigate = useNavigate();
const selectAllCheckboxes = isSelected => {
  Object.keys(checkboxes).forEach(checkbox => {
      setCheckboxes(prevState => ({
              ...prevState,
              [checkbox]: isSelected
      }));
  });
};
const selectAll = () => selectAllCheckboxes(true);
const deselectAll = () => selectAllCheckboxes(false);
const handleCheckboxChange = changeEvent => {
  const { name } = changeEvent.target;
  setCheckboxes(prevState => ({
          ...prevState,
          [name]: !prevState[name]
  }));
};
const handleFormSubmit = async formSubmitEvent => {
  
 
   if(localStorage.getItem('token')){
       const selectedAllergy=[]
       let allergy=[];
       Object.keys(checkboxes).forEach((key,index)=>{
           if(checkboxes[key]){
               selectedAllergy.push(index);
               allergy.push(key);
           }
       })
       const stringified = queryString.stringify({allergy:allergy});
       console.log(allergy,stringified);
       navigate(`/search_rec?${stringified}`)
      
       await Axios.post(`${process.env.REACT_APP_BACKEND}allergy`,{
           newAllergies:selectedAllergy
       });
   }else{
       const selectedAllergy=[]
       let allergy=[];
       Object.keys(checkboxes).forEach((key,index)=>{
           if(checkboxes[key]){
               selectedAllergy.push(index);
               allergy.push(key);
           }
       })
       console.log(allergy,"allergy");
       const stringified = queryString.stringify({allergy:allergy});
       navigate(`/search_rec?${stringified}`)
       localStorage.setItem('allergies',allergy);
       console.log(localStorage.getItem('allergies'))
   }
};
const createCheckbox = option => (
  <Checkbox
  label={option}
  isSelected={checkboxes[option]}
  onCheckboxChange={handleCheckboxChange}
  key={option}
  />
);
const createCheckboxes = () => OPTIONS.map(createCheckbox);


  if (localStorage.getItem("loginBefore") === "true"){
          return <Navigate to = "/search_rec" />
    }  
  else{
    return (
        
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-12">
                        {createCheckboxes()}
                        <div className="form-group mt-2">
                            <button
                            type="button"
                            className="btn btn-outline-primary mr-2"
                            onClick={selectAll}
                            >
                                Select All
                            </button>
                            <button
                            type="button"
                            className="btn btn-outline-primary mr-2"
                            onClick={deselectAll}
                            >
                                Deselect All
                            </button>
                            {/* <a href="/search_rec"> */}
                            <button   className="btn btn-primary" onClick={handleFormSubmit}>
                                Continue
                            </button>
                            {/* </a> */}
                            
            
                        </div>
                </div>
            </div>
        </div>
        );
    }
}//end class component
export default Allergy;