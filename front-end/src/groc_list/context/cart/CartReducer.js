import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM,  } from "../Types";

let INITIAL_STATE = {
	cart: [],
};

if (localStorage.getItem('cart')) {
	INITIAL_STATE.cart = JSON.parse(localStorage.getItem('cart'));
} else {
	INITIAL_STATE.cart = [];
}

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
   
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, {...action.payload, qty:1}],
      };
    }
    
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item  !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;

