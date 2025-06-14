import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    
    const { currency } = useContext(ShopContext);

  return (
      <div>ProductItem
    
          <Link to={`/product/${id}`}>
      </Link> 

      </div>
      
     
  )
}

export default ProductItem