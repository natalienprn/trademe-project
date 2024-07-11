
import { Product, generateData } from "../data/dataGenerator";
import CateItem from "../data/cateList";
import BrowseItem from "../data/browselist";
import { createContext, useContext, useState } from "react";

interface ProductContextprops {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    categories: CateItem[];
    browseCategories: BrowseItem[];
}

const ProductContext = createContext<ProductContextprops | undefined>(undefined);

export function ProductProvider({children} : {children: React.ReactNode}) {
    const [products, setProducts] = useState<Product[]>(generateData(500, 25));
    const [categories] = useState<CateItem[]>(CateItem);
    const [browseCategories] = useState<BrowseItem[]>(BrowseItem);
    return (
        <ProductContext.Provider value={{products, setProducts, categories, browseCategories}}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProductContext(): ProductContextprops {
    const context = useContext(ProductContext);
    if (!context){
        throw new Error('useProductConetxt ONLY used in ProductProvider');
    }
    return context;
}