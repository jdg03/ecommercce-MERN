// contexts/CartContext.tsx
import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import type  {CartContextType} from "../interfaces/CartContextType";
import type  {CartItem} from "../interfaces/CartItemIterface";


export const CartContext = createContext<CartContextType | null>(null);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Función helper para encontrar un item
  const findCartItem = (productId: string, size: string, color?: string) => {
    return cartItems.findIndex(
      item => 
        item.productId === productId && 
        item.size === size && 
        item.color === color
    );
  };

  const addToCart = (productId: string, size: string, price: number, color?: string, ) => {
    const existingIndex = findCartItem(productId, size, color);

    console.log("el precio que llego es:" + price);

    if (existingIndex !== -1) {
      // Ya existe, incrementar cantidad
      const updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += 1;
      setCartItems(updatedCart);
      toast.success('Cantidad del producto aumentada');
    
 
    } else {
      // No existe, agregar nuevo
      setCartItems([...cartItems, { productId, size, price, color, quantity: 1}]);
      toast.success('Producto agregado al carrito');
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
        toast.success('Cantidad actualizada');
      }
    }
  };

  const removeFromCart = (productId: string, size: string, color?: string) => {
    const existingIndex = findCartItem(productId, size, color);
    if (existingIndex !== -1) {
      setCartItems(cartItems.filter((_, index) => index !== existingIndex));
      toast.success('Producto eliminado del carrito');
    }
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const clearCart = () => {
    setCartItems([]);
    toast.success('Carrito vaciado');
  };

  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    getCartCount,
    clearCart,
    getCartTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;