

export type OrderDetailBodyType = {
    productid: number;
    quantity: number;
  }
  
  export type OrderBodyType = {
    totalprice: string;
    status: string;
    products: OrderDetailBodyType[];
  }
  
  export type DetailOrderType = {
    id: number;
    name: string;
    author: string;
    description: string;
    thumbnail: string;
    price: string;
    quantity: number;
  };
  
  export type OrdersType = {
    id: number;
    products: DetailOrderType[];
    totalPrice: string;
    status: string;
    typePayment: number;
    createdAt: string;
    approvedAt: string;
    cancelledAt: string;
  };
  
  export type OrderType = {
    status: "SUCCESS" | "ERROR" | "FAILED";
    message: string;
    details: OrdersType | OrdersType[] | string;
  };