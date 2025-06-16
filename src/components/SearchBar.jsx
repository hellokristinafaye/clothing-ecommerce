import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);


    
    return showSearch ? (
        <div>SearchBar</div>
    )
        : null
  ;
};

export default SearchBar;
