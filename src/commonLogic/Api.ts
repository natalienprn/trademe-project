import Airtable from 'airtable';

interface Product {
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

interface ShippingPrice {
    destination: string;
    price:string;
}

interface Category {
    categoryId: number;
    categoryName: string;
}

const APIkey = import.meta.env.VITE_AIRTABLE_API_KEY;
const BaseID = import.meta.env.VITE_AIRTABLE_BASE_ID;


if (!APIkey || !BaseID) {
    throw new Error("Airtable API key or Base ID is not defined in environment variables");
}


const base = new Airtable({ apiKey: APIkey }).base(BaseID);


export const fetchProducts = async (): Promise<Product[]> => {
  const records = await base('Product').select().all();

  return records.map(record => {
    
    let shippingPrice: ShippingPrice[] = [];
    const shippingPriceString = record.get('shippingPrice') as string;
    
    if (typeof shippingPriceString === 'string') {
        try {
           // Parse the JSON string into an object
           const parsedShippingPrice = JSON.parse(shippingPriceString.replace(/'/g, '"'));
                
                // Convert the object into an array of ShippingPrice objects
                shippingPrice = Object.keys(parsedShippingPrice).map(destination => ({
                    destination,
                    price: parsedShippingPrice[destination]
            
        
            }));
            console.log("ShippingPrice from API: ");
        } catch (error) {
            console.error('Error parsing shippingInfo:', error);
                shippingPrice = []; 
        }

        // try {

            
        //     const parsedShippingInfo = JSON.parse(shippingInfoString.replace(/'/g, '"'));
            
        //     shippingPrice= Object.keys(parsedShippingInfo).map(destination => ({
        //         destination,
        //         price: parsedShippingInfo[destination]
        //     }));
        //     console.log('shippingPrice-API', shippingPrice);
        // } catch (error) {
        //     console.error('Error parsing shippingInfo:', error);
        //     shippingPrice = []; 
        // }
    }
    let productImg: string[] = [];

    const productImgString = record.get('productImg') as string;

    if (typeof productImgString === 'string') {
        try {
          
            productImg = JSON.parse(productImgString.replace(/'/g, '"'));
        } catch (error) {
            console.error('Error parsing productImg:', error);
            productImg = []; 
        }
    }
   
    let fullDescription: string[] = [];
    const fullDescriptionString = record.get('fullDescription') as string;

    if (typeof fullDescriptionString === 'string') {

        try {
            // Remove array-like brackets if they exist and split by new lines
            fullDescription = fullDescriptionString
                .replace(/^\['|'\]$/g, '') // Remove leading [' and trailing ']
                .split('\\n\\n');          // Split by \n\n into separate paragraphs
        } catch (error) {
            console.error('Error parsing fullDescription:', error);
            fullDescription = [fullDescriptionString]; // Use the raw string as a fallback
        }
    }

    return {
        productId: record.get('productId') as number,
        productName: record.get('productName') as string,
        productImg: productImg as string[],
        description: record.get('description') as string,
        categoryID: record.get('categoryID') as number, 
        city: record.get('city') as string,
        closeDate: new Date(record.get('closeDate') as string), 
        shippingInfo: record.get('shippingInfo') as string,
        proStatus: record.get('proStatus') as string,
        oldPrice: record.get('oldPrice') as string,
        currentPrice: record.get('currentPrice') as string,
        shopName: record.get('shopName') as string,
        condition: record.get('condition') as string,
        color: record.get('color') as string,
        brand: record.get('brand') as string,
        fullDescription: fullDescription,
        shippingPrice: shippingPrice,
        quantity: record.get('quantity') as number
    };
  });
};

export const fetchCategories = async (): Promise<Category[]> => {
  const records = await base('Categories').select().all();
  return records.map(record => ({
    categoryId: record.get('categoryId') as number,
    categoryName: record.get('categoryName') as string,
  }));
};

export const fetchSpecialCategories = async (): Promise<Category[]> => {
  const records = await base('SpecialCategories').select().all();
  return records.map(record => ({
    categoryId: record.get('categoryId') as number,
    categoryName: record.get('categoryName') as string,
  }));
};
