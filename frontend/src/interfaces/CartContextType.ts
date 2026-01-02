import type { CartItem } from "../interfaces/CartItemIterface";

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: string, size: string, price: number, color?: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number, color?: string) => void;
  removeFromCart: (productId: string, size: string, color?: string) => void;
  getCartCount: () => number;
  clearCart: () => void;
  getCartTotal: () => number;
}
