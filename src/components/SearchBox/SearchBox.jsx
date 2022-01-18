import React from "react";

import "./SearchBox.scss";

const SearchBox = props => {
  const { label, searchTerm, handleInput, placeholder } = props;

  return (
    <div className="search-box">
      <input type="text" name={label} value={searchTerm} onInput={handleInput} className="search-box__input" placeholder={placeholder}/>
    </div>
  );
};

export default SearchBox;
