import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, CHANGE_QUANTITY } from "../Types";

const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };
  
  const changequantity = (item) => {
    dispatch({type: CHANGE_QUANTITY, payload: item})
  }
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id});
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
        changequantity, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
