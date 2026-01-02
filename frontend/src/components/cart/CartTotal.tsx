import { useCartContext } from "../../hooks/useCartContext";
import { useShopContext } from "../../hooks/useShopContext";
import Title from "../ui/Title";

const CartTotal = () => {
    const {getCartTotal} = useCartContext();
    const {currency, delivery_fee} = useShopContext();

    
  return (

        <div className="w-full">
          <div className="text-2xl">
          <Title text1="Total" text2="del carrito"></Title>
          </div>

          <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>{currency} {getCartTotal().toFixed(2)}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Envío</p>
              <p>{currency} {delivery_fee}</p>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <p>Total</p>
              <p>{currency} {(getCartTotal() + delivery_fee).toFixed(2)}</p>
            </div>
          </div>

       

        </div>
     
  )
}

export default CartTotal