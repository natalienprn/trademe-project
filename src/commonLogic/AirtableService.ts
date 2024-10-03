import { ProductData, ShippingTable } from '../type/ProductData';
import { ProductCardType } from '../type/ProductCard';
import airtableAxios from './AirtableAxios';
import { CartDataType, CartHolder } from '../type/CartType';

export const fetchProductById = async (productId: string): Promise<ProductData> => {
  try {
    const responseProduct = await airtableAxios.get('/products', {
      params: {
        filterByFormula: `{productId} = ${productId}`,  // No quotes around the productId (since it's numeric)
        fields: [
          'productId',
          'productName',
          'city',
          'closeDate',
          'originalPrice',
          'salesPrice',
          'condition',
          'variance',
          'brand',
          'shopName',
          'fullDescriptions',
          'shippingDeals',
          'imgUrl'
        ]
      }
    });

    const productRecords = responseProduct.data.records;
    if (productRecords.length === 0) {
      throw new Error(`No product found with productId: ${productId}`);
    }
    const productData = productRecords[0];  // Access the first matching record

    // Fetch shipping data based on productId
    const responseShipping = await airtableAxios.get('/shipping', {
      params: {
        filterByFormula: `{productId} = ${productId}`,  // Also numeric in the shipping table
        fields: ['destination', 'shippingPrice']
      }
    });

    const shippingRecords = responseShipping.data.records;
    const shippingTable = shippingRecords.map((shipping: any) => ({
      destination: shipping.fields.destination,
      price: shipping.fields.shippingPrice
    }));

    // Return the data according to ProductData interface
    return {
      productId: productData.fields.productId,
      productName: productData.fields.productName,
      city: productData.fields.city,
      closeDate: productData.fields.closeDate,
      originalPrice: productData.fields.originalPrice,
      salesPrice: productData.fields.salesPrice,
      condition: productData.fields.condition,
      variance: productData.fields.variance,
      brand: productData.fields.brand,
      shopName: productData.fields.shopName,
      fullDescriptions: productData.fields.fullDescriptions,
      shippingDeals: productData.fields.shippingDeals,
      productImg: productData.fields.imgUrl,  
      shippingTable  
    };
  } catch (error) {
    console.error('Error fetching product or shipping data:', error);
    throw error;
  }
};

export const fetchProductByCategory = async (categoryId: Number): Promise<ProductCardType> =>{
  try{
    const responseResultByCate = await airtableAxios.get('/products', {
      params: {
        filterByFormula:  ` {categoryID} = ${categoryId} `,
        fields: [
          'productId',
          'productName',
          'description',
          'city',
          'closeDate',
          'shippingDeals',
          'sellType',
          'originalPrice',
          'salesPrice',
          'imgUrl'
        ]
      }
    });
    const resultByCateRecord = responseResultByCate.data.records;
    const resultByCate = resultByCateRecord.map((record: any) => ({
      productId: record.fields.productId,
      productName: record.fields.productName,
      description: record.fields.description,
      city: record.fields.city,
      closeDate: record.fields.closeDate,
      shippingDeals: record.fields.shippingDeals,
      sellType: record.fields.sellType,
      originalPrice: record.fields.originalPrice,
      salesPrice: record.fields.salesPrice,
      productImg: record.fields.imgUrl
    }));
    return resultByCate;
  }
  catch (error) {
    console.error('Error fetching cardProduct:', error);
    throw error;
  }


};

