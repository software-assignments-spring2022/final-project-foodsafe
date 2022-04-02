import { useEffect, useState } from "react";
import "./ShoppingScreen.css";
import FoodCard from '../Components/FoodCard';
import {BASE_URL, LIST_PRODUCTS} from '../../apis/index'

const ShoppingScreen = () => {

  const [productsList, updateProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  },[]);

  const fetchProducts = async () => {
    let apis = `${BASE_URL}/${LIST_PRODUCTS}`;
    setLoading(true); //loading on
    let response = await fetch(apis);
    response = await response.json();
    updateProductsList(response.data);
    setLoading(false); //loading off
  }

  return (
    <div className='products__wrapper'>
      {loading==false ? productsList.map((product) => (
        <FoodCard key={product.id} product={product} />
      )) : 'Loading...'}
    </div>
  );
};

export default ShoppingScreen;
