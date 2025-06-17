import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // Add to Cart button functionality
  const addToCart = async (itemId, size) => {

    // In case User hasn't selected a size
    if (!size) {
      toast.error("Please select a product size.")
      return;
    }



    // creates a copy of cart items
    let cartData = structuredClone(cartItems);
    // VERY cool. This stores the item by size. 
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);

  }

  useEffect(() => {
    console.log(cartItems);
  },[cartItems])

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
  };

  return (
      <ShopContext.Provider value={value}>
          {props.children}
      </ShopContext.Provider>
  );
};

export default ShopContextProvider;
