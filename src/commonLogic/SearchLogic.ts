
// import { Product } from "../data/dataGenerator";
import { Product } from "./ProductContext";

export function searchProducts(
  products: Product[],
  keyword: string,
  category: number
): Promise<Product[]> {

  const searchKeyword = keyword || '';
  const filteredProducts = products.filter((product) => {
    const productName = product.productName || '';
    

    // console.log(`Filtering product: ${productName},Keyword Match: ${keyword}, Category Match: ${category}`);

    return (
      productName.toLowerCase().includes(searchKeyword.toLowerCase()) &&
      (category === 1 || product.categoryID === category)
    );
  });

  console.log("search function result: ", filteredProducts);
  return Promise.resolve(filteredProducts);
}
