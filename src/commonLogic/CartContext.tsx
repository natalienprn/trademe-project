

import React, { useState, useContext, createContext, ReactNode } from 'react';
import { fetchCartInfo } from './AirtableService'; // Assuming you have this service for fetching data
import { CartHolder, CartDataType } from '../type/CartType'; // Import your types
// interface CartContextProps{
//     cartItems: ProductData[];
//     cartShipping: ShippingTable[];
//     addToCart: (product: ProductData) => void;
//     updateQuantity: (id: number, quantity: number) => void;
//     cartCount: number;
//     clearCart: () => void;
//     selectedDestination: string|null;
//     updateDestination: (destination: string) => void;
//     getShippingPrice: (destination: string) => number;

// }
// const CartContext = createContext<CartContextProps| undefined>(undefined);

// export const CartProvider = ({children}: {children: ReactNode}) => {
//     // const [cartItems, setCartItems] = useState<ProductData[]>([]);
//    const [cartItems, setCartItems] = useState<CartHolder[]>([]);
//     const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
    
//     // const addToCart = (product: ProductData) =>{
//     //     // setCartItems([...cartItems, product]);
//     //     setCartItems(prevItems =>{
//     //         const existingItem = prevItems.find(item => item.productId === product.productId);
//     //         if (existingItem){
//     //             return prevItems.map(item =>
//     //                 item.productId === product.productId ? { ...item,quantity: item.quantity +1} : item
//     //             );
//     //         }else{
//     //             return [...prevItems, {...product, quantity:1}];
//     //         }
//     //     });
    
//     // };
//     const addToCart = (productId: Number, quantity: number, shippingId: Number) => {
//         const existingItem = cartItems.find(item => item.productId === productId);
//         if (existingItem) {
//           setCartItems(cartItems.map(item => item.productId === productId
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//           ));
//         } else {
//           setCartItems([...cartItems, { productId, quantity, shippingId}]);
//         }
//       };
    
//     const updateQuantity = (id: number, quantity: number) => {
//         setCartItems(prevItems =>
//           prevItems.map(item =>
//             item.productId === id ? { ...item, quantity } : item
//           )
//         );
//       };

//     const clearCart = () => {
//         setCartItems([]);
//     };

//     // const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

//     const updateDestination = (destination: string) =>{
//         setSelectedDestination(destination);
//     };
//     const getShippingPrice = (destination: string) => {
//         return cartItems.reduce((total, item) => {
//             // const shipping = item.shippingTable.map((price =>price.destination === destination);
//             //     return total + (shipping ? Number(shipping.price)))
        
//             const shippingPrice = item.shippingPrice.find(price => price.destination === destination);
//             return total + (shippingPrice ? Number(shippingPrice.price): 0);
//         }, 0);

//     }
//     return(
//         <CartContext.Provider value={{cartItems, addToCart, updateQuantity, cartCount: cartItems.length, clearCart, selectedDestination, updateDestination, getShippingPrice }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCartContext = () => {
//     const context= useContext(CartContext);
//     if(!context){
//         throw new Error("useCartContext only to used within CartProvider");
        
//     }
//     return context;
// };
// import AirtableService from './AirtableService';
// import { CartDataType } from "../type/CartType";
// import { fetchCartInfo } from "./AirtableService";
// import cardData from '../data/data';

// const CartContext = React.createContext({
//   cartHolder: [] as CartHolder[],
//   fetchCartData: async () => {
//     const cartItems: CartDataType[] = await fetchCartInfo(CartHolder);
//     return cartItems;
//   },
//   addToCart: (productId: string, quantity: number, shippingId: string) => {},
//   removeFromCart: (productId: string) => {},
//   updateCartQuantity: (productId: string, quantity: number) => {},
//   updateShipping: (productId: string, shippingId: string) => {},
//   cartCount: 0,
//   cartTotal: 0,
// });



// Define the context properties
interface CartContextProps {
  cartItems: CartDataType[];
  addToCart: (productId: string, quantity: number, shippingId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  getShippingPrice: (destination: string) => number;
  cartCount: number;
  cartTotal: number;
  clearCart: () => void;
}

// Create the CartContext
const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartDataType[]>([]); // Cart items array

  // Function to add an item to the cart
  const addToCart = async (productId: string, quantity: number, shippingId: string) => {
    // Check if item is already in the cart
    const existingItem = cartItems.find(item => item.productId === productId);
    if (existingItem) {
      // If item exists, update quantity
      setCartItems(cartItems.map(item =>
        item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      // Fetch product and shipping details using Airtable service
      const newCartItem = await fetchCartInfo([{ productId, quantity, shippingId }]);
      setCartItems([...cartItems, ...newCartItem]); // Add new cart item
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId: string) => {
    setCartItems(cartItems.filter(item => item.productId !== productId));
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems(cartItems.map(item =>
      item.productId === productId ? { ...item, quantity } : item
    ));
  };

  // Function to calculate total shipping price based on the selected destination
  const getShippingPrice = (destination: string) => {
    return cartItems.reduce((total, item) => {
      // Find the matching shipping option for the selected destination
      const shippingOption = item.shipping.find(shipping => shipping.destination === destination);
      console.log("getShippingPrice: ", shippingOption?.price );
      return total + (shippingOption ? Number(shippingOption.price) : 0);
      
    }, 0);
      
  };


  // Calculate the total number of items in the cart
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  // Calculate the total cost of the cart (without shipping)
  const cartTotal = cartItems.reduce((total, item) => total + item.subtotal, 0);

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getShippingPrice,
        cartCount,
        cartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext in components
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

