import '.\style.css';
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

}
export default search_rec;