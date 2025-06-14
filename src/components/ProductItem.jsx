import React, { useContext } from 'react'

const ProductItem = ({ id, image, name, price }) => {
    
    const { currency } = useContext(ShopContext);

  return (
    <div>ProductItem</div>
  )
}

export default ProductItem