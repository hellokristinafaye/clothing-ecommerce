import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProducts = ({ category, subCategory }) => {
    
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

  return (
    <div>RelatedProducts</div>
  )
}

export default RelatedProducts