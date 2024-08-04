import React from 'react'
import './FavCard.css'
import FavCard from './FavCard';

interface FavSellerProp{
    sellers:{
        shopname: string;
        img: string;
        type:string;
    }[];
}

const FavSellers:React.FC<FavSellerProp> = ({sellers}) =>{

    return(
        <div className='wrapper'>
            <div className='topic'>
                1 Favourite seller
            </div>
            <div className='card-container'>
                {sellers.map((seller, index)=>(
                    <FavCard key={index} shopname={seller.shopname} img={seller.img} type="seller" />
                ))}
            </div>

        </div>
    );
};
export default FavSellers;