import { useEffect, useState } from "react";
import "./ShoppingScreen.css";
import FoodCard from '../Components/FoodCard';
import {BASE_URL, LIST_PRODUCTS} from '../../apis/index'
import { useSearchParams } from 'react-router-dom';
 
const ShoppingScreen = () => {
 
 const [productsList, updateProductsList] = useState([]);
 const [loading, setLoading] = useState(false);
 const [searchParams] = useSearchParams();
 
 const searchQuery = searchParams.get('search');
 const allergy = searchParams.get('allergy');
  useEffect(() => {
   fetchProducts();
 },[]);
 
 const fetchProducts = async () => {
   let apis = `${BASE_URL}/${LIST_PRODUCTS}?search=${searchQuery}&allergy=${allergy}`;
   setLoading(true); //loading on
   let response = await fetch(apis);
   response = await response.json();
   console.log(response,"res");
   updateProductsList(response);
   setLoading(false); //loading off
 }
 
 return (
   <div className='products__wrapper'>
     {loading===false ? productsList.map((product) => (
       <FoodCard key={product._id} product={product} />
     )) : 'Loading...'}
   </div>
 );
};
 
export default ShoppingScreen;