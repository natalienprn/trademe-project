import React from 'react'
import { Link } from 'react-router-dom';
import './favourites.css'
import UtilityBar from '../component/header/UtilityBar';
import MainHeader from '../component/header/MainHeader';
import FooterBlock from '../component/FooterBlock';

import IconSearch from '/icon/search-bl.png';
import IconCate from '/icon/cate-bl.png';
import IconSeller from '/icon/user-bl.png';

const Favourites:React.FC = () => {


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
                            <Link to="/searches" className='fav-tab current first-tab' >
                                <img src={IconSearch} />
                                Searches
                            </Link>
                            <Link to="/categories" className='fav-tab'>
                                <img src= {IconCate} />
                                Categories
                            </Link>
                            <Link to="/sellers" className='fav-tab'>
                                <img src={IconSeller} />
                                Sellers</Link>
                        </div>
                        <div className='content'>
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