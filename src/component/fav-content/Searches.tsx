import React from 'react'
import './FavCard.css'
import FavCard from './FavCard';

interface FavSearchProp{
    searches:{
        title:string;
        cate: string;
        type: string
    }[];
}
const FavSearches:React.FC<FavSearchProp> = ({searches}) =>{

    return(
        <div className='wrapper'>
            <div className='topic'>
                1 Favourite search
            </div>
            <div className='card-container'>
                {searches.map((search, index) => (
                    <FavCard key={index} title={search.title} cate={search.cate} type='search'/>
                ))}
            </div>
            
        </div>
    );
};
export default FavSearches;