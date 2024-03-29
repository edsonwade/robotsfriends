import React from "react";
import "tachyons";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
