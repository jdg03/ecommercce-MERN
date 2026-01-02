import { useCartContext } from "../hooks/useCartContext";
import { useShopContext } from "../hooks/useShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/ui/Title";
import CartTotal from "../components/cart/CartTotal";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCartContext();
  const { products, currency } = useShopContext();


  if (cartItems.length === 0) {
    return (
      <div className="border-t pt-14">
        <div className="text-2xl mb-3">
          <p>Tu carrito está vacío</p>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="Tu" text2="carrito"></Title>
      </div>

      <div>
        {cartItems.map((item, index) => {
          // Buscar los datos completos del producto
          const productData = products.find(product => product._id === item.productId);

          if (!productData) return null; // Si no existe el producto, skip

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              {/* Información del producto */}
              <div className="flex items-start gap-6">
                <img 
                  src={productData.image[0]} 
                  alt={productData.name}
                  className="w-16 sm:w-20"
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{currency} {item.price.toFixed(2)}</p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                    {item.color && (
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.color}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Control de cantidad */}
              <div className="flex items-center gap-2">

                <button
                  onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1, item.color)}
                  className="border px-2 py-1 hover:bg-gray-100"
                >
                  -
                </button>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.productId, item.size, Number(e.target.value), item.color)}
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 text-center"
                />
                <button
                  onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1, item.color)}
                  className="border px-2 py-1 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              {/* Botón eliminar */}
              <img
                onClick={() => removeFromCart(item.productId, item.size, item.color)}
                src={assets.bin_icon}
                alt="Eliminar"
                className="w-4 mr-4 sm:w-5 cursor-pointer"
              />
            </div>
          );
        })}
      </div>

      {/* Resumen del carrito */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
        </div>
        
      </div>

    </div>
  );
};

export default Cart;