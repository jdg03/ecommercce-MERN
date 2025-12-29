
import { useEffect, useState } from 'react'
import type { Product } from '../interfaces/ProductInterface';
import Title from './ui/Title';
import ProductItem from './ProductItem';
import { useShopContext } from '../hooks/useShopContext';

const LatestCollection = () => {

    const { products } = useShopContext();
    const [latestProducts, setLatestProducts] = useState<Product[]>([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, []);
    
    console.log(products);
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1="ÚLTIMA" text2="COLECCIÓN"/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>
        </div>

        {/*rending products*/}
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {latestProducts.map((product: Product) => (
                <ProductItem key={product._id} {...product}/>
            ))}
        </div>
        
    </div>
  )
}

export default LatestCollection