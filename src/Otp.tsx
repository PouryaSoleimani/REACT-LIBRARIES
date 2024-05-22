//^ OTP PAGE
import React, { FormEventHandler, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
//& TUTORIAL
// 1 - WHAT IS OTP ==> One Time Password
// 2 - FIRST WE GET THE NUMBER OF THE INPUT FROM CLIENT AND SAVE IT TO A STATE , USING {useState} HOOK
// 3 - THEN WE SEND THE CODE TO THE SERVER USING A FETCH {POST} METHOD , WITH A BODY THAT CONTAINS THE STRINGIFIED VALUE OF OUR {PHONE NUMBER}



const Otp = () => {
  //TOAST
  const notify = () => toast('✅ Code Sent Successfully ', { style: { background: '#333', color: '#fff', fontSize: "20px" } })
  const notify2 = () => toast('❌ Wrong Number ... ', { style: { background: '#333', color: '#fff', fontSize: "20px" } });

  const [phone, setPhone] = useState('')

  function phoneFormHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(phone)
    notify()
    setPhone('')
  }


  //RETURN
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className='text-white font-extrabold text-6xl my-6'>ONE TIME PASSWORD</h1>
      {/* //^ FORM */}
      <form onSubmit={phoneFormHandler} className='bg-zinc-800 w-1/3 h-fit rounded-xl border-4 border-zinc-100 text-white font-bold text-4xl px-4 py-10 flex flex-col space-y-10 items-center justify-center '>
        <input type="number" value={phone} onChange={event => setPhone(event.target.value)} className='px-6 py-4 rounded-xl font-bold text-4xl w-5/6 text-black outline-none' />
        <button type="submit" className='bg-black px-4 py-6 rounded-xl w-5/6 hover:bg-emerald-900 duration-300'>SEND CODE</button>
      </form>
    </div>
  )
}

export default Otp      