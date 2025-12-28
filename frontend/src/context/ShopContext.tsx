  import { createContext } from "react";
  import { products } from "../assets/frontend_assets/assets";

  export const ShopContext = createContext<any>(null);

  const ShopContextProvider = (props: any) => {

    const  currency: string = "L";
    const delivery_fee: number = 10;

    const value = {
        products,
        currency,
        delivery_fee,
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
  }

  export default ShopContextProvider;