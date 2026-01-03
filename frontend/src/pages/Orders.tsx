import Title from "../components/ui/Title";
import { useShopContext } from "../hooks/useShopContext";

const Orders = () => {
  const { products, currency } = useShopContext();

  return (
    <section className="border-t pt-16">
      <div className="text-2xl">
        <Title text1="Mis" text2="Pedidos" />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <div className="flex items-start gap-6 text-sm">
                <img
                  src={item.image[0]}
                  alt="image_product"
                  className="w-16 sm:w-20"
                />
                <div>
                  <p className="sm:text-base font-medium">{item.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-base text-gray">
                    <p className="text-lg">
                      {currency}
                      {item.price}
                    </p>
                    <p>Cantidad</p>
                    <p>Size: {item.sizes[0]}</p>
                    {item.colors && item.colors.length > 1 && (
                      <p>Color: {item.colors}</p>
                    )}
                  </div>
                  <p className="mt-2">
                    Date: <span className="text-gray-400">25, Jul, 2025</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Listo para enviar</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                Seguir pedido
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Orders;
