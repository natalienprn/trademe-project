import React from 'react';
import './ProductCard.css';
import { ProductCardType } from '../type/ProductCard';


import IconShipping from '/icon/shipping-96.png';


interface ProductCardProps{
    // data: CardData;
    data: ProductCardType;
}

const ProductCard: React.FC<ProductCardProps> = ({data})=>{
  const closeDate = new Date(data.closeDate);
    return(
        // <Link to={data.link}>
          <div className='product-card-container'>
            <div className='product-card'>
              <div className='product-thumbnail'>
                <img src={data.productImg[0]}/> 
              </div>
              <div className='product-card-info'>
                <div className='top-info'>
                  <div className='city'>
                    {data.city}
                  </div>
                  <div className='date'>
                    Closes: {closeDate.toDateString()}
                  </div>
                </div>
                <div className='prod-name'>
                {data.productName}
                </div>
                <div className='prod-description'>
                  {data.description}
                </div>
                {data.sellType&& (
                  <div className='prod-ship-info'>
                    <img src={IconShipping}/>
                  {data.sellType}
                </div>
                )}
                
                <div className='price-section'>
                  <div className='promotion-status'>
                    {data.shippingDeals}
                  </div>
                  <div className='price'>
                    <span className='old-price'>{data.originalPrice}</span>
                    {data.salesPrice}
                  </div>
                </div>
              </div>
            </div>
          </div>
        
            // </Link>
    );
};
export default ProductCard
