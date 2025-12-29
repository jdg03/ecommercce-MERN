import { Link } from "react-router-dom";
import { useShopContext } from "../hooks/useShopContext";

interface ProductItemProps {
    _id: string;
    name: string;
    image: string[];
    price: number;
}

const ProductItem = ({_id, name, image, price}: ProductItemProps) => {

    const {currency} = useShopContext();
  return (
    <Link to={`/producto/${_id}`} className="text-gray-600 cursor-pointer">
        <div className="overflow-hidden">
            <img src={image[0]} alt={name} className="hover:scale-110 transition ease-in-out"/>
        </div>
        <p className="p-3 pb-1 text-sm">
            {name}
        </p>
        <p className="text-sm font-medium">{currency}{price}</p>

    </Link>


    )
}

export default ProductItem