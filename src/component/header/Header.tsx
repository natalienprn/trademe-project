// import React from 'react';


import NavBar from './NavBar';
import UtilityBar from './UtilityBar';
import MainHeader from './MainHeader';


const Header:React.FC = ()=>{
  
    return(

        <div className='wrapper'>
          {/* top-bar1 */}
          <UtilityBar />
            {/* top-bar2 */}
            <MainHeader />
            {/* navbar - marketplace */}
            < NavBar/>
          
        </div>
        
    );
};
export default Header;
