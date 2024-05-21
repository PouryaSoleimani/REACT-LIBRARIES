//^ LODASH PAGE
import Lodash from "lodash"
import { useState } from "react"

// & LODASH TUTORIAL
// 1 - INSTALL LODASH FROM ITS OFFICIAL WEBSITE
// 2 - IMPORTING LODASH FROM LODASH
// 3 - USING LODASH BY COMMANDING LODASH.{MEHTOD NAME}
// 4 - READ THE DOCUMENT OF EVERY METHOD BEFORE USING IT


const Loadash = () => {
  // PRODUCTS STATE
  const [products, setProducts] = useState([
    { id: 1, title: "Laptop", price: 20_000_000 },
    { id: 1, title: "Cover", price: 500_000 },
    { id: 1, title: "Hub", price: 300_000 },
  ])




  // RETURN
  return (
    <>
      <h1 className="text-slate-100 text-4xl font-bold bg-pink-500 p-4 text-center border-b-8 border-sky-300">LODASH PAGE</h1>
      <hr />
      {/* LODASH.SUM */}
      <h2 className='text-white text-4xl font-bold px-8 py-4 bg-zinc-800 border-b-8 border-zinc-300'>SUM : {Lodash.sum([1, 2, 3, 4])}</h2>
      {/* LODASH.SUMBY */}
      <h2 className='text-white text-4xl font-bold px-8 py-4 bg-zinc-800 border-b-8 border-zinc-300'>TOTAL PRICE = <span className="text-5xl text-blue-400">{Lodash.sumBy(products, product => product.price).toLocaleString()}</span> <span className="text-xl text-pink-500">Tomans</span> </h2>
    </>
  )
}

export default Loadash   