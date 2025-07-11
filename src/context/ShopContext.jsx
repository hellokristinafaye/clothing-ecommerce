import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import useLocalStorage from "use-local-storage";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage('localCart2', {});

  // Add to Cart button functionality
  const addToCart = async (itemId, size) => {

    // In case User hasn't selected a size
    if (!size) {
      toast.error("Please select a size.")
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
    console.log(cartData);
  }

  // To update cart count display
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          
        }
      }
    }
    return totalCount;
  }

  // useEffect(() => {
  //   console.log(cartItems);
  // },[cartItems])

  // On Cart Page: Trash button functionality to remove items if clicked
  const updateQuantity = async (itemId, size, quantity) => {
    // create copy of cartItems
    let cartData = structuredClone(cartItems);
    
    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  }

  

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
    getCartCount,
    updateQuantity,
  };

  return (
      <ShopContext.Provider value={value}>
          {props.children}
      </ShopContext.Provider>
  );
};

export default ShopContextProvider;
