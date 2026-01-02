// ShopContextInterface.ts
import type { Product } from "./ProductInterface";

export interface ShopContextType {
  products: Product[];
  currency: string;
  delivery_fee: number;
  search: string;
  setSearch: (search: string) => void;
  showSearch: boolean;
  setShowSearch: (show: boolean) => void;
  navigate: any;
}