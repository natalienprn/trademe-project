import React from 'react'
import './FavCard.css'

interface CardProps{
    title?: string;
    shopname?:string;
    img?:string;
    cate?: string;
    address?: string;
    type: 'search' | 'category' | 'seller';
}

const FavCard:React.FC<CardProps> = ({title,shopname, img, address, cate, type}) =>{
    if (type === 'search'){
        return(
            <div className='wrapper'>
                <div className='card'>
                    <div className='main'>
                        <div className='title'>"{title}"</div>
                        <div className='cate'>{cate}</div>
                    </div>
                    <div className='option'>
                        <button className='btn-opt opt-email'>
                            Don't email me
                        </button>
                        <button className='btn-opt remove'>
                            Remove from favourites
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    if(type === 'category'){
        return(
            <div className='wrapper'>
                <div className='card'>
                    <div className='main'>
                        <div className='title-cate'>{cate}</div>
                        <div className='address'>{address}</div>
                    </div>
                    <div className='option'>
                        <button className='btn-opt opt-email'>
                            Don't email me
                        </button>
                        <button className='btn-opt remove'>
                            Remove from favourites
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    if(type === 'seller'){
        return(
            <div className='wrapper'>
                <div className='card'>
                    <div className='main-seller'>
                        <div className='profile-pic'>
                            <img src={img} />
                        </div>
                        <div className='shopinfo'>
                            <div className='shopname'>
                               {shopname} 
                            </div>
                            <div className='view-list'>
                                View current listings
                            </div>
                        </div>
                    </div>
                    <div className='option'>
                        <button className='btn-opt opt-email'>
                            Don't email me
                        </button>
                        <button className='btn-opt remove'>
                            Remove from favourites
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    
};
export default FavCard;