export interface ProductData {
    productId: string;
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
 export interface ShippingTable{
    destination: string;
    price: string;
  }