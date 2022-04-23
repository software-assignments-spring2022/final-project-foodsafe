import React, { useState } from 'react';
import './style.css';
import Header from './header.js';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Paper from "@mui/material/Paper"
import {useNavigate, useSearchParams} from "react-router-dom";
import Change_allergy_button from './change_allergy_button';
import TextField from '@mui/material/TextField';
 
import {Button} from "react-bootstrap";
 
 
const Search_rec=()=>{
  const[data, setData] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();
 
  let navigate = useNavigate();
  let allergies = [];
  for (const entry of searchParams.entries()) {
   if (entry[0]==='allergy'){
       allergies.push(entry[1]);
   }
}
 
  const handleSearch = () => {
  
 
      if(searchQuery){
          navigate(`/groc_list?search=${searchQuery.toLowerCase()}&allergy=${allergies}`);
      }
  }
 
  function LogOut (){
       localStorage.clear()
       navigate("/")
   }
  return (
  <div className='container'>
          <TextField
              sx={{padding:"10px"}}
              style={{color:'white'}}
              placeholder="Search"
              variant="standard"
              onChange = {(event) => {setSearchQuery(event.target.value)}}
            />
      <Button onClick = {handleSearch} className = "search_button"> Search </Button>
      
      <Button onClick = { () => {navigate("/set_acc")}} className = "change_allergy_button"> Change Allergy </Button>
      <Button onClick = {LogOut} className = "sign_out"> Log Out </Button>
      <Header name="Recommended Food Type" />
      <Grid container rowSpacing={10} columnSpacing={{ xs: 10, sm: 10, md: 10 }}>
        
      <Grid item xs={4}>
        
          <Typography variant = "h4" >
                  Cake
          </Typography>
          <Paper elevation = {3} >
              <img
                  src = "https://assets.bonappetit.com/photos/59c924dc32e4b84f5a9e437a/1:1/w_2240,c_limit/1017%20WEB%20WEEK1060.jpg"
                  className = "food"
              />
            
          </Paper>
          <Button onClick = {() => {
              navigate(`/groc_list?search=cake&allergy=${allergies}`);
          }} className = "view"> View</Button>
        
      </Grid>
      <Grid item xs={4}>
          <Typography variant = "h4" >
                  Cheese
          </Typography>
          <Paper elevation = {3} >
              <img
            
                  src = "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1100,c_fill,g_auto,h_619,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200623110902-cheddar-cubes.jpg"
                  className = "food"
              />
            
          </Paper>
          <Button onClick = {() => {
              navigate(`/groc_list?search=cheese&allergy=${allergies}`);
          }} className = "view"> View</Button>
        
        
        
      </Grid>
      <Grid item xs={4}>
          <Typography variant = "h4" >
                  Canned Goods
          </Typography>
          <Paper elevation = {3} >
              <img
            
                  src = "https://thekitchencommunity.org/wp-content/uploads/2020/12/The-9-Best-Canned-Vegetables.jpg"
                  className = "food"
              />
            
          </Paper>
          <Button onClick = {() => {
              navigate(`/groc_list?search=can&allergy=${allergies}`);
          }} className = "view"> View</Button>
        
      </Grid>
      <Grid item xs={4}>
          <Typography variant = "h4" >
                  Cereal
          </Typography>
          <Paper elevation = {3} >
              <img
            
                  src = "https://www.cspinet.org/sites/default/files/styles/700x530/public/2021-11/december21_bn_hero_700x530.webp"
                  className = "food"
              />
            
          </Paper>
          <Button onClick = {() => {
              navigate(`/groc_list?search=cereal&allergy=${allergies}`);
          }} className = "view"> View</Button>
        
      </Grid>
      <Grid item xs={4}>
          <Typography variant = "h4" >
                  Bakery
          </Typography>
          <Paper elevation = {3} >
              <img
            
                  src = "https://www.snackandbakery.com/ext/resources/images/bakeryproducts.jpg?1432238179"
                  className = "food"
              />
            
          </Paper>
          <Button onClick = {() => {
              navigate(`/groc_list?search=bakery&allergy=${allergies}`);
          }} className = "view"> View</Button>
        
      </Grid>
      <Grid item xs={4}>
          <Typography variant = "h4" >
                  Frozen Food
          </Typography>
          <Paper elevation = {3} >
              <img
            
                  src = "https://blog.aplasticbag.com/wp-content/uploads/2018/02/frozen-food-packaging-blog-aplasticbag-1254x627.jpg"
                  className = "food"
              />
            
          </Paper>
          <Button onClick = {() => {
              navigate(`/groc_list?search=frozen&allergy=${allergies}`);
          }} className = "view"> View</Button>
        
      </Grid>
      </Grid>
      <div>{data}</div>
  </div> 
  );
 
}
export default Search_rec;