 import type { Product } from "./ProductInterface";

 export interface ShopContextType {
        products: Product[];
        currency: string;
        delivery_fee: number;
    }