import React from 'react'
import './FavCard.css'
import FavCard from './FavCard';
import { useFavourites } from '../../commonLogic/FavouritesContext';

// interface FavCateProp{
//     categories: {cate: string; address: string; type:string}[];
// }
const FavCategories:React.FC = () =>{
    const {categories} = useFavourites();


    return(
        <div className='wrapper'>
            <div className='topic'>
                {categories.length} Favourite category
            </div>
            <div className='card-container'>
                {categories.map((category, index) =>(
                    <FavCard key={index} cate={category.cate} address={category.address} type="category"/>
                ))}
            
            </div>
            
        </div>
    );
};
export default FavCategories;