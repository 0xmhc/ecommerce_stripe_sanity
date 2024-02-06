import React from 'react';
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
import {Product,Image} from "../../components"
import {Quantity,ButtonAddCart,ButtonBuyNow} from "../../components/elements"
import { client } from "../../../lib/client";


const ProductDetails = async({params}) =>{
     const {product,products} = await getData(params.slug)
     const {image,name,details,price} = product;

    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <Image image={image}/>
                </div>
                <div className="product-detail-desc">
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <div>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                        </div>
                        <p>(20)</p>
                    </div>
                    <h4>
                        details:
                    </h4>
                    <p>{details}</p>
                    <p className='price'>${price}</p>
                    <div className="quantity">
                        <h3>Quanity:</h3>
                        <p className='quantity-desc'>
                            <Quantity/>
                        </p>
                    </div>
                    <div className="buttons">
                        <ButtonAddCart product={product}/>
                        <ButtonBuyNow product={product}/>
                    </div>
                </div>
            </div>
            <div className="maylike-products-wrapper">
                    <h2>You May Also Like</h2>
                    <div className="marquee">
                        <div className="maylike-products-container track">
                            {products.map((item)=>(
                                <Product key={item._id} product={item}/>
                            ))}
                        </div>
                    </div>
            </div>
        </div>
    )
}

export const getData = async(slug)=>{
    const queryProduct = `*[_type=="product" && slug.current == '${slug}'][0]`
    const queryProducts = `*[_type=="product"]`

    const resProduct = await client.fetch(queryProduct)
    const resProducts = await client.fetch(queryProducts)

    const dataProduct = await resProduct
    const dataProducts = await resProducts
    

    return {'product':dataProduct,'products':dataProducts}
}
export default ProductDetails

