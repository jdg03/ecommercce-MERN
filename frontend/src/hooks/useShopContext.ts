import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import type { ShopContextType } from '../interfaces/ShopContextType';

export const useShopContext = (): ShopContextType => {
  const context = useContext(ShopContext);
  
  if (!context) {
    throw new Error('useShopContext must be used within ShopContextProvider');
  }
  
  return context;
};