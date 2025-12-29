import { useEffect, useState } from "react"
import type { Product } from '../interfaces/ProductInterface';
import Title from "./ui/Title";
import ProductItem from "./ProductItem";
import { useShopContext } from "../hooks/useShopContext";

const BestSeller = () => {

   const { products } = useShopContext();
  const [bestSeller,setBestSeller] = useState<Product[]>();

  useEffect(() => {
    
    const bestSellerProducts = products.filter((product: Product) => product.bestseller)
    setBestSeller(bestSellerProducts)
  }, [products])

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="MÁS" text2="VENDIDOS"/>
        <p className="W-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          bestSeller?.map((product: Product) => (
            <ProductItem key={product._id} {...product}/>
          ))
        }
      </div>

    </div>
  )
}

export default BestSeller