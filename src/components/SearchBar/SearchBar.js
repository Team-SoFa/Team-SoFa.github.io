// src/components/SearchBar.js
import React from "react";
import "./SearchBar.css";

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search bookmarks...",
}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
