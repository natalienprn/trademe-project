import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { FavSeller, FavSearch, FavCate, Seller, Search } from "../type/FavType"; 
import { addFavSearch, addFavShop, fetchFavSearchs, fetchFavShops } from "./AirtableService";

interface FavouritesContextType{
    // sellers: FavSeller[];
    sellers: Seller[];
    loadSellers: () => Promise<void>;  
    addSeller: (seller: FavSeller) => Promise<void>;

    searches: Search[];
    loadSearchs: () => Promise<void>;
    addSearch: (search: FavSearch) => Promise<void>;

    categories: FavCate[];
    addCategory: (category: FavCate) => void;
}
const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export const FavouritesProvider: React.FC<{ children: ReactNode}> = ({children}) =>{
    // const [sellers, setSellers] = useState<FavSeller[]>([]);
    const [sellers, setSellers] =  useState<Seller[]>([]);
    const [searches, setSearches] = useState<Search[]>([]);
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
    const loadSearchs = async () => {
        try {
            const favSearchs = await fetchFavSearchs();
            setSearches(favSearchs);
        }catch(error){
            console.error("Error loading searches: ", error)
        }
    }
    const addSearch = async (search: FavSearch) =>{
        // setSearches((prevSearches) => [...prevSearches, search]);
        try{
            console.log("Add search : ", search);
            await addFavSearch(search);
        }catch(error){
            console.error("Error adding search: ", error);
        }
    }
    const addCategory = (category: FavCate) => {
        setCategories((prevCategories) => [...prevCategories, category]);
    }

    useEffect(()=>{
        console.log("loadSeller");
        loadSellers();
    },[]);
    useEffect(()=>{
        console.log("loadSeller");
        loadSearchs();
    },[]);
    return(
        <FavouritesContext.Provider value={{sellers,loadSellers ,addSeller, searches, loadSearchs, addSearch, categories, addCategory}}>
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