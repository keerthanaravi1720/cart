import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from '../context/cart.context';


const Navbar = ({cartCount}) => {
  const {cart}=useContext(CartContext)
   

  
    const Icon = {
        color: "black",
        fontSize: "20px",
        // marginTop: "-14px",
        // marginRight:"15vh"
    
      };
      
      
    
     
      
  return (
    <nav>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li className="btn"  >
     
        <Link to="/cart"  >
         
          <AiOutlineShoppingCart style={Icon} /> {cart.length}
          {/* <span>0</span> */}
        </Link>
      
      </li>
    </ul>
  </nav>
  )
}

export default Navbar


// import React from 'react';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { Link } from 'react-router-dom';

// const Navbar = ({ cartCount }) => {
//   const Icon = {
//     color: 'black',
//     fontSize: '20px',
//   };

//   return (
//     <nav>
//       <ul>
//         <li>
//           <a href='/'>Home</a>
//         </li>
//         <li className='btn' style={{ marginLeft: '170vh' }}>
//           <Link to='/cart'>
//             <AiOutlineShoppingCart style={Icon} />
//             <span>{cartCount}</span>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
