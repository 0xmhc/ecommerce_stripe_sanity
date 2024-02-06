"use client"
import React,{useState} from 'react'
import {urlFor} from "../../lib/client"

const Image = ({image})=>{
    const [index,setIndex] = useState(0)
    return (
        <>
        <div className="image-container">
        <img src={urlFor(image && image[index]).url()} className="product-detail-image" />
        </div>
        <div className='small-images-container'>
            {image.map((item,i)=>(
                <img key={i} src={urlFor(item).url()} className={i == index ? 'small-image selected-image' : 'small-image'}
                    onMouseEnter={()=>setIndex(i)} />
            ))}
        </div>
        </>
    )
}
export default Image