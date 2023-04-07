import React, { useState, useEffect } from "react";

const SearchBar = ({ onChange }) => {
  return (
    <div>
      <input type="search" placeholder="Search Here" onChange={onChange} />
    </div>
  );
};

export default SearchBar;
