
import './FooterBlock.css';

import TrademeLogo from '/trademe-logo.jpg';
import ShieldedSiteLogo from '/custom-logo.png';
import FacebookLogo from '/facebook-icon.svg';
import TwitterLogo from '/twitter-icon.svg';

const FooterBlock = () => {
  return (
    <div className='footer'>
      {/* <footer> */}
      <div className='footer-content'>
        <div className='footer-content-top'>
          <ul>
            <li><img id='logo' src={TrademeLogo} /></li>
            <li>List an item</li>
            <li>Watchlist</li>
            <li>Favourites</li>
            <li>My Trademe</li>
            <li>
              <ul>
                <li>Register</li>
                <li>Login</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='footer-main'>
          <div className='half-footer-list'>
            {/* first col */}
            <div className='footer-col'>
              <div style={{ color: '#D93A3F' }} className='footer-list-heading'>Marketplace</div>
              <div className='footer-list'>Latest deals</div>
              <div className='footer-list'>Stores</div>
              <div className='footer-list'>Closing soon</div>
              <div className='footer-list'>$1 reserve</div>
            </div>
            {/* second col */}
            <div className='footer-col'>
              <div style={{ color: '#F5632D' }} className='footer-list-heading'>Jobs</div>
              <div className='footer-list'>Browse categories</div>
              <div className='footer-list'>Careers advice</div>
              <div className='footer-list'>JobSmart</div>
              <div className='footer-list'>Advertisers advice</div>
            </div>
            {/* third col */}
            <div className='footer-col'>
              <div style={{ color: '#5F6F88' }} className='footer-list-heading'>Motors</div>
              <div className='footer-list'>Browse all cars</div>
              <div className='footer-list'>Other vehicles</div>
              <div className='footer-list'>Buying & Selling</div>
              <div className='footer-list'>Dealer news & info</div>
            </div>
          </div>
          <div className='half-footer-list'>
            {/* first col */}
            <div className='footer-col'>
              <div style={{ color: '#29A754' }} className='footer-list-heading'>Property</div>
              <div className='footer-list'>Looking to sell?</div>
              <div className='footer-list'>News & guides</div>
              <div className='footer-list'>Homes.co.nz</div>
              <div className='footer-list'>OneHub for agents</div>
            </div>
            {/* second col */}
            <div className='footer-col'>
              <div style={{ color: '#555555' }} className='footer-list-heading'>Services</div>
              <div className='footer-list'>Trades</div>
              <div className='footer-list'>Domestic services</div>
              <div className='footer-list'>Events & entertainment</div>
              <div className='footer-list'>Health & wellbeing</div>
            </div>
            {/* third col */}
            <div className='footer-col'>
              <div style={{ color: '#148FE2' }} className='footer-list-heading'>Community</div>
              <div className='footer-list'>Help</div>
              <div className='footer-list'>Announcements</div>
              <div className='footer-list'>Trust & safety</div>
              <div className='footer-list'>Seller information</div>
            </div>
          </div>
        </div>

      </div>
      <div className='footer-bottom'>
        <div className='footer-under'>
          @2023 Trade Me Limited
        </div>
        <div className='footer-above'>
          <ul>
            <li>Desktop site</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Advertise</li>
            <li>Privacy policy</li>
            <li>Terms & conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='footer-under-middle'> <img className='footer-icon' src={ShieldedSiteLogo} /></div>
        <div className='footer-under'>
          <ul>
            <li><img className='footer-icon' src={FacebookLogo} /></li>
            <li><img className='footer-icon' src={TwitterLogo} /></li>
          </ul>
        </div>


      </div>
      {/* </footer> */}
    </div>

  );
};
export default FooterBlock

