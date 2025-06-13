import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const LatestCollection = () => {

    const { products } = useContext(ShopContext);

  return (
    <div className="my-10">LatestCollection</div>
  )
}

export default LatestCollection