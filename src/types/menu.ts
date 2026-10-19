export type Tag = "spicy" | "vegan" | "vegetarian" | "seafood" | "house-made";
export interface PriceOption {
  label: string;
  price: number;
}
export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: number;
  options?: PriceOption[];
  priceNote?: string;
  addOns?: string[];
  tags?: Tag[];
  featured?: boolean;
}
export interface MenuCategory {
  id: string;
  name: string;
  note?: string;
  items: MenuItem[];
}
