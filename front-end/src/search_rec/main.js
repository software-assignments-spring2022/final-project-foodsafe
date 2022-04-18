import React, { useState } from 'react';
import './style.css';
import Header from './header.js';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Paper from "@mui/material/Paper"
import {BrowserRouter, Routes, Route,useNavigate, useSearchParams} from "react-router-dom";
import Change_allergy_button from './change_allergy_button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
 
import {Button} from "react-bootstrap";
import Axios from 'axios';
{/* <div className='pictures_captions'>
           <Recommended_pictures name='candies' image={candies} />
           <Recommended_pictures name='cereals' image={cereals} />
           <Recommended_pictures name = 'frozen foods' image={frozen_foods} />
   </div> */}
 
 
 
const Search_rec=()=>{
   const[data, setData] = useState("");
 
   const [searchQuery, setSearchQuery] = useState("");
   const [searchParams] = useSearchParams();
 
   const allergy = searchParams.get('allergy');
   console.log(allergy,"allergy recs");
   let navigate = useNavigate();
 
   const handleSearch = () => {
       if(searchQuery){
           navigate(`/groc_list?search=${searchQuery}&allergy=${allergy}`);
       }
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
               Axios.get(`http://localhost:4000/foodtype/cake`).then(
               (response) => {
                   setData(JSON.stringify(response));
               }
           )
           }} className = "view"> View</Button>
          
       </Grid>
 
       <Grid item xs={4}>
           <Typography variant = "h4" >
                   Candy
           </Typography>
           <Paper elevation = {3} >
               <img
              
                   src = "https://sites.imsa.edu/acronym/files/2021/10/candy.jpg"
                   className = "food"
               />
              
           </Paper>
           <Button onClick = {() => {
               Axios.get(`http://localhost:4000/foodtype/candy`).then(
               (response) => {
                   setData(JSON.stringify(response));
               }
           )
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
               Axios.get(`http://localhost:4000/foodtype/can`).then(
               (response) => {
                   setData(JSON.stringify(response));
               }
              
               )
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
               Axios.get(`http://localhost:4000/foodtype/cereal`).then(
               (response) => {
                   setData(JSON.stringify(response));
               }
           )
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
               Axios.get(`http://localhost:4000/foodtype/bakery`).then(
               (response) => {
                   setData(JSON.stringify(response));
               }
           )
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
               Axios.get(`http://localhost:4000/foodtype/frozen`).then(
               (response) => {
                   setData(JSON.stringify(response));
               }
           )
           }} className = "view"> View</Button>
          
       </Grid>
       </Grid>
       <div>{data}</div>
   </div>  
   );
 
}
export default Search_rec;