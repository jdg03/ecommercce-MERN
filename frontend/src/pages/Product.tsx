import { useParams } from "react-router-dom";
import { useShopContext } from "../hooks/useShopContext";
import { useEffect, useState } from "react";
import type { Product } from "../interfaces/ProductInterface";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/products/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useShopContext();
  const [productData, setProductData] = useState<Product | null>(null);
  const [image, setImage] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const fetchProductData = async () => {
    const product = products.find((product) => product._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <section className="bprder-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/**product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row ">
        {/**product image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="product_image"
                onClick={() => setImage(img)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer hover:scale-110 transition ease-in-out"
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img src={image} alt="product_image" className="w-full h-auto" />
          </div>
        </div>

        {/* Product info*/}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(163)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5 ">
            {productData.description}
          </p>

          {/**product options */}
          <div className="flex flex-col gap-2 my-8">
            <div className="flex flex-col">
              <p>Selecciona el tamaño</p>
              <div className="flex gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`px-4 py-2 border bg-gray-100 rounded ${
                      item === size ? "border-black" : ""
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          
            {productData.colors?.length > 0 && (
              <div className="flex flex-col">
                <p>Selecciona el color</p>
                <div className="flex gap-2">
                  {productData.colors.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setColor(item)}
                      className={`px-4 py-2 border bg-gray-100 rounded ${
                        item === color ? "border-black" : ""
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
            </div>
          )}
          
        </div>

          <button className="bg-black text-white px-8 py-3 rounded text-sm active:bg-gray-7 hover:scale-x-105 transition ease-in-out">
            Agregar al carrito
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original</p>
            <p>Paga al recibir disponible</p>
            <p>Envío a domicilio</p>
          </div>
        </div>
      </div>

      {/** description and review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5  py-3 text-sm">Descripción</b>
          <p className="border px-5 py-3 text-sm">Reviews (163)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur ipsum est quam quaerat exercitationem veritatis possimus
            ullam error, deleniti tempora dolore rerum rem velit sint, ducimus
            obcaecati incidunt ex? Ea!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur ipsum est quam quaerat exercitationem veritatis possimus
            ullam error, deleniti tempora dolore rerum rem velit sint, ducimus
            obcaecati incidunt ex? Ea!
          </p>
        </div>
      </div>

      {/*display related productos*/ }
      <div>
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      </div>


    </section>
  ) : (
    <p>Loading...</p>
  );
};

export default Product;
