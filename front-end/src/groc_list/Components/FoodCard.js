import { useContext } from "react";
import "./FoodCard.css";
import formatCurrency from "format-currency";
import CartContext from '../context/cart/CartContext'; 

const FoodCard = ({product}) => {
    const { addToCart } = useContext(CartContext);
    let  opts = {format: '%s%v', symbol: '$'}
  return (
    <div className='productCard_Wrapper'>
      {product.length === 0 (
          <h4>Sorry there is no such food! Try searching another food. </h4>
      )}

      <div>
          <img className='productCard__img' src={product.image} alt='' />
          <h4> {product.name}</h4>
          <div className='productCard__price' >
            <h5>{formatCurrency(`${product.price}`, opts)}</h5></div>
      </div>
      <button 
      className='productCard__button'
      onClick={() => addToCart(product)}
      > Add to save
      </button>
    </div>
   
  )
}

export default FoodCard
