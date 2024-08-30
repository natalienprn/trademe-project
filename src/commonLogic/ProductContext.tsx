
// import { Product, generateData } from "../data/dataGenerator";
import CateItem from "../data/cateList";
import BrowseItem from "../data/browselist";
import { createContext, useContext, useState, useEffect } from "react";
import { fetchProducts } from "./Api";

export interface Product {
    productId: number;
    productName: string;
    productImg: string[];
    description: string;
    categoryID: number;
    city: string;
    closeDate: Date;
    shippingInfo: string;
    proStatus: string;
    oldPrice: string;
    currentPrice: string;

    shopName: string;
    condition: string;
    color: string;
    brand: string;

    fullDescription: string[];
    shippingPrice: ShippingPrice[];
    quantity: number;

}

interface ShippingPrice{
    destination: string;
    price: string;
}


interface ProductContextprops {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    categories: CateItem[];
    browseCategories: BrowseItem[];

// re-fetch
    loading: boolean;
    error: string | null;
}

const ProductContext = createContext<ProductContextprops | undefined>(undefined);

export function ProductProvider({children} : {children: React.ReactNode}) {
    // const [products, setProducts] = useState<Product[]>(generateData(500, 25));
    const [products, setProducts] = useState<Product[]>([]);
    const [categories] = useState<CateItem[]>(CateItem);
    const [browseCategories] = useState<BrowseItem[]>(BrowseItem);
    
    // re-fetch
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const loadProducts = async () => {
            //re-fetch
            setLoading(true);
            try {
                const fetchedProducts = await fetchProducts();
                setProducts(fetchedProducts);
            } catch (err) {
                console.error("Failed to fetch products:", err);
                setError("Failed to load products. Please try again later.");
            } finally {
                setLoading(false);
            }
            // const fetchedProducts = await fetchProducts(); 
            // setProducts(fetchedProducts);
        };
        loadProducts();
    }, []);

    
    return (
        <ProductContext.Provider value={{products, setProducts, categories, browseCategories, loading, error}}>
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