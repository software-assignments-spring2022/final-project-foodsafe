import { useContext } from "react";
import formatCurrency from "format-currency";
import "./CartItem.css";
import CartContext from "../context/cart/CartContext";



const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };
  return (
    <li className='CartItem__item'>
      <img src={item.image} alt='' />
      <div>
        {item.name} {formatCurrency(`${item.price}`, opts)}
      </div>
      <button className='CartItem__button' onClick={() => removeItem(item._id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;