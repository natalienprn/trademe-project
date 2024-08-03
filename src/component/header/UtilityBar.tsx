import './Header.css'
import React from "react";

const UtilityBar:React.FC = () =>{

    return(
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
    );
};

export default UtilityBar;