// result from search 
export const fetchFilteredProducts = async (
  searchQuery: string, 
  categoryId?: string, 
  offset: string = '', 
  pageSize: number = 20
): Promise<{ products: ProductData[], nextOffset?: string }> => {
  try {
  
    const finalCategoryId = categoryId || '1';
    console.log("fetching result");
    const filterByFormula = `
      AND(
        OR(
          FIND(LOWER('${searchQuery}'), LOWER({productName})), 
          {categoryId} = '${finalCategoryId}'
        )
      )
    `;

    const response = await airtableAxios.get('/products/', {
      params: {
        filterByFormula,
        fields: [
          'productId',
          'productName',
          'description',
          'city',
          'closeDate',
          'shippingDeals',
          'sellType',
          'originalPrice',
          'salesPrice',
          'imgUrl'
        ],
        pageSize,
        offset
      }
    });

    const productResultRecords = response.data.records.map((record: any) => ({
      productId: record.fields.productId,
      productName: record.fields.productName,
      description: record.fields.description,
      city: record.fields.city,
      closeDate: record.fields.closeDate,
      shippingDeals: record.fields.shippingDeals,
      sellType: record.fields.sellType,
      originalPrice: record.fields.originalPrice,
      salesPrice: record.fields.salesPrice,
      productImg: record.fields.imgUrl || [],
  
    }));

    return {
      products: productResultRecords,
      nextOffset: response.data.offset
    };
  } catch (error) {
    console.error('Error fetching filtered products:', error);
    throw new Error('Failed to fetch filtered products');
  }
};


// fetch shipping info by selected productId
export const fetchShippingById = async (productId: string): Promise<ShippingTable> => {
  try {
   
    // Fetch shipping data based on productId
    const responseShipping = await airtableAxios.get('/shipping', {
      params: {
        filterByFormula: `{productId} = ${productId}`,  // Also numeric in the shipping table
        fields: ['destination', 'shippingPrice']
      }
    });

    const shippingRecords = responseShipping.data.records;
    const shippingTable = shippingRecords.map((shipping: any) => ({
      destination: shipping.fields.destination,
      price: shipping.fields.shippingPrice
    }));
    return {
      destination: shippingTable.destination,
      price: shippingTable.price
    };
  } catch (error) {
    console.error('Error fetching product or shipping data:', error);
    throw error;
  }
};

// fetch cartInfo 
export const fetchCartInfo = async (cartHolder: CartHolder[]): Promise<CartDataType[]> => {
  try {
    // Map through cartHolder to fetch details for each productId
    const cartDataPromises = cartHolder.map(async (cartItem) => {
      const responseProduct = await airtableAxios.get('/products', {
        params: {
          filterByFormula: `{productId} = ${cartItem.productId}`,
          fields: [
            'productId',
            'productName',      
            'salesPrice',
            'shippingId',
            'shopName',
            'imgUrl'
          ]
        }
      });

      const productRecords = responseProduct.data.records;
      if (productRecords.length === 0) {
        throw new Error(`No product found with productId: ${cartItem.productId}`);
      }
      const productData = productRecords[0];  // first matching record

      // Fetch shipping data based on productId
      const responseShipping = await airtableAxios.get('/shipping', {
        params: {
          filterByFormula: `{productId} = ${cartItem.productId}`,
          fields: ['destination', 'price']
        }
      });

     
      
      const shippingRecords = responseShipping.data.records;
      const shipping = shippingRecords.map((shipping: any) => {
        console.log('Raw shipping price:', shipping.fields.price); // Log raw shipping price
        return {
          destination: shipping.fields.destination,
          price: Number(shipping.fields.price) // Convert to number
        };
      });
      console.log("shipping; " ,shipping);

      // Return the data for each product in cart
      return {
        productId: productData.fields.productId,
        productName: productData.fields.productName,
        salesPrice: productData.fields.salesPrice,
        shopName: productData.fields.shopName,
        shippingId: String(cartItem.shippingId), // Use shippingId from cartHolder
        productImg: productData.fields.imgUrl,
        quantity: cartItem.quantity,
        subtotal: productData.fields.salesPrice * cartItem.quantity, // Calculate subtotal
        shipping // Shipping options
      };
    });

    // Wait for all promises to resolve and return as an array
    const cartData = await Promise.all(cartDataPromises);
    return cartData;
  } catch (error) {
    console.error('Error fetching product or shipping data:', error);
    throw error;
  }
};
