import React, { useState } from "react"
import { createContext } from "react"

const CartContext=createContext();
const CartProvider=({children})=>{
    const [cart, setCart]=useState([]);

    const addProductToCart=(product)=>{
        
        let isProductPresent=cart.filter((item)=>{
         return product.id==item.id;
        });
        if(isProductPresent.length==0){
            setCart([...cart,product])
        }
    }
    return(
        <><CartContext.Provider value={{cart,addProductToCart}}>
            {children}
        </CartContext.Provider>
        </>
    )
}

export {CartProvider,CartContext}


