import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const LatestCollection = () => {

    const { products } = useContext(ShopContext);

  return (
      <div className="my-10">
          <div className="text-center py-8 text-3xl">
              
          </div>
          LatestCollection
      </div>
  )
}

export default LatestCollection