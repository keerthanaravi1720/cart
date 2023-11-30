import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard';



const Home = () => {
const Data=[
    {
        id:1,
        name:'Product 1',
        price:300,
        details: 'deatils',
        image:	'https://m.media-amazon.com/images/I/6185TP7LX9L._AC_SY400_.jpg'
    },

    {
        id:2,
        name:'Product 2',
        price:340,
        details: 'deatils',
        image:	'https://m.media-amazon.com/images/I/61BVYQ5IOYL._AC_SY400_.jpg'
        
    },
    
    {
        id:3,
        name:'Product 3',
        price:301,
        details: 'deatils',
        image:	'https://m.media-amazon.com/images/I/61HpJZi4uOL._AC_SY400_.jpg'
    },
    
    {
        id:4,
        name:'Product 4',
        price:360,
        details: 'deatils',
        image:	'https://m.media-amazon.com/images/I/61GytFOaPKL._AC_SY400_.jpg'
    },
    

];
const [productData, setProductData]=useState(Data);
  return (
    <>
    <div>
        <Navbar/>
    <div className='d-flex'>
        {productData.map((item)=>{
            return (<ProductCard product={item}/>)
        })}
  
    </div>
    </div>
    </>
  )
}

export default Home