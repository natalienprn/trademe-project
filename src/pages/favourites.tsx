import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './favourites.css'
import UtilityBar from '../component/header/UtilityBar';
import MainHeader from '../component/header/MainHeader';
import FooterBlock from '../component/FooterBlock';

import IconSearchActive from '/icon/search-bl.png';
import IconCateActive from '/icon/cate-black-fav.png';
import IconSellerActive from '/icon/user-black-fav.png';

import IconSearch from '/icon/search-blue-fav.png';
import IconCate from '/icon/cate-bl.png';
import IconSeller from '/icon/user-bl.png';



import FavSearches from '../component/fav-content/Searches';
import FavCategories from '../component/fav-content/Categoies';
import FavSellers from '../component/fav-content/Sellers';



const searches = [
    {title:"bracelet", cate:"Jewellery & watches", type: "search"},
    {title:"ps5", cate:"Consoles", type:"search"}
]

const categories = [
    {cate:"Other gemstone",address:"Marketplace/Jewellery & watches / Bracelets & bangles / Gold / Other gemstone", type: "category"},
    {cate:"Care Bears",address: "Marketplace / Toys & models / Bears / Care Bears", type:"category"}
]

const sellers = [
    {shopname:"tigertoys (558)", img:"https://img.icons8.com/?size=100&id=20749&format=png&color=000000",type: "search"}
   
]

const Favourites:React.FC = () => {
    const location = useLocation();

    const renderContent = () =>{
        switch(location.pathname){
            case '/favourites/categories':
                return <FavCategories categories={categories} />;
            case '/favourites/sellers':
                return <FavSellers sellers={sellers}/>
            default:
                return <FavSearches searches={searches}/>;
        }
    }

    return (
        <div className='wrapper'>
            <UtilityBar />
            <MainHeader />
            <div className='blue-strip'></div>

            <div className='body-wrapper'>
                <aside className='aside'>
                    <div className='aside-heading'>My Trade Me</div>
                    <ul>
                        <li className='underline first-list'>Account details</li>
                        <li className='underline'>Notifications <span className='noti'>14</span></li>
                        <li className='underline'>Watchlist (10)</li>
                        <li className='underline aside-chose'>Favourites (1)</li>
                        <li className='aside-topic'>Buying</li>
                        <li className='topic-member'>Won </li>
                        <li className='topic-member'>Lost (43)</li>
                        <li className='topic-member underline'>Fixed price offer (5)</li>
                        <li className='aside-topic'>Selling</li>
                        <li className='topic-member'>Start a listing</li>
                        <li className='topic-member'>Items I'm selling</li>
                        <li className='topic-member'>Sold</li>
                        <li className='topic-member'>Unsold</li>
                        <li className='topic-member underline'>Sales summary</li>
                        <li className='underline'>My Products</li>
                        <li>Book a courier</li>
                        <li className='underline'>Manage bookings</li>
                        <li className='underline'>Settings</li>
                        <li>Help</li>
                    </ul>
                </aside>
                <main className='main-body'>
                    <div className='fav-heading'>
                        <div className='link-ads'>
                            Home /My Trade me /Favourites /Searches
                        </div>
                        <div className='fav-title'>
                            Favourites
                        </div>
                        <div className='fav-subtitle'>
                            Manage additional email settings on your <a href='#'>email preferences page.</a>
                        </div>
                    </div>
                    
                    <div className='fav-wrapper'>
                        <div className='fav-tab-area'>
                            <Link to="/favourites/searches" className={`fav-tab first-tab ${location.pathname === '/favourites/searches' ? 'active' : ''}`} >
                                <img src={location.pathname === '/favourites/searches' ? IconSearchActive : IconSearch} />
                                Searches
                            </Link>
                            <Link to="/favourites/categories" className={`fav-tab ${location.pathname === '/favourites/categories' ? 'active' : ''}`}>
                                <img src= {location.pathname === '/favourites/categories' ? IconCateActive : IconCate} />
                                Categories
                            </Link>
                            <Link to="/favourites/sellers" className={`fav-tab ${location.pathname === '/favourites/sellers' ? 'active' : ''}`}>
                                <img src={location.pathname === '/favourites/sellers' ? IconSellerActive : IconSeller} />
                                Sellers</Link>
                        </div>
                        <div className='content'>
                            {renderContent()}
                        </div>
                    </div>
                    <div className='blank-ads'>

                    </div>
                </main>
            </div>
            <FooterBlock />
            
        </div>
    );
};

export default Favourites;