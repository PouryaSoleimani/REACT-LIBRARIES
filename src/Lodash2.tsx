import React, { useState } from 'react'
import _ from 'lodash'

//TYPES 
type ProductType = { id: number, title: string, price: number, isAvailable: boolean }
type ItemType = number | ProductType
//^ COMPONENT
const Lodash2 = () => {
  //STATES
  const [products, setProducts] = useState([
    { id: 1, title: "MacBook Pro", price: 20_000_000, isAvailable: true },
    { id: 2, title: "MacBook Cover", price: 500_000, isAvailable: false },
    { id: 3, title: "MacBook Bag", price: 700_000, isAvailable: true },
  ])
  //RETURN
  return (
    <div className='text-white'>
      {/* SUM */}
      <h1 className='text-6xl font-bold p-6 bg-zinc-900'> SUM : {_.sum([1, 2, 3, 4, 5])} </h1>
      {/* SUMBY */}
      <h1 className='text-6xl font-bold p-6 bg-zinc-800'>{_.sumBy(products, (product) => product.price).toLocaleString()} Tomans</h1>
      {/* FILTER */}
      <h1 className='text-3xl flex items-center justify-start space-x-6 font-bold p-6 bg-zinc-700'>{_.filter(products, (product) => { product.price * 2; return product }).map((item) => <p>{item.id}.{item.title} / {item.price.toLocaleString()}</p>)}</h1>
      {/* FILTER 2 */}
      <h1 className='text-3xl flex items-center justify-start space-x-6 font-bold p-6 bg-zinc-600'>{_.filter(products, { id: 2 }).map(item => <p>{item.id}.{item.title}</p>)}</h1>
      {/* FILTER 3 */}
      <h1 className='text-3xl flex items-center justify-start space-x-6 font-extrabold p-6 bg-zinc-500 text-black'>{_.filter(products, "isAvailable").map(item => <p>{item.title} </p>)}</h1>
      
    </div>
  )
}

export default Lodash2