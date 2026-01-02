import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets"
import CartTotal from "../components/cart/CartTotal"
import Title from "../components/ui/Title"
import { useShopContext } from "../hooks/useShopContext";


const PlaceOrder = () => {

  const [method, setMethot] = useState<'cod' | 'stripe' | 'razorpay'>('cod');
  const { navigate } = useShopContext();

  
  return (
    <section className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/**Left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1 ="Información del" text2="pedido"></Title>
        </div>
        <div className="flex gap-3">
          <input type="text" placeholder="Nombre" className="border border-gray-300 rounded py-1.5 px-3.5 w-full"/>
          <input type="text" placeholder="Apellido" className="border border-gray-300 rounded py-1.5 px-3.5 w-full"/>
        </div>
        <input type="email" placeholder="Email" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
        <div className="flex gap-3">
          <input type="number" placeholder="Teléfono" className="border border-gray-300 rounded py-1.5 px-3.5 w-full"/>
        </div>
        <div className="flex gap-3">
          <input type="text" placeholder="Ciudad" className="border border-gray-300 rounded py-1.5 px-3.5 w-full"/>
          <input type="text" placeholder="Departamento" className="border border-gray-300 rounded py-1.5 px-3.5 w-full"/>
        </div>
     
        <input type="address" placeholder="Dirección exacta" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
      </div>

      {/**Right side */}
        <div className="mt-2">
          <div className="mt-8 min-w-80">
            <CartTotal></CartTotal>
          </div>

          <div className="mt-12">
            <Title text1="Forma de" text2="Pago"></Title>
               {/**payment methods */}
            <div className="flex gap-3 flex-col lg:flex-row">

              <div onClick={() =>setMethot("stripe")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className={`min-w-3 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400 border-gray-500" : "transparent"}`} ></p>
                <img src={assets.stripe_logo} alt="stripe_logo" className="h-5 mx-4" />
              </div>
              <div onClick={() =>setMethot("razorpay")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className={`min-w-3 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400 border-gray-500" : "transparent"}`}></p>
                <img src={assets.razorpay_logo} alt="razorpay_logo" className="h-5 mx-4" />
              </div>
              <div onClick={() =>setMethot("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className={`min-w-3 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400 border-gray-500 " : "transparent"}`}></p>
                <p className="text-gray-500 text-sm font-medium mx-4">Paga al recibir</p>
              </div>

            </div>

            <div className="w-full text-end mt-8">
              <button onClick={() => navigate('/pedidos')} className="bg-black text-white text-sm px-8 py-3">
                REALIZAR PEDIDO
              </button>
            </div>

          </div>

        </div>

    </section>
  )
}

export default PlaceOrder