import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM,CHANGE_QUANTITY } from "../Types";

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
    case CHANGE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };

    default:
      return state;
  }
};

export default CartReducer;

