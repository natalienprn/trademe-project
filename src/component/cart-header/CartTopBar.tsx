
import './CartTopBar.css'

const CartTopBar:React.FC = () =>{


    return(
        <div className="wrapper">
            <div className='cart-topbar'>
                <div className='cart-topbar-content'>
                    <ul>
                        <li style={{fontWeight: 'bolder'}}><span>Trade Me</span></li>
                        <li> LifeDirect</li>
                        <li>Trade Me Insurance</li>
                        <li>FindSomeone</li>
                        <li>Holiday Houses</li>
                        <li>Services</li>
                        <li>MotorWeb</li>
                    </ul>
                </div>

            </div>
        </div>

    );
};
export default CartTopBar;