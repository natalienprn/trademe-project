import { ProductData } from '../type/ProductData';
import { ProductCardType } from '../type/ProductCard';
import airtableAxios from './AirtableAxios';

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

