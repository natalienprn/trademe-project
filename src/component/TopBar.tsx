// import React from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';
import { CardData } from '../data/data';

import TrademeLogo from '/trademe-logo.jpg';
import TrademeLogoSmall from '/logo-small.png';
import { useState, useRef } from 'react';

import CateItem from '../data/cateList';

import BrowseItem from '../data/browselist';


// import { searchProducts } from '../commonLogic/SearchLogic';

import IconArrowGrey from '/icon/arrow-down-gr.png';
import IconArrowWhite from '/icon/arrow-down-24-wh.png';
import IconNavBarSearch from '/icon/search-48.png';
import IconNavBarWatchlist from '/icon/binoculars.png';
import IconNavBarFav from '/icon/heart-64.png';
import IconNavBarEdit from '/icon/edit.png';
import IconNavBarUser from '/icon/user-96.png';



const TopBar:React.FC = ()=>{
  const[BrowseDropdown, setBrowseDropdown] = useState(false);
  const[BrowseMpDropdown, setBrowseMpDropdown] = useState(false);
  // const [CateItem, setCateItem] = useState<CateItem[]>([]); 
  const [products, setProducts] = useState<CardData[]>([]); 

  const DropdownRef = useRef<HTMLDivElement>(null);
  const MpDropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () =>{
    setBrowseDropdown(!BrowseDropdown);
  };

  const toggleMpDropdown = () =>{
    setBrowseMpDropdown(!BrowseMpDropdown);
  };

  const handleClickOutside =  (e:any) =>{
    if(BrowseDropdown && !DropdownRef.current?.contains(e.target as Node)){
      setBrowseDropdown(false);
    }
    if(BrowseMpDropdown && !MpDropdownRef.current?.contains(e.target as Node)){
      setBrowseMpDropdown(false);
    }
  }

  window.addEventListener("click", handleClickOutside)

  const ddColumns = 4;
  const ddEachColumn = Math.ceil(CateItem.length / ddColumns);
  const ddEachColumnB = Math.ceil(BrowseItem.length / ddColumns);


    return(

        <div className='wrapper'>
       {/* top-bar1 */}
       <div className='wrapper-topbar'>
        <div className='top-bar'>
          <div className='top-bar-left'>
            <ul>
              <li>Trade Me</li>
              <li>Trade Me Insurance</li>
              <li>Holiday Houses</li>
              <li>FindSomeone</li>
              <li>MotorWeb</li>
              <li>homes.co.nz</li>
            </ul>
          </div>
          <div className='top-bar-right'>
            <ul>
              <li>Register</li>
              <li>Log in</li>
            </ul>
          </div>    
        </div>
        </div>
        {/* top-bar2 */}
        <div className='navbar'>
          <div className='navbar-left'>
            
            <ul>
              <li>
              <Link to="/">
                    
                <img id='logo-main' src={TrademeLogo} />
                <img id='logo-small' src={TrademeLogoSmall}/>
              </Link>
              </li>
              <div className='browse-div' ref={DropdownRef}>
                <li className='browse-list navbar-hidden'  onClick={() => toggleDropdown()}>
                Browse <img className='icon-navbar' src={IconArrowGrey}/>
                  <div id='browse-dd' 
                  style = {{ display: BrowseDropdown ? 'block' : 'none'}}
                    onClick = { (e) => e.stopPropagation()}
                    >
                    <div className='browse-topic'>Browse Marketplace</div>
                    <div className='dd-col-wrapper'>
                      {[...Array(ddColumns)].map((_, columnIndex)=>(
                        <div key={columnIndex} className='dd-col'>

                          {BrowseItem
                          .slice(1+ columnIndex * ddEachColumnB,1+ (columnIndex+1)*ddEachColumnB )
                          .map((item) =>(
                            <a key = {item.id} href='#'>
                              {item.item}
                            </a>
                            
                          ))}
                    
                        </div>
                      ))}

                    </div>
                    <div className="ddbrowse-footer">
                            <div style={{color: '#D93A3F'}} className='dd-col-under'><li>Marketplace</li></div>                           
                            <div style={{color: '#F5632D'}} className='dd-col-under'><li>Jobs</li></div>                            
                            <div style={{color: '#5F6F88'}} className='dd-col-under'><li>Motors</li></div>                           
                            <div style={{color: '#29A754'}} className='dd-col-under'><li>Property</li></div>                           
                            <div style={{color: '#555555'}} className='dd-col-under'><li>Services</li></div>
                    </div>      
                  </div>              
                </li>
              </div>
              
              <li>
                <div className='searchbar-hidden'>
                  <img src={IconNavBarSearch} className='icon-navbar '/>
                  <input className='input' type='text' 
                  placeholder='Search all of TradeMe'></input>
                </div>
                <div className='searchicon-smallscreen'>
                  <img src={IconNavBarSearch} className='icon-navbar '/>             
                  <div>Search</div>           
                </div>
              </li>
            </ul>
          </div>
          <div className='navbar-right'>
            <ul>
              <li >
                <div className='navbar-iconlist'>
                  <img src={IconNavBarWatchlist} className='icon-navbar'/>
                  <div>Watchlist</div> 
                </div>
                </li>
              <li className='navbar-hidden '>
                <div className='navbar-iconlist'>
                <img src={IconNavBarFav} className='icon-navbar'/>
                <div>Favourites</div>
                </div>
              </li>
              <li className='navbar-hidden'>
                <div className=' navbar-iconlist'>
                  <img src={IconNavBarEdit} className='icon-navbar'/>
                <div>Start a listing</div>
                </div>
                
                </li>
              <li className='navbar-iconlist navbar-iconlist-profile-lg'>
                <div>My Trade Me</div>
                <img src={IconNavBarUser} className='icon-navbar-user'/>
              </li>
              <li className='navbar-iconlist navbar-iconlist-profile-sm'>
                <img src={IconNavBarUser} className='icon-navbar-user'/>
                <div>My Trade Me</div>             
              </li>
            </ul>
          </div>    
        </div>
        {/* navbar - marketplace */}
        <div className='wrapper-navbar-mp'>
        <div className='navbar-mp'>
          <div className='navbar-left'>
            <ul>
              <div className='browse-div' ref={MpDropdownRef}>
                <li className='browse-list' onClick={() => toggleMpDropdown()}>
                Browse Marketplace
                <img src={IconArrowWhite} className='icon-navbar'/>
                <div id='browse-dd-mp' 
                style = {{ display: BrowseMpDropdown ? 'block' : 'none'}}
                onClick={(e) => e.stopPropagation()}
                >
        
                  <div className='dd-col-wrapper'>
                    {[...Array(ddColumns)].map((_, columnIndex)=>(
                      <div key={columnIndex} className='dd-col-mp'>
                        {CateItem
                        .slice(1+ columnIndex * ddEachColumn,1+ (columnIndex+1)*ddEachColumn )
                        .map((item) =>(
                          <a key = {item.id} href='#'>
                            {item.item}
                          </a>
                        ))}
                   
                      </div>
                    ))}
                    
                  
                  </div>
                  
                  </div>
                
              </li>
              </div>
              {/* <li><Link className='router-link' to='/'> Browse Marketplace</Link></li> */}
              
              <li className='navbar-hidden'>Stores</li>
              <li className='navbar-hidden'>Deals</li>
              <li className='navbar-hidden'>Book a courier</li>
            </ul>
          </div>
          <div className='top-bar-right'>
            <ul>
              <li>List an item</li>
            </ul>
          </div>
        </div>
        </div>
        </div>
        
    );
};
export default TopBar
