import React, { useState, useEffect } from "react";

const SearchBar = ({ onChange }) => {
  return (
    <div>
      <input type="search" placeholder="Search Here" onChange={(e)=>{onChange(e,'name')}} />
      <input type="search" placeholder="Search Here" onChange={(e)=>{onChange(e,'type')}} />
      <input type="search" placeholder="Search Here" onChange={(e)=>{onChange(e,'weak')}} />
    </div>
  );
};

export default SearchBar;
