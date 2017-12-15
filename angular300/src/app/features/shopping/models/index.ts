export interface ProductListItem {
  id: string;
  description: string;
  price: number;
  instock: boolean;
}

export interface ShoppingCartItem {
  id: string;
  description: string;
  price: number;
  quantity: number;
  total: number;
}

export interface CartSummary {
  numberOfItems: number;
  total: number;
}
