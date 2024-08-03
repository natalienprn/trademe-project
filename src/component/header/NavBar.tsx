import './Header.css'
import { useNavigate } from 'react-router-dom';


import { useState, useRef} from 'react';

import CateItem from '../../data/cateList';

import IconArrowWhite from '/icon/arrow-down-24-wh.png';


  interface CateItemType{
    id: number;
    item: string;
  }
const NavBar:React.FC = () =>{
       
    const[BrowseDropdown, setBrowseDropdown] = useState(false);
    const[BrowseMpDropdown, setBrowseMpDropdown] = useState(false);
    // const [CateItem, setCateItem] = useState<CateItem[]>([]); 
    // const [products, setProducts] = useState<CardData[]>([]); 
  
    const DropdownRef = useRef<HTMLDivElement>(null);
    const MpDropdownRef = useRef<HTMLDivElement>(null);
  
    const navigate = useNavigate();
  
  
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
  
    const handleBrowseMPItem =(item: CateItemType) => {
      const keywordMP = '';
      const categoryMP = item.id;
      navigate(`/results?keyword=${keywordMP}&category=${categoryMP}`);
    }
  
    window.addEventListener("click", handleClickOutside)
  
    const ddColumns = 4;
    const ddEachColumn = Math.ceil(CateItem.length / ddColumns);
   
  

    return (
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
                          <a key = {item.id} href='#' onClick={() => {handleBrowseMPItem(item)}}>
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
    );
};
export default NavBar;