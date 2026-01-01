import { useParams } from "react-router-dom"
import { useShopContext } from "../hooks/useShopContext";
import { useEffect, useState } from "react";
import type { Product } from '../interfaces/ProductInterface';

const Product = () => {

  const {productId} = useParams();
  const {products} = useShopContext();
  const [productData, setProductData] = useState<Product | null>(null); 
  const [image, setImage] = useState<string[]>([]);

  const fetchProductData = async () => {
    const product = products.find((product) => product._id === productId)
    if(product) {
      setProductData(product)
      setImage(product.image)
    }
  }

   useEffect(() => {
    fetchProductData()
   }, [productId, products])



  return productData ? (

        <div className="bprder-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">

          {/**product data */}
          <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row ">

            {/**product image */}
            <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
              <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                {productData.image.map((img, index) => (
                  <img key={index} src={img} alt="product_image" className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />
                ))}
              </div>
            </div>
            

          </div>   
        </div>
      ) : (
        <p>Loading...</p>
      )

  
}

export default Product