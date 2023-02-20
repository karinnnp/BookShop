export type SummaryType = {
  totalPrice: number;
  selectedProduct: number;
  isDisabledBtn: boolean;
  isSelectedAll: boolean;
};

export type ProductsType = {
  id: number;
  name: string;
  author: string;
  description: string;
  thumbnail: string[];
  price: string;
  stock: number;
};

export type ProductType = {
  status: "SUCCESS" | "ERROR" | "FAILED";
  message: string;
  details: ProductsType[] | string;
};

