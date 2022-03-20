import React from 'react';
<<<<<<< HEAD

const search_rec=()=>{
    
        return (
            <a>
                <h2>Sign up page -  Neil</h2>
            </a>
            
            );

=======
import '.\style.css;
import Header from '.\header.js';
import search_bar from '.\search_bar.js';
import recommended_pictures from '.\recommended_pictures.js';
import candies from '.\candies.jpg';
import cereals from '.\cereals.png';
import frozen_foods from '.\frozen-foods.jpg';
const search_rec=()=>{
    return (
    <div className='container'>
        <Header name="Search Page"/>
        <search_bar/>
        <div className='pictures_captions'>
            <recommended_pictures name='candies' image={candies}/>
            <recommended_pictures name='cereals' image={cereals}/>
            <recommended_pictures name = 'frozen foods' image={frozen_foods}/>
        </div>
    </div>   
    );
>>>>>>> c6b6ea232fdaee7c8c061ca2a05b2d31b178b4ef
}
export default search_rec;