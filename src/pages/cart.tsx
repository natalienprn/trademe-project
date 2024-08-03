import React from 'react';
import { useCartContext } from '../commonLogic/CartContext';
import './cart.css';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Carousel from '../component/Carousel';
import cardData from '../data/data';
import CartHeader from '../component/cart-header/CartHeader';
import CartTopBar from '../component/cart-header/CartTopBar';
const Cart: React.FC = () => {
  const { cartItems, updateQuantity } = useCartContext();
const [selectedShipping, setSelectedShipping] = useState<{ [key: string]:number}>({});

  console.log(cartItems);

  const [totalShipping, setTotalShipping] = useState<number>(0);

//   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedCategory(event.target.value);
//   };
  const handleShipping = (event: React.ChangeEvent<HTMLSelectElement>, itemId: number) => {
    setSelectedShipping({
        ...selectedShipping, [itemId]:Number(event.target.value),
    });
  };


//   const getSelectedCategoryName = () => {
//     const category = CateItem.find(cat => cat.item === selectedCategory);
//     return category ? category.item: '';
//   };

  const calculateTotalPrice = () =>{
    return cartItems.reduce((total, item) =>{
        return total + (Number(item.currentPrice) * item.quantity);
    }, 0);
  }

  useEffect(() => {
    const total = Object.values(selectedShipping).reduce((acc, price) => acc + price, 0);
    setTotalShipping(total);
  }, [selectedShipping]);

  return (
    <div className='container'>
        <CartTopBar/>
        <div className='cart-page-body'>
            <CartHeader/>
            
            <div className='cart-main-body'>
                <h1>Shopping Cart</h1>
                <ul>
                    {cartItems.map((item, index) => (
                    <li key={index}>
                        <div className='shopping-cart-card'>
                           <div className='item-list-header'>
                                Listings from <span className='item-shopname'>{item.shopName}</span>
                            </div>
                            <div className='item-lists'>
                                <div className='item-img'>
                                    <img src={item.productImg[0]} />
                                </div>
                                <table className='item-info'>
                                    <tbody>
                                        <th className='item-info-row item-row-first'>
                                            <td className='item-info-cell left-cell item-name'colSpan={4}>
                                                {item.productName}
                                            </td>
                                            <td className='item-info-cell right-cell delete-item' colSpan={1}>
                                                <span className='remove'>Remove</span>
                                                <img src='./icon/close-gr.png' />
                                            </td>
                                        </th>
                                      
                                        <tr className='item-info-row item-row-second'>
                                            <td className='item-info-cell item-info-topic'colSpan={4}>
                                                Quantity: 
                                                <input type='number'  min="1" value={item.quantity} onChange={e => updateQuantity(item.productId, Number(e.target.value))}/>
                                                 x ${item.currentPrice}
                                            </td>
                                            <td className='item-info-cell right-cell item-price'colSpan={1}>
                                                ${Number(item.currentPrice) * item.quantity}
                                            </td>
                                        </tr>
                                        <tr className='item-info-row'>
                                            <td className='item-info-cell item-info-topic' colSpan={4}>
                                                Shipping:
                                                <select id='shipping' onChange={(e)=> handleShipping(e, item.productId)} >
                                                    <option>
                                                        Select shipping
                                                    </option>
                                                                                                      
                                                     {item.shippingPrice.map((shippingprice) =>(
                                                        <option value={shippingprice.price}>
                                                            {shippingprice.price} - {shippingprice.destination}                                                                     
                                                        </option>
                
                                                    ))}
                                                </select>
                                            </td>
                                            <td className='item-info-cell right-cell item-price' colSpan={1}>
                                                ${selectedShipping[item.productId] || 0}
                                            </td>
                                            
                                        </tr>
                                    </tbody>
                                    
                                    
                                </table>
                            </div> 
                        </div>
                        
                        
                    </li>
                    
                    ))}
                    <li >
                        <div className='total-cart'>
                            <div className='total-cart-content'>
                               <div className='total-heading'>
                                    <div className='total-cell-left'>
                                    Item subtotal  
                                    </div>
                                    <div className='total-cell-right'>
                                        ${calculateTotalPrice()}
                                    </div>
                                    
                                </div>
                                <div className='total-heading'>
                                    <div className='total-cell-left shipping'>
                                        Shipping subtotal
                                    </div>
                                    <div className='total-cell-right shipping'>
                                        ${totalShipping}
                                    </div>
                                </div> 
                            </div>
                            
                        </div>
                        <div className='total-cart-summary'>
                            <div className='total-cart-content'>
                                <div className='total-summary'>
                                    <div className='total-cell-left'>
                                        Total to pay
                                    </div>
                                    <div className='total-cell-right'>
                                        <div className='choose-shipping'>
                                        please choose shipping for all listings  
                                        </div>
                                        <div className='total-price'>
                                            ${calculateTotalPrice() + totalShipping}
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                       </li>
                </ul>
                
                <div className='btn-cart-page'>
                    <Link to="/">
                        <button className='btn-continue-shop'>
                            Continue shopping
                        </button>
                    </Link>
                    <button className='btn-checkout'>
                        Proceed to checkout
                    </button>

                </div>
                
            </div>
            
            
        </div>
        <div className='suggestion-part'>
            <div className='suggest-container'>
                <div className='suggest-content'>
                   <div className='suggest-topic'>
                        You might also like
                    </div>
                    <Carousel cardData={cardData}/> 
                </div>
                
            </div>
            
        </div>
        <div className='cart-footer'>
            <div className='cart-footer-wrapper'>
                <div className='footer-left'>
                    <ul className='footer-lists'>
                        <li>Browse</li>
                        <li>Sell</li>
                        <li>My Trade Me</li>
                        <li>Community</li>
                        <li>Help</li>
                    </ul>
                    <ul className='footer-lists'>
                        <li>Announcements</li>
                        <li>Trust & Safety</li>
                        <li>Seller Information</li>
                        <li>Advertise</li>
                        <li>Apps</li>
                    </ul>
                    <ul className='footer-lists'>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Investor Relations</li>
                        <li>Policies</li>
                        <li>Contact Us</li>
                    </ul>

                </div>
                <div className='footer-right'>
                    <div className='footer-right-wrapper'>
                        Back to top <img src='./icon/arrow-up-gr.png'/>
                        <div className='btn-screen'>
                            <button className='btn-desktop'><img src='./icon/desktop-grey.png'/>Desktop</button>
                            <button className='btn-phone'><img src='./icon/phone-gr.png'/>Mobile</button>
                        </div>
                        <div className='copyright'>
                        © 2024 Natalie O.
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     
    </div>
  );
};

export default Cart;
