import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
      useContext(ShopContext);
    
    // Logic to show searchbar on Collection page?? Not sure quite how necessary this is? Includes useLocation hook and useEffect below.
    // been messing around with it and still not sure why we would want to make this distinction. B/c I WANT the search to wokr from any location??? 
    const [visible, setVisible] = useState(false);
    
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes("collection")) {
            setVisible(true);
        } else {
            setVisible(false);
        }

        // setVisible(false);
    }, [location])

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
              <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" className="flex-1 outline-none bg-inherit text-sm" />
              <img src={assets.search_icon} alt="" className="w-4" />
          </div>
          <img src={assets.cross_icon} alt="" className="inline w-3 cursor-pointer"
              onClick={() => setShowSearch(false)} />
    </div>
  ) : null;
};

export default SearchBar;
