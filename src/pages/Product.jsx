import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {

  const { productId } = useParams();

  const { products } = useContext(ShopContext);
  


  return (
    <div>Product</div>
  )
}

export default Product