import React, {useEffect} from 'react'
import './FavCard.css'
import FavCard from './FavCard';
import { useFavourites } from '../../commonLogic/FavouritesContext';

// interface FavSearchProp{
//     searches:{
//         title:string;
//         cate: string;
//         type: string
//     }[];
// }
const FavSearches:React.FC = () =>{
    const {searches} = useFavourites();
    
    return(
        <div className='wrapper'>
            <div className='topic'>
                {searches.length} Favourite search
            </div>
            <div className='card-container'>
                {searches.map((search, index) => (
                    <FavCard key={index} title={search.keyword} cate={search.cate} type='search'/>
                ))}
            </div>
            
        </div>
    );
};
export default FavSearches;