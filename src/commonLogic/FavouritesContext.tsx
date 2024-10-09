import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { FavSeller, FavSearch, FavCate, Seller } from "../type/FavType"; 
import { addFavShop, fetchFavShops } from "./AirtableService";

interface FavouritesContextType{
    // sellers: FavSeller[];
    sellers: Seller[];
    loadSellers: () => Promise<void>;  
    addSeller: (seller: FavSeller) => Promise<void>;
    searches: FavSearch[];
    addSearch: (search: FavSearch) => void;
    categories: FavCate[];
    addCategory: (category: FavCate) => void;
}
const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export const FavouritesProvider: React.FC<{ children: ReactNode}> = ({children}) =>{
    // const [sellers, setSellers] = useState<FavSeller[]>([]);
    const [sellers, setSellers] =  useState<Seller[]>([]);
    const [searches, setSearches] = useState<FavSearch[]>([]);
    const [categories, setCategories] = useState<FavCate[]>([]);

    // const addSeller = (seller: FavSeller) =>{
    //     setSellers((prevSellers) => [...prevSellers, seller]);
    // };
    const loadSellers = async () => {
        try {
            const favShops = await fetchFavShops();
            setSellers(favShops);
        }catch(error){
            console.error("Error loading Favseller: ", Error);
        }
    }
    const addSeller = async (seller: FavSeller) => {
        try{
            await addFavShop(seller);
        }catch(error){
            console.error("Error asdding seller: ", error);
        };
        
    }
    const addSearch = (search: FavSearch) =>{
        setSearches((prevSearches) => [...prevSearches, search]);
    }
    const addCategory = (category: FavCate) => {
        setCategories((prevCategories) => [...prevCategories, category]);
    }

    useEffect(()=>{
        console.log("loadSeller");
        loadSellers();
    },[]);
    return(
        <FavouritesContext.Provider value={{sellers,loadSellers ,addSeller, searches, addSearch, categories, addCategory}}>
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