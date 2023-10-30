import "../styles/nav.scss";
import "../styles/global.scss";
import search from "../assets/images/search-icon.png";

import Button from "./Shared/Button";
import TextField from "./Shared/TextField";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/shop?search=${searchText}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <TextField
        className="input-search"
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button className=" button search-btn" onClick={handleSearch}>
        <img src={search} alt="search icon" />
      </Button>
    </div>
  );
};
export default SearchBar;
