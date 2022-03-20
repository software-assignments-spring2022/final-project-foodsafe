import HomeScreen from "./screens/HomeScreen";
import Cart from "./Components/Cart";
import Nav from "./Components/Nav";
import CartState  from './context/cart/CartState'; 

const groc_list= () =>{
    
    return (
    <div className='Shopping cart'>
       <CartState>
       <Nav />
        <Cart />
        <HomeScreen />    
       </CartState>
         
       
    </div>
       
    );
}
export default groc_list;