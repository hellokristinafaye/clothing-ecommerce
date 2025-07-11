import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {

  const { products, currency, cartItems,updateQuantity } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // How to add items to the cart FR
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
  }, [cartItems])

  return (
    <div className="border-t pt-14" >Cart

      <div className="text-2xl mb-3">
        <Title text1={'YOUR'} text2={'CART'} />
                <CartTotal />

      </div>

      <div className="">
        {
          cartData.map((item, index) => {
            
            const productData = products.find((product) => product._id === item._id);

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={productData.image[0]}
                    alt=""
                    className="w-16 sm:w-20"
                  />
                  <div className="">
                    <p className="text-xs sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p className="">
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                        {item.size}
                      </p>
                    </div>
                  </div>

                  <input
                    // updates cart count based on this input field
                    onChange={(e)=> e.target.value === "" || e.target.value === 0 ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                    className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 m-auto"
                  />
                  <img
                    onClick={() => updateQuantity( item._id, item.size, 0)}
                    src={assets.bin_icon}
                    alt=""
                    className="w-4 mr-4 sm:w-5 cursor-pointer"
                  />
                </div>

              </div>
            );

          } )
        }
      </div>
                <CartTotal />

    </div>
  )
}

export default Cart