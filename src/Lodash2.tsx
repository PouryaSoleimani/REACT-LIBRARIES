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
      Lodash2
    </div>
  )
}

export default Lodash2