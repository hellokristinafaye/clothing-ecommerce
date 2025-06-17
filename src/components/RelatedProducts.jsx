import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProducts = ({ category, subCategory }) => {
    
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
       
        if (products.length > 0) {
            // creates a copy of all products
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item) => category === item.category)
            productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory)

            // console.log(productsCopy.slice(0,5))

            setRelated(productsCopy.slice(0, 5));

        }

    },[products])

  return (
      <div >RelatedProducts</div>
  )
}

export default RelatedProducts