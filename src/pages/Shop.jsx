import React, { useContext, useEffect, useState } from "react";
import { products } from "../data/dummyData";
import "../styles/shop.scss";
import "../styles/productCard.scss";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import FilterProducts from "../components/FilterProducts";
import { useSearchParams } from "react-router-dom";

const Shop = () => {
  const [cardType, setCardType] = useState("simple-card");
  const [filterPageVisible, setFilterPageVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState("default-sorting");

  const navigate = useNavigate();
  const { category } = useParams();
  const categoryFilterActive = !!category;

  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("search") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  useEffect(() => window.scrollTo(0, 0), []); //should I add this on a custom hook or write it on every component

  const handleSortChange = (selectedSort) => {
    setSortOrder(selectedSort);
  };

  const handleCardStyleType = (value) => {
    setCardType(value);
  };

  const toggleFilter = () => {
    setFilterPageVisible((prev) => !prev);
  };

  const filteredProducts = products.product.filter((item) => {
    const searchTextMatches =
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.category.toLowerCase().includes(searchText.toLowerCase());

    const categoryMatches = categoryFilterActive
      ? item.category === category
      : true;

    const priceMatches =
      (!minPrice || item.price >= parseFloat(minPrice)) &&
      (!maxPrice || item.price <= parseFloat(maxPrice));

    return searchTextMatches && categoryMatches && priceMatches;
  });

  const handleSearch = () => {
    navigate(`/shop?category=${category}&search=${searchText}`);
  };

  const handleCategorySelect = (selectedCategory) => {
    const currentSearchText = searchParams.get("search") || "";
    const currentMinPrice = searchParams.get("minPrice") || "";
    const currentMaxPrice = searchParams.get("maxPrice") || "";
    navigate(
      `/shop/${selectedCategory}?search=${currentSearchText}&minPrice=${currentMinPrice}&maxPrice=${currentMaxPrice}`
    );
  };
  const sortProducts = (order, products) => {
    if (order === "low-to-high") {
      return products.slice().sort((a, b) => a.price - b.price);
    } else if (order === "high-to-low") {
      return products.slice().sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  };

  const sortedProducts = sortProducts(sortOrder, filteredProducts);

  return (
    <>
      <div className="products-display">
        {filteredProducts.length > 0 && (
          <FilterProducts
            cardStyleType={handleCardStyleType}
            toggleFilter={toggleFilter}
          />
        )}
        {(
          <div className={`products-grid container ${cardType}`}>
            {products.product.map((item) => (
              <ProductCard key={item.id} cardType={cardType} product={item} />
            ))}
          </div>
        ) &&
          (!filteredProducts.length ? (
            <div className="no-product-found">
              <p>No products found</p>
            </div>
          ) : (
            <div className={`products-grid container ${cardType}`}>
              {sortedProducts.map((item) => (
                <ProductCard key={item.id} cardType={cardType} product={item} />
              ))}
            </div>
          ))}

        {filterPageVisible && (
          <Filter
            isOpen={filterPageVisible}
            onClose={() => setFilterPageVisible(false)}
            onCategorySelect={handleCategorySelect}
            onSortChange={handleSortChange}
            // onPriceSelect={handlePriceSelect}
            search={handleSearch}
          />
        )}
      </div>
    </>
  );
};

export default Shop;
