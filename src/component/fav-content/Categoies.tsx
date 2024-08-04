import React from 'react'
import './FavCard.css'
import FavCard from './FavCard';

interface FavCateProp{
    categories: {cate: string; address: string; type:string}[];
}
const FavCategories:React.FC<FavCateProp> = ({categories}) =>{

    return(
        <div className='wrapper'>
            <div className='topic'>
                1 Favourite category
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