import React, { useState } from 'react'
import __ from 'lodash'

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
  //ARRAY METHODS
  let myArray1 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
  let uniqueArray = __.sortedUniq(myArray1)
  console.log(uniqueArray)

  let takeArray = __.take(myArray1)
  console.log(takeArray)

  let withOutArray = __.without(myArray1, 1, 2, 3)
  console.log(withOutArray)

  let castedArray = __.castArray({ id: 1 })
  console.log(castedArray)
  //MATH
  console.log(__.gt(30, 20))
  console.log(__.add(10, 20))
  console.log(__.divide(50, 5))
  console.log(__.max([1, 2, 3, 4]))
  console.log(__.multiply(2, 6))
  console.log(__.subtract(100, 1))
  
  // *RETURN
  return (
    <div className='text-white'>
      {/*SUM */}
      <h1 className='text-6xl font-bold p-6 bg-zinc-900'> SUM : {__.sum([1, 2, 3, 4, 5])} </h1>

      {/*SUMBY */}
      <h1 className='text-6xl font-bold p-6 bg-zinc-800'>{__.sumBy(products, (product) => product.price).toLocaleString()} Tomans</h1>

      {/*FILTER */}
      <h1 className='text-3xl flex items-center justify-start space-x-6 font-bold p-6 bg-zinc-700'>{__.filter(products, (product: ProductType) => { product.price > 2_000_000; return product }).map(item => <p key={item.id}>{item.id}.{item.title} / {item.price.toLocaleString()}</p>)}</h1>

      {/*FILTER 2 */}
      <h1 className='text-3xl flex items-center justify-start space-x-6 font-bold p-6 bg-zinc-600'>{__.filter(products, { id: 2 }).map(item => <p key={item.id}>{item.id}.{item.title}</p>)}</h1>

      {/*FILTER 3 */}
      <h1 className='text-3xl flex items-center justify-start space-x-6 font-extrabold p-6 bg-zinc-500 text-black'>{__.filter(products, "isAvailable").map(item => <p key={item.id}>{item.title} </p>)}</h1>

      {/*STRING CAPITALIZE */}
      <h1 className='text-3xl flex items-center justify-start space-x-6 font-extrabold p-6 bg-zinc-400 text-black'>{__.capitalize('POURYA')}</h1>

      {/*STRING CAMELCASE */}
      <h1 className='text-3xl flex items-center justify-start space-x-6 font-extrabold p-6 bg-zinc-300 text-black'>{__.camelCase('add todo function')}</h1>

      {/*ARRAY CHUNK */}
      <h1 className='text-3xl flex items-center justify-start space-x-6 font-extrabold p-6 bg-zinc-200 text-black'>{__.chunk(["1", "2", "3", "4", "5", "6"], 4)}</h1>

    </div>
  )
}

export default Lodash2