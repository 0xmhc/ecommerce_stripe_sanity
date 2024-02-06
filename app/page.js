import React from "react";

import { client } from "../lib/client";
import {HeroBanner,Product,FooterBanner} from "./components"


export const getData= async()=>{
  const query = '*[_type=="product"]'
    const resProducts = await client.fetch(query)
    const dataProducts = await resProducts
    
    const queryBanner = '*[_type=="banner"]'
    const resBanner = await client.fetch(queryBanner)
    const dataBanner = await resBanner

    return {'products':dataProducts,'banner':dataBanner}
}

const Home = async ()=>{
  const {products,banner} = await getData()
  
  return (
    
        <div className="layout">
        <HeroBanner heroBanner={banner?.length && banner[0]}/>
        <div className="products-heading">
          <h2>Best Selling Product</h2>
          <p>Speakers of many Variations</p>
        </div>
        <div className="products-container">
        {products?.map((product)=> <Product key={product._id} product={product}/>)} 
        </div>
        <FooterBanner footerBanner={banner && banner[0]}/>
        </div>
  )
}


export default Home;