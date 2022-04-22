import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM} from "../Types";


const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: JSON.parse(localStorage.getItem("cart") || "[]")
  };
  
  const [state, dispatch] = useReducer(CartReducer, initalState);


  const addToCart = item  =>  {
    const cart = localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: [];

	// check if duplicates
	const duplicates = cart.filter(cartItem => cartItem._id === item._id);

	// if no duplicates, proceed
	if (duplicates.length === 0) {
		// prep product data
		const productToAdd = {
			...item,
			count: 1,
		};

		// add product data to cart
		cart.push(productToAdd);

		// add cart to local storage
		localStorage.setItem('cart', JSON.stringify(cart));

		// add cart to redux
		dispatch({
			type: ADD_TO_CART,
			payload: item,
		});
	}
  };

  const showHideCart = (item) => {
    dispatch({ type: SHOW_HIDE_CART });
  };
  
  const removeItem = (item) => {
    const cart = localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: [];

	 const updatedcart = cart.filter(cartItem => cartItem._id !== item._id);

	localStorage.setItem('cart', JSON.stringify(updatedcart));

    dispatch({ type: REMOVE_ITEM, payload:item});
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
