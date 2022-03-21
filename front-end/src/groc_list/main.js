import ShoppingScreen from "./screens/ShoppingScreen";
import Cart from "./Components/Cart";
import Nav from "./Components/Nav";
import CartState  from './context/cart/CartState'; 

const groc_list= () =>{
    
    return (
        <div className='App'>
        <CartState>
            <Nav />
            <Cart />
            <ShoppingScreen /> 
        </CartState>
        
        </div>
      );

}
export default groc_list;