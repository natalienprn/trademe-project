
import './CartHeader.css'
import CateItem from '../data/cateList';
import { useState } from 'react';

import IconArrowDwBl from '/icon/arrow-down-bl.png'
import { Link } from 'react-router-dom';
import { useCartContext } from '../commonLogic/CartContext';


const CartHeader:React.FC = () => {
    const { cartItems, updateQuantity, clearCart, selectedDestination, updateDestination, getShippingPrice } = useCartContext();


  console.log(cartItems);
  const [selectedCategory, setSelectedCategory] = useState(CateItem[0].item);


  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const getSelectedCategoryName = () => {
    const category = CateItem.find(cat => cat.item === selectedCategory);
    return category ? category.item: '';
  };




    return (
        <div className='wrapper'>
            <div className='cart-header'>
                <div className='cart-header-left'>
                    <Link to="/">
                        <img src='/trademe-logo.jpg'/>
                    </Link>
                    
                </div>
                <div className='cart-header-right'>
                    <div className='log-on-detail'>
                        <div className='log-in-time'> 2:24 pm, 13 Jul</div>
                        <div className='user-name'> Hi Pharanun (Nata... !</div>
                        <div className='log-out'>Log out</div>
                    </div>
                    <div className='cart-header-nav'>
                        <div className='cart-header-nav-left'>
                            Browse <span><img src={IconArrowDwBl}/></span>
                        </div>
                        <div className='cart-header-nav-right'>
                            <ul>
                                <li>Community<span><img src={IconArrowDwBl}/></span></li>
                                <li>List an item<span><img src={IconArrowDwBl}/></span></li>
                                <li>My Trade Me<span><img src={IconArrowDwBl}/></span></li>
                            </ul>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className='cart-navbar'>
                <div className='cart-nav-left'>
                    <div className='cart-searchbox'>
                        <div className='cart-search-input'>
                            <input type="text" placeholder='Search' />
                        </div>
                        
                        <div className="dropdown-display">
                            in 
                        </div>
                        <select value={selectedCategory} onChange={handleChange} className="hidden-dropdown">
                            {CateItem.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.item}
                                </option>
                            ))}
                        </select>
                        
                    </div>
                    
                    <div className='cart-btn-search'>
                    <button>
                        <img src='./icon/search-wh.png'/>
                        </button>
                    </div>
                    <div className='cart-search-exp-arrow'>
                        <img src='./icon/arrow-down-or.png'/>
                    </div>
                    
                </div>
                <div className='cart-nav-right'>
                    <ul>
                        <li><img src='./icon/heart-br.png' />Favourites</li>
                        <li><img src='./icon/binocular-br.png' />Watchlist <img id='arrow' src='./icon/arrow-down-or.png'/></li>
                        <li><img src='./icon/cart-br.png' />Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CartHeader;