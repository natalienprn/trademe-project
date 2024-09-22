export interface ProductData {
    productId: Number;
    productName: string;
    city: string;
    closeDate: Date;
    originalPrice: number;
    salesPrice: number;
    condition: string;
    variance: string;
    brand: string;
    shopName: string;
    fullDescriptions: string;
    shippingDeals: string;
    productImg: string[];
    shippingTable: ShippingTable[];
  }
  interface ShippingTable{
    destination: string;
    price: string;
  }