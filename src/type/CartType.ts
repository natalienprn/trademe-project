export interface CartDataType {

    productId: string;
    productName: string;
    shopName: string
    
    shippingId: string;

    salesPrice: number; 
    productImg: string;
    quantity: number;
    subtotal: number;
    shipping: Shipping[];

}
export interface Shipping{
    shippingId: string;
    destination: string;
    price: number;
}
export interface CartHolder {
    productId:string;
   
    shippingId: string;

    quantity: number;

}
