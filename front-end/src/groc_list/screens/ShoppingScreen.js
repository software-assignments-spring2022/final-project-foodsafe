import products from "../data";
import "./ShoppingScreen.css";
import FoodCard from '../Components/FoodCard';
import {BASE_URL, LIST_PRODUCTS} from '../../apis/index'
import { useEffect, useState } from "react";

const ShoppingScreen = () => {

  const [productsList, updateProductsList] = useState([]);

  useEffect(() => {
    fetchProducts();
  },[]);

  const fetchProducts = async () => {
    let apis = `${BASE_URL}/${LIST_PRODUCTS}`;
    let response = await fetch(apis);
    response = await response.json();
    updateProductsList(response.data);
  }

  return (
    <div className='products__wrapper'>
      {productsList.map((product) => (
        <FoodCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShoppingScreen;
