// hooks/useCartContext.ts
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCartContext = () => {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error("useCartContext debe usarse dentro de CartContextProvider");
  }
  
  return context;
};