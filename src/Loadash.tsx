//^ LODASH PAGE
import Lodash from "lodash"
import { useState } from "react"

// & LODASH TUTORIAL
// 1 - INSTALL LODASH FROM ITS OFFICIAL WEBSITE
// 2 - IMPORTING LODASH FROM LODASH
// 3 - USING LODASH BY COMMANDING LODASH.{MEHTOD NAME}
// 4 - READ THE DOCUMENT OF EVERY METHOD BEFORE USING IT

//TYPES
type ProductType = { id: number, title: string, price: number }
type LodashObjType = { a: number, b: number, c: number, d: number }

const Loadash = () => {
  // PRODUCTS STATE
  const [products, setProducts] = useState([
    { id: 1, title: "Laptop", price: 20_000_000, count: 10 },
    { id: 2, title: "Cover", price: 500_000, count: 0 },
    { id: 3, title: "Hub", price: 300_000, count: 12 },
  ])

  const LodashPickObj: LodashObjType = { a: 10, b: 20, c: 30, d: 40 }


  // RETURN
  return (
    <>
      <h1 className="text-slate-100 text-3xl font-bold bg-pink-500 p-4 text-center border-b-4 border-sky-300">LODASH PAGE</h1>
      <hr />

      {/*//^ SUM */}
      <h2 className='text-white text-3xl font-bold px-8 py-6 bg-zinc-800 border-b-4 border-red-600'>Sum : {Lodash.sum([1, 2, 3, 4])}</h2>

      {/*//^ SUMBY */}
      <h2 className='text-white text-3xl font-bold px-8 py-6 bg-zinc-800 border-b-4 border-yellow-400'>Total Price = <span className="text-5xl text-blue-400">{Lodash.sumBy(products, product => product.price).toLocaleString()}</span> <span className="text-xl text-pink-500">Tomans</span> </h2>


      {/*//^ FILTER */}
      <h2 className='text-white text-3xl font-bold px-8 py-6 bg-zinc-800 border-b-4 border-blue-500 flex'> Filtered items : <span className="pl-2 flex text-purple-600 text-5xl">{Lodash.filter(products, (product) => product.price > 300_000).map(item => <p className="px-2">{item.title} /</p>)} </span></h2>

      <h2 className='text-white text-3xl font-bold px-8 py-6 bg-zinc-800 border-b-4 border-lime-500 flex items-center'> Filtered items 2 :<span className="pl-2 flex text-cyan-400 text-5xl">{Lodash.filter(products, { title: "Hub" }).map(item => <p className="px-2">{item.title}</p>)}  </span></h2>

      <h2 className='text-white text-3xl font-bold px-8 py-6 bg-zinc-800 border-b-4 border-pink-500 flex items-center'> Filtered items 2 :<span className="pl-2 flex text-red-600 text-5xl">{Lodash.filter(products, "count").map(item => <p className="px-2">{item.title} /</p>)}  </span></h2>

      {/*//^ MAP */}
      <h2 className='text-white text-3xl font-bold px-8 py-6 bg-zinc-800 border-b-4 border-white flex items-center'>
        {Lodash.map(products, product => { product.price += 1_000_000; return product })
          .map((product: ProductType) => <p className="px-2 text-lime-400 text-4xl">  {product.title} : {product.price.toLocaleString()} <span className="text-red-700">/</span> </p>)}
      </h2>

      {/*//^ PICK */}
      <h2 className='text-white text-3xl font-bold px-8 py-6 bg-zinc-800 border-b-4 border-violet-600 flex items-center'>Lodash Pick : {Lodash.pick(LodashPickObj, ['a', 'b']).a} </h2>
      {/*//^ PICKBY */}
      <h2 className='text-white text-3xl font-bold px-8 py-6 bg-zinc-800 border-b-4 border-violet-600 flex items-center'>Lodash PickBy : {Lodash.pickBy(LodashPickObj, Lodash.isNumber).b} </h2>

    </>
  )
}

export default Loadash  