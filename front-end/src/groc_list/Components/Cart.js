import {React,  useContext, useState, useEffect } from "react";
import "./Cart.css";
import formatCurrency from "format-currency";
import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";

//const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")

const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };

  // const[cartItems, setCart] = useState(cartFromLocalStorage)
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cartItems))
  // }, [cartItems])

  return (
    <>
      {showCart && (
        <div className='cart__wrapper'>
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCart}
            ></i>
          </div>
          <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className='Cart__cartTotal'>
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {formatCurrency(
                cartItems.reduce((amount, item) => item.price + amount, 0),
                opts
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
