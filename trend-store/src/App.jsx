
import Hero from "./components/Hero/Hero"
import Header from "./components/Layout/Header"
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart"
import { useState } from "react";
import CartProvider from "./components/context/CartProvider";
function App() {
  
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () =>{
    setCartIsShow(true)
  }

  const hideCartHandler = (e) =>{
    e.preventDefault();    
    setCartIsShow(false)
  }

  return (
     <CartProvider>      
        <Header onShowCart={showCartHandler}/>
        <Hero/>
        <Products/>
        {cartIsShow && <Cart onClose={hideCartHandler}/>}
     </CartProvider> 
  )
}

export default App
