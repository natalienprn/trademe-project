import { useState } from "react";
import "./info.css";
import "./home.css";

import cardData from "../data/data";
import Header from "../component/header/Header";
import FooterBlock from "../component/FooterBlock";
import CateItem from "../data/cateList";
import Carousel from "../component/Carousel";

import { useNavigate} from "react-router-dom";

// import { CardData } from "../data/data";

function Home() {
  const [keyword, setKeyword] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const navigate = useNavigate();
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    navigate(`/results?keyword=${keyword}&category=${category}`);
  };
  const handleCateItem = (item: CateItem) => {
    const keywordC = '';
    const categoryC = item.id;
    navigate(`/results?keyword=${keywordC}&category=${categoryC}`);
  }
 
  return (
    <>
      <div className="container">
        <Header />

        <div className="banner-top">
          <div className="banner-top-message">
            Shop new & used items
            <br />
            for sale
          </div>
        </div>
        <div className="search-section">
          <div className="search-block">
            
              <div className="search-by-kw">
                <label className="search-heading">
                  Search by keyword
                  <span className="search-optional">(Optional)</span>
                </label>

                <input
                  className="input"
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Search by keyword"
                ></input>
              </div>
              <div className="search-by-cate">
                <label className="search-heading">
                  Category
                  <span className="search-optional">(Optional)</span>
                </label>
                <select
                  name="category"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  {CateItem.map(cate => (
                    <option key={cate.id} value={cate.id}>
                      {cate.item}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="search-mp"
               
                onClick={
                  handleSearch
                }
              >
                Search Marketplace
              </button>
           
          </div>
          <div className="search-section-footer">
            <a
              href="https://apps.apple.com/nz/app/trade-me-buy-sell/id392567559"
              target="_blank"
              className="get-app"
            >
              Get the Trade Me iOS app{" "}
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=nz.co.trademe.trademe&referrer=utm_source%3Dtm%26utm_medium%3Dnewtm&pli=1"
              target="_blank"
              className="get-app"
            >
              Get the Trade Me Android app
            </a>
          </div>
        </div>
        <div className="categories">
          <div className="cate-list">
            <ul>
              {CateItem.slice(1).map((item) => (
                <li key={item.id} ><a onClick={() => handleCateItem(item)}>{item.item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="deals-section">
          <div className="deals-section-wrapper">
            <div className="deal-heading">
              <div className="topic">Deals</div>
              <div className="deal-view-all">View all(32,000)</div>
            </div>
            <div className="deals-list">
              <Carousel cardData={cardData} />
            </div>
          </div>
        </div>

        <div className="popular-search">
          <div className="topic">Popular Searches</div>
          <div className="col-lists">
            <div className="half-col-list">
              {/* first col */}
              <div className="popular-col">
                <div className="popular-col-title">Pets and animals</div>
                <div className="popular-list">Dogs for sale</div>
                <div className="popular-list">Puppies for sale</div>
                <div className="popular-list">LiveStock</div>
              </div>
              {/* second col */}
              <div className="popular-col">
                <div className="popular-col-title">Home and outdoors</div>
                <div className="popular-list">Furniture</div>
                <div className="popular-list">Outdoor furniture</div>
                <div className="popular-list">Fence posts & timber</div>
              </div>
            </div>
            <div className="half-col-list">
              {/* third col */}
              <div className="popular-col">
                <div className="popular-col-title">Tech and leisure</div>
                <div className="popular-list">iPhone</div>
                <div className="popular-list">Mountain bike</div>
                <div className="popular-list">Nintendo switch</div>
                <div className="popular-list">Women's shoes</div>
              </div>
              {/* last col */}
              <div className="popular-col">
                <div className="popular-col-title">Other</div>
                <div className="popular-list">Flatmates wanted</div>
                <div className="popular-list">Car parts & accessories</div>
              </div>
            </div>
          </div>
        </div>
        <FooterBlock />
      </div>
    </>
  );
}
export default Home;
