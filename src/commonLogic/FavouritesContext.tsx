import React, { createContext, ReactNode, useContext, useState } from "react";


interface Seller{
    shopname: string;
    img: string;
    type: string;
}
interface Search{
    title:string;
    cate: string;
    type: string;

}
interface Category{
    cate: string;
    address: string;
    type: string;
}

interface FavouritesContextType{
    sellers: Seller[];
    addSeller: (seller: Seller) => void;
    searches: Search[];
    addSearch: (search: Search) => void;
    categories: Category[];
    addCategory: (category: Category) => void;
}
const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export const FavouritesProvider: React.FC<{ children: ReactNode}> = ({children}) =>{
    const [sellers, setSellers] = useState<Seller[]>([]);
    const [searches, setSearches] = useState<Search[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    const addSeller = (seller: Seller) =>{
        setSellers((prevSellers) => [...prevSellers, seller]);
    };
    const addSearch = (search: Search) =>{
        setSearches((prevSearches) => [...prevSearches, search]);
    }
    const addCategory = (category: Category) => {
        setCategories((prevCategories) => [...prevCategories, category]);
    }
    return(
        <FavouritesContext.Provider value={{sellers, addSeller, searches, addSearch, categories, addCategory}}>
            {children}
        </FavouritesContext.Provider>
    );
};

export const useFavourites = () => {
    const context = useContext(FavouritesContext);
    if(!context){
        throw new Error('useFavorites must be used within a FavoritesProvider');

    }
    return context
};