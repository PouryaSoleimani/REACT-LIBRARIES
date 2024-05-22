//^ OTP PAGE
import React, { FormEventHandler, useState } from 'react'
//& TUTORIAL
// 1 - WHAT IS OTP 



const Otp = () => {

  const [phone, setPhone] = useState('')

  function phoneInputHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(phone)
    setPhone('')
  }


  //RETURN
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <h1 className='text-white font-extrabold text-6xl my-6'>ONE TIME PASSWORD</h1>
      {/* //^ FORM */}
      <form onSubmit={phoneInputHandler} className='bg-zinc-800 w-1/3 h-fit rounded-xl border-4 border-zinc-100 text-white font-bold text-4xl px-4 py-10 flex flex-col space-y-10 items-center justify-center '>
        <input type="number" value={phone} onChange={event => setPhone(event.target.value)} className='px-6 py-4 rounded-xl font-bold text-4xl w-5/6 text-black outline-none' />
        <button type="submit" className='bg-black px-4 py-6 rounded-xl w-5/6 hover:bg-emerald-900 duration-300'>SEND CODE</button>
      </form>
    </div>
  )
}

export default Otp      