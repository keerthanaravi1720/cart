
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import React, {useState} from 'react';


function App() {
  const[cartcount,setCartCount]=useState(0);

  const handleClick=() =>{
    setCartCount((prevcount)=>prevcount + 1)
  };
  return (

    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product_details' element={<ProductDetails/>}/>
      
    </Routes>
    </>
  );
}

export default App;
