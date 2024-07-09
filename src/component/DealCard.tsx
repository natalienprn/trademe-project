import React from 'react';
import './DealCard.css';
import { CardData } from '../data/data';

import IconShippingGreen from '/icon/shipping-96.png';

interface DealCardProps{
    data: CardData;
}

const DealCard: React.FC<DealCardProps> = ({data})=>{
    return(
        // <Link to={data.link}>
          <div className='deal-card-container'>
            <div className='deal-card'>
              <div className='deal-thumbnail'>
                <img src={data.productImg[0]}/> 
              </div>
              <div className='deal-info'>
                <div className='top-info'>
                  <div className='city'>
                    {data.city}
                  </div>
                  <div className='date'>
                    Closes: {data.closeDate}
                  </div>
                </div>
                <div className='prod-name'>
                {data.productName}
                </div>
                <div className='prod-description'>
                  {data.description}
                </div>
                {data.shippingInfo && (
                  <div className='prod-ship-info'>
                    <img src={IconShippingGreen}/>
                  {data.shippingInfo}
                </div>
                )}
                
                <div className='price-section'>
                  <div className='promotion-status'>
                    {data.proStatus}
                  </div>
                  <div className='price'>
                    <span className='old-price'>{data.oldPrice}</span>
                    {data.currentPrice}
                  </div>
                </div>
              </div>
            </div>
          </div>
        
            // </Link>
    );
};
export default DealCard
