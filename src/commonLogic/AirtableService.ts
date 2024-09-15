import axios from 'axios';

interface ImageRecord {
    fields: {
      imageURL: { url: string }[];
    };
  }
interface ShippingRecord{
    fields: {
        destination: string;
        shippingPrice: string | number;
    };
}


const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;

const airtableAxios = axios.create({
  baseURL: `https://api.airtable.com/v0/${BASE_ID}`,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

// Fetch product info
export const fetchProductById = async (productId: string) => {
  const response = await airtableAxios.get(`/products/${productId}`);
  return response.data.fields;
};

// Fetch product images
export const fetchProductImages = async (productId: string) => {
  const response = await airtableAxios.get('/productImg', {
    params: {
      filterByFormula: `{productId} = '${productId}'`,
    },
  });
  return response.data.records.map((record: ImageRecord) => ({
    imageURL: record.fields.imageURL[0].url
  }));
};

// Fetch shipping options
export const fetchShippingOptions = async (productId: string): Promise<{ destination: string; shippingPrice: string | number }[]> => {
    const response = await airtableAxios.get('/shipping', {
      params: {
        filterByFormula: `{productId} = '${productId}'`,
      },
    });
  
    return response.data.records.map((record: ShippingRecord) => ({
      destination: record.fields.destination,
      shippingPrice: record.fields.shippingPrice,
    }));
  };
  

// Fetch shop name
export const fetchShopNameById = async (shopId: string) => {
  const response = await airtableAxios.get(`/shops/${shopId}`);
  return response.data.fields.shopName;
};
