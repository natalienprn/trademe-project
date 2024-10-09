import React, { useEffect } from 'react'
import './FavCard.css'
import FavCard from './FavCard';
import { useFavourites } from '../../commonLogic/FavouritesContext';

// interface FavSellerProp{
//     sellers:{
//         shopname: string;
//         img: string;
//         type:string;
//     }[];
// }

const FavSellers:React.FC = () =>{
    const {sellers}= useFavourites();
    // const { sellers } = useFavourites();
    
    return(
        <div className='wrapper'>
            <div className='topic'>
                {sellers.length} Favourite seller
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

