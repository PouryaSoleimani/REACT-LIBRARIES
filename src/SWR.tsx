import React, { useState } from 'react'
import useSWR from 'swr'

type itemType = { id: number, title: string }
const SWR = () => {

  const [products, setProducts] = useState([])

  function fetcher() { fetch('https://fakestoreapi.com/products').then(response => response.json()).then(result => setProducts(result)) }
  
  const { error, isLoading } = useSWR('https://fakestoreapi.com/products', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>




  //^ RETURN 
  return (
    <div className='px-4 text-white font-bold text-lg flex flex-col space-y-2 bg-zinc-900 py-2 border-8 border-zinc-900'>
      {products.map((item: itemType) => <p>{item.id} - {item.title} </p>)}
    </div>
  )
}

export default SWR