
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ItemList from './list.js'
import { pink } from '@mui/material/colors';
import D_icon from '@mui/icons-material/Delete';
import A_icon from '@mui/icons-material/Add';
import Axios from "axios";
import {useState,useEffect} from "react";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Login from '../sign_in/LoginComponent.js';

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
    return [...a, ...not(b, a)];
}


export default function TransferList() {
  const all=[0,1,2,3,4,5,6,7];
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([]);
  const [right, setRight] = React.useState([]);
  
  //useEffect(())
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);
  useEffect(getNew,[]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const  OPTIONS = ['Milk','Egg','Fish','Crustacean shellfish','Tree Nut','Peanut','Wheat','SoyBean'];
  async function getNew() {

    const loginState=localStorage.getItem('token');
    console.log(loginState,'login state')
    if(loginState){
      const body=await Axios.get(`${process.env.REACT_APP_BACKEND}/allergy`);
      console.log(body.data);
      setRight(body.data);
      setLeft(not(all,body.data));
    }
    else{
      const allergiesStr=localStorage.getItem("allergies").split(',');
      const allergies=allergiesStr.map(str=>OPTIONS.indexOf(str));
      console.log(allergies);
      setRight(allergies);
      setLeft(not(all,allergies));
    }
    
  }

  async function setNew(){
    const loginState=localStorage.getItem('token');
    console.log(loginState,'login state')
    if(loginState){
      Axios.post(`${process.env.REACT_APP_BACKEND}/allergy`,{
        username:localStorage.getItem('username'),
        newAllergies:right
      })
    }else{
      const allergiesStr=right.map((ele)=>OPTIONS[ele]);
      console.log(allergiesStr)
      let str=allergiesStr.reduce(((ret,ele)=>ret+ele+','),'');
      str=str.substring(0,str.length-1);
      localStorage.setItem('allergies',str);
      console.log(str);
    }
  }

  const numberOfChecked = (items) => intersection(checked, items).length;

  const selectAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = async() => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    console.log(right);
     setLeft(left.concat(rightChecked));
     setRight(not(right, rightChecked));
     setChecked(not(checked, rightChecked));    
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{elevation:300}}>
            <div style={{display:"flex",width:"100%",padding:"10px",alignContent:"center"}}>
                <h2 style={{font: 'italic 2.3em "Fira Sans", serif',color:'darkviolet',marginTop:"20px",marginLeft:'20px'}}>Manage your allergy setting</h2>
                <Button color="success"
            sx={{ 
              my: 0.5,
              marginLeft: "250px",
                
              borderRadius:2,
              width: 655,
              height:60
               }}
               variant="contained"
            onClick={setNew}
            startIcon={<SaveAltIcon />}
          >
            Save change
          </Button>
          
            </div>
      <Grid item>   
        <ItemList
          title='Allergies left you could selected'
          items={left}
          selectAll={selectAll}
          numberOfChecked={numberOfChecked}
          handleToggle={handleToggle}
          checked={checked}
          />
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ 
              my: 0.5,
              borderRadius:2,
              height:50,
              width: 105,
              marginBottom:2
               }}
            variant="contained"
            size="large"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            startIcon={<A_icon />}
          >
            ADD
          </Button>
          <Button
            sx={{ 
              my: 0.5,
              color: pink[800],
              '&.Mui-checked': {
              color: pink[600],
              },
              borderRadius:2,
              height:50,
              width: 105,
              marginTop:5
               }}
            variant="outlined"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            startIcon={<D_icon />}
          >
            REMOVE
          </Button>
        
        </Grid>
      </Grid>
      <Grid item>
        <ItemList
          title='Your selected Allergy'
          items={right}
          selectAll={selectAll}
          numberOfChecked={numberOfChecked}
          handleToggle={handleToggle}
          checked={checked}/>
          </Grid>
    </Grid>
  );
}
