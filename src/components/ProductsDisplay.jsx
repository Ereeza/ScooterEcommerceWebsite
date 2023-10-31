import React, { useEffect, useState } from "react";
import { products } from "../data/dummyData";
import "../styles/shop.scss";
import "../styles/productCard.scss";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import { useParams } from "react-router-dom";
import FilterProducts from "./FilterProducts";
import { useSearchParams } from "react-router-dom";

const ProductsDisplay = () => {
  const [cardStyleType, setCardStyleType] = useState("simple-card");
  const [filterPageVisible, setFilterPageVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default-sorting");

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("search"), "HI ");

  const searchText = new URLSearchParams(location.search).get("search") || "";

  const { category } = useParams();

  console.log("params", category);

  useEffect(() => window.scrollTo(0, 0), []);

  const resetFilters = () => {
    setSelectedCategory("All");
    navigate(`/shop`);
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

  const handleSortChange = (selectedSort) => {
    setSortOrder(selectedSort);
  };

  const handleCardStyleType = (cardStyleType) => {
    setCardStyleType(cardStyleType);
  };

  const toggleFilter = () => {
    setFilterPageVisible((prev) => !prev);
  };

  const handleCategorySelect = (category) => {
    navigate(`/shop/${category}`);
  };

  const filteredProducts = products.product.filter((item) => {
    const categoryMatches =
      selectedCategory === "All" || item.category === selectedCategory;

    const lowercaseSearchText = searchText.toLowerCase();

    const searchTextMatches =
      item.title.toLowerCase().includes(lowercaseSearchText) ||
      item.category.toLowerCase().includes(lowercaseSearchText);

    return categoryMatches && searchTextMatches;
  });

  const sortedProducts = sortProducts(sortOrder, filteredProducts);

  return (
    <>
      <div className="products-display">
        <FilterProducts
          cardStyleType={handleCardStyleType}
          toggleFilter={toggleFilter}
        />

        {!filteredProducts.length ? (
          <div className="no-product-found">
            <p>No products found</p>
          </div>
        ) : (
          <div className={`products-grid container ${cardStyleType}`}>
            {sortedProducts.map((item) => (
              <ProductCard
                key={item.id}
                cardStyleType={cardStyleType}
                product={item}
              />
            ))}
          </div>
        )}

        {filterPageVisible && (
          <Filter
            isOpen={filterPageVisible}
            onClose={() => setFilterPageVisible(false)}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            onSortChange={handleSortChange}
          />
        )}
      </div>
    </>
  );
};
export default ProductsDisplay;
