// contexts/CartContext.tsx
import { createContext, useState, useEffect } from "react";
import type { Product } from "../interfaces/ProductInterface";

export interface CartItem {
  productId: string;
  size: string;
  color?: string;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: string, size: string, color?: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number, color?: string) => void;
  removeFromCart: (productId: string, size: string, color?: string) => void;
  getCartCount: () => number;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Función helper para encontrar un item
  const findCartItem = (productId: string, size: string, color?: string) => {
    return cartItems.findIndex(
      item => 
        item.productId === productId && 
        item.size === size && 
        item.color === color
    );
  };

  const addToCart = (productId: string, size: string, color?: string) => {
    const existingIndex = findCartItem(productId, size, color);

    if (existingIndex !== -1) {
      // Ya existe, incrementar cantidad
      const updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      // No existe, agregar nuevo
      setCartItems([...cartItems, { productId, size, color, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId: string, size: string, quantity: number, color?: string) => {
    const existingIndex = findCartItem(productId, size, color);

    if (existingIndex !== -1) {
      if (quantity <= 0) {
        // Eliminar si la cantidad es 0 o menor
        setCartItems(cartItems.filter((_, index) => index !== existingIndex));
      } else {
        // Actualizar cantidad
        const updatedCart = [...cartItems];
        updatedCart[existingIndex].quantity = quantity;
        setCartItems(updatedCart);
      }
    }
  };

  const removeFromCart = (productId: string, size: string, color?: string) => {
    const existingIndex = findCartItem(productId, size, color);
    if (existingIndex !== -1) {
      setCartItems(cartItems.filter((_, index) => index !== existingIndex));
    }
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    getCartCount,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;