import React from 'react';
import './style.css';
import Header from './header.js';
import Search_bar from './search_bar.js';
import Recommended_pictures from './recommended_pictures.js';
import candies from './candies.jpg';
import cereals from './cereals.png';
import frozen_foods from './frozen-foods.jpg';
const search_rec=()=>{
    return (
    <div className='container'>
        <Header name="Search Page" />
        <Search_bar />
        <div className='pictures_captions'>
            <Recommended_pictures name='candies' image={candies} />
            <Recommended_pictures name='cereals' image={cereals} />
            <Recommended_pictures name = 'frozen foods' image={frozen_foods} />
        </div>
    </div>   
    );
}
export default search_rec;