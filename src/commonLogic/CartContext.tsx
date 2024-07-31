import {useState, useContext,createContext, ReactNode} from 'react'
import { Product } from "../data/dataGenerator";


interface CartContextProps{
    cartItems: Product[];
    addToCart: (product: Product) => void;
    updateQuantity: (id: number, quantity: number) => void;
    cartCount: number;
    clearCart: () => void;
    selectedDestination: string|null;
    updateDestination: (destination: string) => void;
    getShippingPrice: (destination: string) => number;

}
const CartContext = createContext<CartContextProps| undefined>(undefined);

export const CartProvider = ({children}: {children: ReactNode}) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
    
    const addToCart = (product: Product) =>{
        // setCartItems([...cartItems, product]);
        setCartItems(prevItems =>{
            const existingItem = prevItems.find(item => item.productId === product.productId);
            if (existingItem){
                return prevItems.map(item =>
                    item.productId === product.productId ? { ...item,quantity: item.quantity +1} : item
                );
            }else{
                return [...prevItems, {...product, quantity:1}];
            }
        });
    
    };
    const updateQuantity = (id: number, quantity: number) => {
        setCartItems(prevItems =>
          prevItems.map(item =>
            item.productId === id ? { ...item, quantity } : item
          )
        );
      };

    const clearCart = () => {
        setCartItems([]);
    };

    // const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    const updateDestination = (destination: string) =>{
        setSelectedDestination(destination);
    };
    const getShippingPrice = (destination: string) => {
        return cartItems.reduce((total, item) => {
            const shippingPrice = item.shippingPrice.find(price => price.destination === destination);
            return total + (shippingPrice ? Number(shippingPrice.price): 0);
        }, 0);

    }
    return(
        <CartContext.Provider value={{cartItems, addToCart, updateQuantity, cartCount: cartItems.length, clearCart, selectedDestination, updateDestination, getShippingPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context= useContext(CartContext);
    if(!context){
        throw new Error("useCartContext only to used within CartProvider");
        
    }
    return context;
};