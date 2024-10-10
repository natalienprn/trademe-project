import { ProductData, ShippingTable } from "../type/ProductData";
import { ProductCardType } from "../type/ProductCard";
import airtableAxios from "./AirtableAxios";
import { CartDataType, CartHolder } from "../type/CartType";
import { FavSeller, FavSearch, FavCate, Seller, Search } from "../type/FavType";
import FavSearches from "../component/fav-content/Searches";
import { fa } from "@faker-js/faker";

export const fetchProductById = async (
  productId: string
): Promise<ProductData> => {
  try {
    const responseProduct = await airtableAxios.get("/products", {
      params: {
        filterByFormula: `{productId} = ${productId}`, // No quotes around the productId (since it's numeric)
        fields: [
          "productId",
          "productName",
          "city",
          "closeDate",
          "originalPrice",
          "salesPrice",
          "condition",
          "variance",
          "brand",
          "shopName",
          "fullDescriptions",
          "shippingDeals",
          "imgUrl",
          "shopId",
        ],
      },
    });

    const productRecords = responseProduct.data.records;
    if (productRecords.length === 0) {
      throw new Error(`No product found with productId: ${productId}`);
    }
    const productData = productRecords[0]; // Access the first matching record

    // Fetch shipping data based on productId
    const responseShipping = await airtableAxios.get("/shipping", {
      params: {
        filterByFormula: `{productId} = ${productId}`, // Also numeric in the shipping table
        fields: ["destination", "shippingPrice"],
      },
    });

    const shippingRecords = responseShipping.data.records;
    const shippingTable = shippingRecords.map((shipping: any) => ({
      destination: shipping.fields.destination,
      price: shipping.fields.shippingPrice,
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
      shopId: productData.fields.shopId,
      shippingTable,
    };
  } catch (error) {
    console.error("Error fetching product or shipping data:", error);
    throw error;
  }
};

export const fetchProductByCategory = async (
  categoryId: Number
): Promise<ProductCardType> => {
  try {
    const responseResultByCate = await airtableAxios.get("/products", {
      params: {
        filterByFormula: ` {categoryID} = ${categoryId} `,
        fields: [
          "productId",
          "productName",
          "description",
          "city",
          "closeDate",
          "shippingDeals",
          "sellType",
          "originalPrice",
          "salesPrice",
          "imgUrl",
        ],
      },
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
      productImg: record.fields.imgUrl,
    }));
    return resultByCate;
  } catch (error) {
    console.error("Error fetching cardProduct:", error);
    throw error;
  }
};

// result from search
export const fetchFilteredProducts = async (
  searchQuery: string,
  categoryId?: string,
  offset: string = "",
  pageSize: number = 20
): Promise<{ products: ProductData[]; nextOffset?: string }> => {
  try {
    const finalCategoryId = categoryId || "1";
    console.log("fetching result");
    const filterByFormula = `
      AND(
        OR(
          FIND(LOWER('${searchQuery}'), LOWER({productName})), 
          {categoryId} = '${finalCategoryId}'
        )
      )
    `;

    const response = await airtableAxios.get("/products/", {
      params: {
        filterByFormula,
        fields: [
          "productId",
          "productName",
          "description",
          "city",
          "closeDate",
          "shippingDeals",
          "sellType",
          "originalPrice",
          "salesPrice",
          "imgUrl",
        ],
        pageSize,
        offset,
      },
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
      nextOffset: response.data.offset,
    };
  } catch (error) {
    console.error("Error fetching filtered products:", error);
    throw new Error("Failed to fetch filtered products");
  }
};

// fetch shipping info by selected productId
export const fetchShippingById = async (
  productId: string
): Promise<ShippingTable> => {
  try {
    // Fetch shipping data based on productId
    const responseShipping = await airtableAxios.get("/shipping", {
      params: {
        filterByFormula: `{productId} = ${productId}`, // Also numeric in the shipping table
        fields: ["destination", "shippingPrice"],
      },
    });

    const shippingRecords = responseShipping.data.records;
    const shippingTable = shippingRecords.map((shipping: any) => ({
      destination: shipping.fields.destination,
      price: shipping.fields.shippingPrice,
    }));
    return {
      destination: shippingTable.destination,
      price: shippingTable.price,
    };
  } catch (error) {
    console.error("Error fetching product or shipping data:", error);
    throw error;
  }
};

// fetch cartInfo
export const fetchCartInfo = async (
  cartHolder: CartHolder[]
): Promise<CartDataType[]> => {
  try {
    // Map through cartHolder to fetch details for each productId
    const cartDataPromises = cartHolder.map(async (cartItem) => {
      const responseProduct = await airtableAxios.get("/products", {
        params: {
          filterByFormula: `{productId} = ${cartItem.productId}`,
          fields: [
            "productId",
            "productName",
            "salesPrice",
            "shippingId",
            "shopName",
            "imgUrl",
          ],
        },
      });

      const productRecords = responseProduct.data.records;
      if (productRecords.length === 0) {
        throw new Error(
          `No product found with productId: ${cartItem.productId}`
        );
      }
      const productData = productRecords[0]; // first matching record

      // Fetch shipping data based on productId
      const responseShipping = await airtableAxios.get("/shipping", {
        params: {
          filterByFormula: `{productId} = ${cartItem.productId}`,
          fields: ["destination", "price"],
        },
      });

      const shippingRecords = responseShipping.data.records;
      const shipping = shippingRecords.map((shipping: any) => {
        console.log("Raw shipping price:", shipping.fields.price); // Log raw shipping price
        return {
          destination: shipping.fields.destination,
          price: Number(shipping.fields.price), // Convert to number
        };
      });
      console.log("shipping; ", shipping);

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
        shipping, // Shipping options
      };
    });

    // Wait for all promises to resolve and return as an array
    const cartData = await Promise.all(cartDataPromises);
    return cartData;
  } catch (error) {
    console.error("Error fetching product or shipping data:", error);
    throw error;
  }
};

// Add Favorite Shop
export const addFavShop = async (favSeller: FavSeller) => {
  try {
    const response = await airtableAxios.post("/favSellers", {
      fields: {
        // favId: favSeller.favId,
        userId: [favSeller.userId],
        shopId: [favSeller.shopId],
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding favorite shop:", error);
    throw error;
  }
};

// Add Favourite Search
export const addFavSearch = async (favSearch: FavSearch) => {
  try {
    const response = await airtableAxios.post("/favSearches", {
      fields: {
        userId: [favSearch.userId],
        keyword: favSearch.keyword,
        categoryId: [favSearch.categoryId],
      },
    });
    console.log("Response Fav Search for POST: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding favorite search:", error);
    throw error;
  }
};

// Fetch favorite searches
export const fetchFavSearchs = async (): Promise<Search[]> => {
  try {
    const favSearchesResponse = await airtableAxios.get("/favSearches");
    const favSearches = favSearchesResponse.data.records;
    if (!favSearches || favSearches.length === 0) {
      console.warn("No favorite search found");
      return [];
    }
    console.log("Fetched favourite searches data: ", favSearches);

    const searchDetailPromises = favSearches.map(async (favSearch: any) => {
      const fields = favSearch.fields;
      if (!fields) {
        console.warn("Missing fields: ", favSearch);
        return null;
      }

      // Extract necessary fields from FavSearch
      const { keyword, categoryId } = fields;
      if (!categoryId || !keyword) {
        console.warn("Missing categoryId or keyword in favSearch: ", favSearch);
        return null;
      }

      console.log("Fetching category details for categoryId: ", categoryId);

      // Fetch the category details using the categoryId
      const searchResponse = await airtableAxios.get(`/categories`, {
        params: {
          filterByFormula: `RECORD_ID()= '${categoryId}'`,
          fields: ["category"]
        }
      });

      const cateRecord = searchResponse.data.records[0];
      if (!cateRecord || !cateRecord.fields) {
        console.warn("No matching category found for categoryId: ", categoryId);
        return null;
      }

      const category = cateRecord.fields.category;
      console.log("Fetched category record: ", cateRecord);

      // Return a Search object that matches the interface
      return {
        keyword: keyword,
        cate: category,
      } as Search;
    });

    const searchDetails = await Promise.all(searchDetailPromises);
    return searchDetails.filter((search) => search !== null) as Search[];
  } catch (error) {
    console.error("Error fetching favourite searches: ", error);
    throw error;
  }
};

// fecth favShop
export const fetchFavShops = async (): Promise<Seller[]> => {
  try {
    const favShopsResponse = await airtableAxios.get("/favSellers");
    const favShops = favShopsResponse.data.records;
    if (!favShops || favShops.length === 0) {
      console.warn("No fav shop found");
      return [];
    }

    console.log("Fetched favourite shops data: ", favShops);

    const shopDetailsPromises = favShops.map(async (favShop: any) => {
      const fields = favShop.fields;
      if (!fields) {
        console.warn("Missing fields  ", favShop);
        return null;
      } else if (!fields.shopId) {
        console.warn("shopId in fav shop: ", favShop);
        return null;
      }

      const shopIdArray = fields.shopId;
      console.log("shopIdArray: ", shopIdArray);
      if (!shopIdArray || !shopIdArray[0]) {
        console.warn("Missing shopId in  av shop: ", favShop);
        return null;
      }
      const shopId = shopIdArray[0];
      console.log("Fetching shop details for shopId; ", shopId);

      const shopResponse = await airtableAxios.get(`/shops`, {
        params: {
          filterByFormula: `RECORD_ID()= '${shopId}'`,
          fields: ["shopName", "profileImg", "stars"],
        },
      });

      const shopRecord = shopResponse.data.records[0];
      if (!shopRecord || !shopRecord.fields) {
        console.warn("No matchin shop found for shopId: ", shopId);
        return null;
      }
      console.log("Fetch shop record: ", shopRecord);
      return {
        favId: fields.favId,
        userId: fields.userId,
        shopId: fields.shopId,
        shopname: shopRecord.fields.shopName,
        img: shopRecord.fields.profileImg,
        stars: shopRecord.fields.stars,
      } as Seller;
    });

    const shopDetails = await Promise.all(shopDetailsPromises);
    return shopDetails.filter((shop) => shop !== null) as Seller[];
  } catch (error) {
    console.error("Error fetching favorite shops:", error);
    throw error;
  }
};
