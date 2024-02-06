"use client"
import React from "react";

import {useStateContext} from "../../context/StateContext";
const ButtonBuyNow = ({product}) =>{
     const {qty,onAdd,setShowCart} = useStateContext()
     const handleBuyNow = () =>{
        onAdd(product,qty)
        setShowCart(true)
     }
    return (
        <>
        <button type="button" className='buy-now' onClick={handleBuyNow}>Buy Now</button>
        </>
    )
}
export default ButtonBuyNow