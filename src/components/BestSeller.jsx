import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0,6));
    }, [])

  return (
      <div className='my-10'>BestSeller
          <div className="text-center text-3xl py-8">
              
          </div>

    </div>
  )
}

export default BestSeller