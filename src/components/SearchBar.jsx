import React from "react";

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <input
      type="text"
      placeholder="Cari berdasarkan judul.."
      value={keyword}
      onChange={(e) => {
        keywordChange(e.target.value);
      }}
    />
  );
};

export default SearchBar;
