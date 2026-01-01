import { useMemo } from "react";
import { useShopContext } from "../../hooks/useShopContext"
import ProductItem from "../ui/ProductItem";
import Title from "../ui/Title";


const RelatedProducts = ({category, subCategory}: {category: string, subCategory: string}) => {
  const {products} = useShopContext();
  
  // ✅ Se recalcula solo cuando cambian products, category o subCategory
  const related = useMemo(() => {
    return products
      .filter((item) => category === item.category && subCategory === item.subCategory)
      .slice(0, 5);
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="PRODUCTOS" text2="RELACIONADOS" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item) => (
          <ProductItem key={item._id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts