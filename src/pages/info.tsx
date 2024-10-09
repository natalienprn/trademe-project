
import './info.css'

import React, { useEffect, useState } from 'react';

import Shoplogo from '/logo-shop.png';
import Header from '../component/header/Header';
import FooterBlock from '../component/FooterBlock';
import SlideShow from '../component/SlideShow';
// import { CardData } from '../data/data';
// import { useProductContext } from '../commonLogic/ProductContext';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../commonLogic/CartContext';

import IconShippingGrey from '/icon/shipping-icon.png';
import IconLocation from '/icon/gps-icon.png';
import IconBuyerProtection from '/icon/shield-icon.png';
import IconStars from '/icon/five-stars-icon.png';
import { useFavourites } from '../commonLogic/FavouritesContext';
// import { Product } from '../data/dataGenerator';
// import { CardData } from '../data/data';
import { fetchProductById } from '../commonLogic/AirtableService';
import { ProductData } from '../type/ProductData';
import { FavSeller } from '../type/FavType';

const Info: React.FC= () => {
  const {id} = useParams<{id: string}>();
  const numericId = Number(id);

  // const selectedCard = products.find((product) => product.productId === parseInt(id ?? '', 10));
  const {addToCart} = useCartContext();
  const {addSeller} = useFavourites();

  const [productData, setProductData] = useState<ProductData | null>(null);


  // if(!selectedCard){
  //   return<div>Product not found</div>;
  // }
  // const [count, setCount] = useState(0)

  const handleWatchlist = ()=> {
    alert("Added!")
  }

  const handleAddToCart = () =>{
    addToCart(productData?.productId || "0", 1, "0");
    alert("Added to Cart!");
  }

  // const handleAddFavSellers = () => {
  //   const newSeller = {
  //     shopname: productData?.shopName,
  //     img: '/logo-shop.png',
  //     type: 'seller'
  //   };
  //   console.log("Adding seller", newSeller);
  //   // addSeller(newSeller);
  //   alert("Added to Favourite seller!");
  // };
  const handleAddFavSellers = async () =>{
    const newSeller: FavSeller = {
     
      userId: 'recDOf2cYptH3Qc1G',
      shopId: String(productData?.shopId)
      // shopId: productData?.shopId
    };

    try{
      await addSeller(newSeller);
      alert("Added to Favourite seller!");

    }catch(error){
      console.error("Error adding Fav at handleAddFav: ", error);
    }
  }
  // const handleFetchData = async () => {
  //   if (numericId) {
  //     const fetchedData = await fetchProductById(numericId);  // Pass the specificID to fetch filtered data
  //     setProduct(fetchedData);
  //   }
  // };
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {  // Check if id is defined before making the request
          const result = await fetchProductById(id);  // Call fetch only if id is valid
          console.log("ID = ", id);
          setProductData(result);
        } else {
          console.error("Product ID is undefined");
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (!isNaN(numericId)) {
      fetchData();
    }
  }), [numericId];
  if (!productData) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className='container'>
        <Header />
        <div className='breadcrump'>
          <p>Home / Marketplace / Home & Living / Lounge, dining & hall / Lounge suites / Suites
            </p>
        </div>
        <div className='main-content'>
          <div className='product-info'>
            {/* <SlideShow images={productData?.productImg} /> */}
            <SlideShow images={productData?.productImg || []} />

            <div className='info-body'>
              <table>
              <tbody>
                <tr>
                  <td>Details</td>
                  <td>Condition:{productData?.condition}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>
                   
      {/* original full description */}
      {/* {selectedCard.fullDescription.map((paragraph, index) =>(
        <p key={index} dangerouslySetInnerHTML={{__html: paragraph}}/>
      ))} */}
      <p>{productData?.fullDescriptions}</p>
                   </td>
                </tr>
                <tr>
                  <td>Shipping & pick-up options</td>
                  <td>
                    <div className='sub-table'>
                    <table >
                      <tbody>
                    <tr>
                      <th>Destination & description</th>
                      <th>Price per item</th>
                    </tr>
                    {/* {cardData[0].shippingPrice.map((shippingprice: { destination: string; price: string }, index: number) => (
            <tr key={index}>
              <td>{shippingprice.destination}</td>
              <td>${shippingprice.price}</td>
            </tr>
          ))} */}
          {/* {selectedCard.shippingPrice.map((shippingprice, index) =>( */}
            {productData?.shippingTable.map((shippingprice, index) =>(
            <tr key={index}>
              <td>{shippingprice.destination}</td>
              <td>{shippingprice.price}</td>
            </tr>
            
          ))}
                    </tbody>
                    </table>
                    <div className='shipping-noted'>Estimated delivery times in business days</div>
                    </div>
                    <tr>
                      <div className='shipping-learn-more'>
                        <a href='https://help.trademe.co.nz/hc/en-us/articles/360007263551?_gl=1*1ixtcvh*_ga*MTk1Mjk3NjM2My4xNjY5OTQwODY2*_ga_JJTLVXMBWX*MTY5NTI2MzM4Ni4yOC4wLjE2OTUyNjMzODYuNjAuMC4w'>Learn more about shipping & delivery options.</a>
                      </div>
                    </tr>
                  
                  </td>
                </tr>
                <tr>
                    <td>
                      Payment Options
                    </td>
                    <td>
                      <div className='payment-table'>
                        <table>
                          <tbody>
                          <tr>
                            <td>
                              <img src='./ping.png'/><br/>
                              Pay instantly by card, Ping balance or saved bank account.<br/>
                              <a>What's Ping?</a>
                            </td>
                            <td>
                              <img src='./AfterPay_logo.png'/><br/>
                              Four fortnightly interest-free payments.
                              <br/>
                              <a>What's Afterpay</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span style={{fontWeight: 'bold'}}>Other options</span><br/>
                              Cash, NZ Bank Deposit
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
        
                      
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Questions & Answers
                    </td>
                    <td>
                      <button className='btn-ask'>Ask a question</button>
                      <br/>
                      No questions have been asked!
                    </td>
                  </tr>
                  <tr>
                    <td>
                      About the store
                    </td>
                    <td>
                      <div className='about-store'>
                        <div className='shop-logo'>
                          <img src={Shoplogo}/>  
                        </div>     
                        <div className='about-store-info'>
                          <h3>{productData.shopName}</h3>
                          <span className='about-store-feedback'>
                          100% positive feedback(4)
                          </span>
                        </div> 
                        <div className='trader-status'>
                          <span className='trader-status-flag'>
                            IN TRADE
                          </span>
                        </div> 
                        <div className='sub-table'>
                          <table>
                            <tbody>
                            <tr>
                              <td>Location</td>
                              <td>{productData.city}</td>
                            </tr>
                            <tr>
                              <td>Member since</td>
                              <td>Monday, 28 August 2023</td>
                            </tr>
                            </tbody>
                          </table>  
                        </div>
                        <button className='btn-favourite-seller' onClick={handleAddFavSellers}>
                          Add to Favourite Sellers
                        </button>
                        <div className='help-link'>
                          <a href='https://help.trademe.co.nz/hc/en-us/articles/360007275072?popup=true'>
                            Read our safe buying advice
                          </a>
                        </div>
                                       
                      </div>
                      
                    </td>
                  </tr>

                <tr>
       
                </tr>
                </tbody>
              </table>
            </div>
          </div>


          <div className='product-buyer-option'>
            <div className='shop-logo'>
              <img src={Shoplogo}/>
            </div>
            
            <div className='product-name'>
            {productData?.productName}
            </div>
            <div className='shipping-info'>
            Free Shipping to {productData.city}(Non-Rural)
            </div>
            <div className='closing-time'>
              <div className='closing-info'>
                 <div className='closing-date'>
                  Closes: Thu 21st Sep , 7:15pm
                  </div>
                  <div className='closing-duration'>
                  4 days, 22 hours, 7 minutes
                  </div>
              </div>
             
            </div>
           <button onClick={handleWatchlist} className='btn-add-watchlist'>Add to Watchlist</button>
            <div className='watchlist-num'>
            <strong>8</strong> others watchlisted
            </div>
            <div className='buy-section-wrapper'>
              <div className='buy-section'>
                <p>Buy Now</p>
                <div className='product-price'>
                  <span className='current-price'>
                    ${Number(productData?.salesPrice).toFixed(2)}
                    {/* {Number(record.fields.salesPrice).toFixed(2)} */}
                  </span>
                  each
                  
                </div>
                <div className='original-price'>
                    ${productData?.originalPrice}
                  </div>
                <div className='afterpay'>
                <p>Or four interest-free payments of <strong>$974.75</strong> (plus shipping) with 
                </p>
                <a href='https://help.trademe.co.nz/hc/en-us/articles/360007264491-Afterpay?_gl=1*eftq4q*_ga*MTk1Mjk3NjM2My4xNjY5OTQwODY2*_ga_JJTLVXMBWX*MTY5NDg1NTI1MC4yMS4xLjE2OTQ4NTY4MTIuNTUuMC4w'>
                What's Afterpay?
                </a>
                </div>
                
                <button className='btn-buynow'>Buy now</button>
                <button className='btn-addtocart' onClick={handleAddToCart}>Add to cart</button>
              </div>
              <div className='shipping-deals'>
                <div className='shipping-deal'> 
                  <img src={IconShippingGrey}/>
                  Shipping from $115.00</div>
                <div className='shipping-deal'> 
                <img src={IconLocation}/>
                Pick up available, {productData.city}</div>
              </div>
            </div>
            <div className='buyer-protection'>
            <img src={IconBuyerProtection}/>
            <span style={{color: '#055E99', fontWeight: 'bold'}}>Buyer Protection </span> 
            covers you up to $2,500 on this item when you pay 
            with Ping or Afterpay if your item doesn't show up 
            or isn't as described.
            <br/>
            <a href='https://help.trademe.co.nz/hc/en-us/articles/360007000712?_gl=1*143lyuo*_ga*MTM2ODU5Njc0Ny4xNjg5NjY3MDEz*_ga_JJTLVXMBWX*MTcwMzAzMjYxNi41Ni4wLjE3MDMwMzI2MTYuNjAuMC4w'>
              Learn more about Buyer Protection
              </a>

            </div>
            <div className='shop-summary-wrapper'>
              <div className='shop-logo'>
                <img src={Shoplogo}/>
              </div>
              <div className='shop-summary'>
                <span style={{color:'#007ACD'}}>{productData?.shopName} (471 <img src={IconStars}/>)</span><br/>
                <span style={{fontWeight: 'bold'}}><span style={{fontSize: '18px'}}>98.8%</span> positive feedback</span><br/>
                <span style={{fontSize: '14px', color:'#65605D'}}>Seller located in {productData.city}</span>


              </div>

            </div>

          </div>
      </div>
      <FooterBlock />
      
        
      </div>
      
        
    </>
  )
}

export default Info
