import React, { Component } from "react";
import Checkbox from "./Checkbox";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const OPTIONS = ['Milk','Egg','Fish','Crustacean shellfish','Tree Nut','Peanut','Wheat','SoyBean'];

class allergy extends Component {
    state = {
        checkboxes: OPTIONS.reduce(
            (options, option) => ({
                ...options,
                [option]: false
            }),
            {}
        )
    };

selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
        this.setState(prevState => ({
            checkboxes: {
                ...prevState.checkboxes,
                [checkbox]: isSelected
            }
        }));
    });
};

selectAll = () => this.selectAllCheckboxes(true);

deselectAll = () => this.selectAllCheckboxes(false);

handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
        checkboxes: {
            ...prevState.checkboxes,
            [name]: !prevState.checkboxes[name]
        }
    }));
};

handleFormSubmit = async formSubmitEvent => {
    const selectedAllergy=[]
   Object.entries(this.state.checkboxes).forEach((Allergy,index)=>{
       if(Allergy[1])
            selectedAllergy.push(index);
   })

   await Axios.post("http://localhost:4000/allergy",{
      newAllergies:selectedAllergy
    });
};

createCheckbox = option => (
    <Checkbox
    label={option}
    isSelected={this.state.checkboxes[option]}
    onCheckboxChange={this.handleCheckboxChange}
    key={option}
    />
);

createCheckboxes = () => OPTIONS.map(this.createCheckbox);

render() {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-12">
                        {this.createCheckboxes()}

                        <div className="form-group mt-2">
                            <button
                            type="button"
                            className="btn btn-outline-primary mr-2"
                            onClick={this.selectAll}
                            >
                                Select All
                            </button>
                            <button
                            type="button"
                            className="btn btn-outline-primary mr-2"
                            onClick={this.deselectAll}
                            >
                                Deselect All
                            </button>
                            <a href="/groc_list">
                            <button   className="btn btn-primary" onClick={this.handleFormSubmit}>
                                Continue
                            </button>
                            </a>
                            
              
                        </div>
                </div>
            </div>
        </div>
    );
}

}//end class component

export default allergy;
