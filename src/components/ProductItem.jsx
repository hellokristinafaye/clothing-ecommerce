import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    
    const { currency } = useContext(ShopContext);

  return (
      <div>ProductItem
    
          <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
              <div className="overflow-hidden">
                  <img src={image[0]} alt="" className="" />
              </div>
      </Link> 

      </div>
      
     
  )
}

export default ProductItem