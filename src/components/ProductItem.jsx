import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ id, image, name, price }) => {
    
    const { currency, navigate } = useContext(ShopContext);

  return (
      <div>
    
          <Link className="text-gray-700 cursor-pointer"
            //   The page navigates to the middle/bottom of the new page, not the top. Hopefully this resolves in future coding.
            //   onClick={() => {
            //       navigate(`/product/${id}`)
            //   }}
              to={`/product/${id}`}
            >
              <div className="overflow-hidden">
                  <img src={image[0]} alt="" className="hover:scale-110 transition ease-in-out" />
              </div>
              <p className="pt-3 pb-1 text-sm">{name}</p>
              <p className="text-sm font-medium">{currency}{price}</p>
      </Link> 

      </div>
      
     
  )
}

export default ProductItem