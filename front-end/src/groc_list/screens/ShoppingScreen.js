import products from "../data";
import "./ShoppingScreen.css";
import FoodCard from '../Components/FoodCard';

const ShoppingScreen = () => {
  return (
    <div className='products__wrapper'>
      {products.map((product) => (
        <FoodCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShoppingScreen;
