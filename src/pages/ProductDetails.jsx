import React from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import './ProductDetails.css';

const ProductDetails = () => {
    const location= useLocation();
    const {title,image,details,price}=location.state;
  return (
   
    <div>
        <Navbar/>
        
        <div>
        <div><img src={image} className='imagesize1'/>
    </div>
    <div className='card_details'>
<h5>{title}</h5>
<div>{details}</div>
<div>{price}</div>
       
    </div>
    </div>
    </div>
   
  );
};

export default ProductDetails