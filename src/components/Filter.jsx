import "../styles/filter.scss";

import Button from "./Shared/Button";
import TextField from "./Shared/TextField";
import search from "../assets/images/search-icon.png";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import SearchBar from "./SearchBar";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const Filter = (props) => {
  const [range, setRange] = useState([60, 870]);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { category } = useParams();
  const categoryValue = category || "";

  function handleChanges(event, newValue) {
    const minPrice = newValue[0];
    let maxPrice = newValue[1];

    if (maxPrice <= minPrice) {
      maxPrice = minPrice + 1;
    }

    setRange([minPrice, maxPrice]);
  }

  const handleFilterClose = () => {
    props.onClose();
  };

  const handleSortChange = (selectedSort) => {
    props.onSortChange(selectedSort);
  };

  const handlePriceSelect = () => {
    const currentSearchText = searchParams.get("search") || "";
    console.log(category, currentSearchText); // Use the category from useParams
    navigate(
      `/shop/${categoryValue}?search=${currentSearchText}&minPrice=${range[0]}&maxPrice=${range[1]}`
    );
  };

  return (
    <>
      {props.isOpen && (
        <div className="filter-page__wrapper">
          <div
            className={`filter-page${
              props.isOpen ? " filter-page__visible" : ""
            }`}
          >
            <Button className="button close-button" onClick={handleFilterClose}>
              X
            </Button>

            <SearchBar />

            <div className="range-price">
              <h3 className="range-price__title">Filter by price</h3>

              <Slider
                value={range}
                max={870}
                min={60}
                onChange={handleChanges}
                valueLabelDisplay="auto"
                disableSwap="true"
                // valueLabelFormat={(value) => `$${value}`}
                className="price-slider"
              />

              <div className="filter-flex">
                <Button
                  className="button set-price"
                  onClick={handlePriceSelect}
                >
                  Set Price
                </Button>
                <div className="display-price">
                  <div className="min-price">${range[0]}</div>
                  <div className="max-price">${range[1]}</div>
                </div>
              </div>
            </div>

            <div className="product-categories">
              <div className="product-category">
                <div onClick={() => props.onCategorySelect("accessory")}>
                  <p>Accessories</p>
                </div>
              </div>
              <div className="product-category">
                <div onClick={() => props.onCategorySelect("scooter")}>
                  <p>Electric Scooters</p>
                </div>
              </div>

              <div className="product-category">
                <p>On Sale</p>
              </div>

              <div className="product-category">
                <Link to={"/shop"}>
                  <p className="category-allProducts">All Products</p>
                </Link>
              </div>
            </div>

            <div className="product-sort__section">
              <select
                name="productSort"
                id="productSort"
                className="product-sort"
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="default-sorting">Default Sorting</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
