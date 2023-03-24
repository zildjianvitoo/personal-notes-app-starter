import React from "react";
import PropTypes from "prop-types";

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

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
