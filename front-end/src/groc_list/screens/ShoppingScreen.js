import { useEffect, useState } from "react";
import "./ShoppingScreen.css";
import FoodCard from '../Components/FoodCard';
import {BASE_URL, LIST_PRODUCTS} from '../../apis/index'
import { useSearchParams } from 'react-router-dom';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import './style.css';
const ShoppingScreen = () => {
 
 const [productsList, updateProductsList] = useState([]);
 const [loading, setLoading] = useState(false);
 const [searchParams] = useSearchParams();
 let navigate = useNavigate ();
 const searchQuery = searchParams.get('search');
 const allergy = searchParams.get('allergy');
  useEffect(() => {
   fetchProducts();
 },[]);
 
 const fetchProducts = async () => {
   let apis = `${process.env.REACT_APP_BACKEND}/${LIST_PRODUCTS}?search=${searchQuery}&allergy=${allergy}`;
   setLoading(true); //loading on
   let response = await fetch(apis);
   response = await response.json();
   console.log(response,"res");
   updateProductsList(response);
   setLoading(false); //loading off
 }
 
 return (
   <div>
    <Button onClick = { () => {navigate("/search_rec")}} className = "return_button"> Return To Recommended Food </Button>
   <div className='products__wrapper'>
     {loading===false ? productsList.map((product) => (
       <FoodCard key={product._id} product={product} />
     )) : 'Loading...'}
   </div>
   </div>
 );
};
 
export default ShoppingScreen;