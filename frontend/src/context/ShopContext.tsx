  import { createContext, useState } from "react";
  import { products } from "../assets/frontend_assets/assets";
  import type { ShopContextType } from "../interfaces/ShopContextInterface";

  export const ShopContext = createContext<ShopContextType | null>(null);
  
  const ShopContextProvider = (props: any) => {

    const  currency: string = "L";
    const delivery_fee: number = 10;

    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
  }

  export default ShopContextProvider;