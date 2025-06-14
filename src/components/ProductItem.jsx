import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    
    const { currency } = useContext(ShopContext);

  return (
      <div>ProductItem
    
          <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
              <div className="overflow-hidden">
                  
              </div>
      </Link> 

      </div>
      
     
  )
}

export default ProductItem