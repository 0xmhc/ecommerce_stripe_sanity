"use client"
import React from "react";

import {useStateContext} from "../../context/StateContext";
const ButtonAddCart = ({product}) =>{
     const {qty,onAdd} = useStateContext()
    return (
        <>
        <button type="button" className='add-to-cart' onClick={()=>onAdd(product,qty)}>Add to Cart</button>
        </>
    )
}
export default ButtonAddCart