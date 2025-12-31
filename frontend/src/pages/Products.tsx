import { useEffect, useState } from "react";
import { useShopContext } from "../hooks/useShopContext";
import { CATEGORIES } from "../constants/categories";
import { CLOTHES_SUBCATEGORIES } from "../constants/subcategories";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/ui/Title";
import type { Product } from "../interfaces/ProductInterface";
import ProductItem from "../components/ui/ProductItem";

const Products = () => {
  const { products } = useShopContext();
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [filterProducts, setFilterProducts] = useState<Product[]>(products);
  const [category, setCategory] = useState<string[]>([]);
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [sortType, setSortType] = useState<string>("relevant");

  // useEffect(() => {
  //   setFilterProducts(products);
  // }, [products]);

  //function for toggle category, called when category checkbox changes 
  const toggleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  //function for toggle sub category, called when subCategory checkbox changes 
  const toggleSubCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (subCategories.includes(e.target.value)) {
      setSubCategories((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    } else {
      setSubCategories((prev) => [...prev, e.target.value]);
    }
  };
  
  //function for apply filters, called when category or subCategories changes 
  const applyFilters = () => {
    
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        category.includes(product.category)
      );
    }

    if (subCategories.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        subCategories.includes(product.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  //effect for apply filters, activated when category or subCategories changes 
  useEffect(() => {
    applyFilters();
  }, [category, subCategories]);

  //function for sorting products, called when sortType changes 
  const sortProducts = (value: string) => {

    let filteredProductsCopy = filterProducts.slice();

    switch (value) {
      case "relevant":
        break;
      case "low-high":
        setFilterProducts(filteredProductsCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filteredProductsCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilters();
        break;
    }
  }

  //effect for sorting products, activated when sortType changes 
  useEffect(() => {
    sortProducts(sortType);
  }, [sortType]);

  return (
    <section className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter options*/}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTROS
          <img
            src={assets.dropdown_icon}
            alt="dropdown_icon"
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>

        {/**Caregory filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-2 text-sm font-medium">CATEGORIAS</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {CATEGORIES.map((category) => (
              <p key={category.value} className="flex gap-2">
                <input
                  type="checkbox"
                  value={category.value}
                  onChange={toggleCategory}
                  className="w-3"
                />
                {category.label}
              </p>
            ))}
          </div>
        </div>

        {/** Sub category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-5 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-2 text-sm font-medium">TIPO</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {CLOTHES_SUBCATEGORIES.map((subCategory) => (
              <p key={subCategory.value} className="flex gap-2">
                <input
                  type="checkbox"
                  value={subCategory.value}
                  className="w-3"
                  onChange={toggleSubCategory}
                />
                {subCategory.label}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/** Right side */}
      <section className="flex-1">
        {/**products sort */}
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"TODOS"} text2={"LOS PRODUCTOS"} />
          <select
            value={sortType}
            name="sort"
            id="sort"
            className="border 2 border-gray300 text-sm px-2"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">ordernar por: relevancia</option>
            <option value="low-high">ordenar por: Más bajo al más alto </option>
            <option value="high-low">ordenar por: Más alto al más bajo</option>S
          </select>
        </div>

        {/* products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((product: Product) => (
            <ProductItem key={product._id} {...product} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Products;
