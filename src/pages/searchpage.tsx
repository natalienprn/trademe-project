import { useState, useEffect } from "react";
import "./searchpage.css";

import cardData, { CardData } from "../data/data";
import CateItem from "../data/cateList";
import { searchProducts } from "../commonLogic/SearchLogic";

import TopBar from "../component/TopBar";
import FooterBlock from "../component/FooterBlock";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import ProductCard from "../component/ProductCard";
import { extractParamsFromUrl } from "../commonLogic/FindParam";
import { useProductContext } from "../commonLogic/ProductContext";
import { Product } from "../data/dataGenerator";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('keyword') || '');
  const categoryId = parseInt(searchParams.get('category') || '1', 10); // Default to category 1 if not provided
  const { products } = useProductContext();

  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [categoryDescription, setCategoryDescription] = useState<string>("");

  console.log("Received Keyword:", keyword);
  console.log("Received Category ID:", categoryId);

  useEffect(() => {
    const category = CateItem.find((category) => category.id === categoryId);
    const categoryName = category ? category.item : "Unknown Category";
    const categoryDetail = category ? category.description : "No deails";

    setCurrentCategory(categoryName);
    setCategoryDescription(categoryDetail);

    const searchKeyword = keyword || '';
    console.log ("searching with keyword:", searchKeyword, "and Category ID: ", categoryId);
    searchProducts(products,searchKeyword, categoryId).then((results) => {
      setSearchResults(results);
      console.log("searchb result: ", results);
      // setLoading(false);
    });
  }, [keyword, categoryId, products]);

  return (
    <>
      <div className="container">
        <TopBar />
        <div className="breadcrump">
          <p>
            Home / Marketplace / Home & Living / Lounge, dining & hall / Lounge
            suites / Suites
          </p>
        </div>
        <div className="search-header-wrapper">
          <div className="search-header">
            {/* <div className='cate-topic'>{currentCategory.item}</div> */}
            <div className="cate-topic">{currentCategory}</div>
            <div className="cate-description">{categoryDescription}</div>
            <div className="search-keyword-result-page">
              <input
                className="input"
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search by keyword"
              ></input>
              <button className="search-button" onClick={() => searchProducts(products, keyword, categoryId).then(setSearchResults)}>
                Search</button>
            </div>
          </div>
        </div>
        <div className="result-wrapper">
          <div className="result-section">
            Showing results
            <div className="result-display">
              {searchResults.length > 0 ? (
                searchResults.map((card, index) => (
                // <DealCard key={index} data={card}/>
                <Link to={`/product/${card.id}`} key={index}>
                  <ProductCard data={card} />
                </Link>
              ))
            ): (
              <p>no product found</p>
            )}
            </div>
          </div>
        </div>
        <FooterBlock />
      </div>
    </>
  );
}
export default SearchPage;
