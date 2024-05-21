import React, { useState } from 'react'
import _ from 'lodash'

//TYPES 
type ProductType = { id: number, title: string, price: number, isAvailable: boolean }





// COMPONENT
const Lodash2 = () => {
  //STATES
  const [products, setProducts] = useState([
    { id: 1, title: "MacBook Pro", price: 20_000_000, isAvailable: true },
    { id: 2, title: "MacBook Cover", price: 500_000, isAvailable: false },
    { id: 3, title: "MacBook Bag", price: 700_000, isAvailable: true },
  ])




  return (
    <div className='text-white'>
      {/* SUM */}
      <h1 className='text-6xl font-bold p-6 bg-zinc-900'> SUM : {_.sum([1, 2, 3, 4, 5])} </h1>
      {/* SUMBY */}
      <h1 className='text-6xl font-bold p-6 bg-zinc-800'>{_.sumBy(products, (product: ProductType) => product.price).toLocaleString()} Tomans</h1>
      {/*  */}
    </div>
  )
}

export default Lodash2