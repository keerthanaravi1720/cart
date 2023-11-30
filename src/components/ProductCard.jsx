
import React, { useContext, useState } from 'react'
import './ProductCard.css'
import ProductDetails from '../pages/ProductDetails'
import { useNavigate } from 'react-router-dom'
import { CartContext, CartProvider } from '../context/cart.context'


const ProductCard = ({product}) => {
   

    const navigate=useNavigate();
    const {cart,addProductToCart}=useContext(CartContext)

    const AddTocart=(item)=>{
        // navigate('/cart');
        addProductToCart(product);
    
    };
    
    

    const gotoProductDetails=(item)=>{
        navigate('/product_details',{state: {title:product.name,image:product.image, details:product.details,price:product.price}});
    };


    
  return (
   
   
   <div>
    
    <div className='card_body ms-2'>
        <div>
            <img src={product.image} className="imagesize" onClick={gotoProductDetails}/>
        </div>
        <div className='title'>{product.name}

        </div>
        <div className='price'>{product.price}</div>
        <div>
            <button className='btn1' onClick={AddTocart} >Add to Cart</button>
        </div>
    </div>
   </div>
  
  )
};

export default ProductCard
















// import React from 'react';
// import './ProductCard.css';
// import ProductDetails from '../pages/ProductDetails';
// import { useNavigate } from 'react-router-dom';

// const ProductCard = ({ product, addToCart }) => {
//   const navigate = useNavigate();

//   const gotoProductDetails = () => {
//     navigate('/product_details', {
//       state: {
//         title: product.name,
//         image: product.image,
//         details: product.details,
//         price: product.price,
//       },
//     });
//   };

//   const handleAddToCart = () => {
//     addToCart(product);
//   };

//   return (
//     <div>
//       <div className='card_body ms-2'>
//         <div>
//           <img src={product.image} className='imagesize' onClick={gotoProductDetails} />
//         </div>
//         <div className='title'>{product.name}</div>
//         <div className='price'>{product.price}</div>
//         <div>
//           <button className='btn1' onClick={handleAddToCart}>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;










