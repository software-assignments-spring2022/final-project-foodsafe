
import React from 'react';
import './style.css';
import Header from './header.js';
import Search_bar from './search_bar.js';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Paper from "@mui/material/Paper"
import {BrowserRouter, Routes, Route} from "react-router-dom";

{/* <div className='pictures_captions'>
            <Recommended_pictures name='candies' image={candies} />
            <Recommended_pictures name='cereals' image={cereals} />
            <Recommended_pictures name = 'frozen foods' image={frozen_foods} />
    </div> */}


const search_rec=()=>{
    return (
    <div className='container'>
        <Header name="Search Page" />
        <Search_bar />

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
        </Grid>
        </Grid>
        
    </div>   
    );

}
export default search_rec;
