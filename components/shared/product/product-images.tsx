'use client'
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImages = ({images}:{images:string[]}) => {
const [current,setCurrent] = useState(0);


    return (  <> 
    
    
<div className="relative w-full h-96">
  <Image
    src={images[current]}
    alt="product image1"
    fill
    className="object-contain"
  />
</div>
  
  <div className="flex overflow-x-auto gap-3">
{images.map((image, index) => (
  <Image
    src={image}
    key={index}
    alt={`product-image${index}`}
    width={100}
    height={100}
 className={cn(
  "object-contain cursor-pointer rounded-md border",
  current === index ? "border-cyan-500" : "border-gray-200"
)}
    onClick={()=>setCurrent(index)}
  />
))}
  </div>
  </>);
}
 
export default ProductImages;