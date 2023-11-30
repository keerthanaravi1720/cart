import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { CartContext } from '../context/cart.context'
import './Cart.css'

const Cart = () => {
  const{cart} =useContext(CartContext);
  const totalprice=cart.reduce((total,product)=>{
    return total + product.price;
  },0);
  return (
  
    <div>
        <Navbar/>
        {cart.length===0?(
          <div className="cart_message">No items in cart</div>
        ) : (
          <>
          {cart.map((product)=>(
            <div key={product.id}>
            <div>
            <img src={product.image} className='cartimage' alt={product.name}/>
            </div>
            <div className='cart_details'>
              <h5>{product.name}</h5>
              <div>{product.details}</div>
              <div>price: {product.price}</div>
            </div>
           </div>
          ))}
<h5 className='total'>Total price: {totalprice}</h5>
          </>
        )}
   </div>
  )
}

export default Cart

