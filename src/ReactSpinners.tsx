//^ REACT SPINNERS PAGE
import React, { useEffect, useState } from 'react'
import BarLoader from "react-spinners/BarLoader";
import BeatLoader from "react-spinners/BeatLoader";
import PuffLoader from "react-spinners/PuffLoader";
import PulseLoader from "react-spinners/PulseLoader";
import FadeLoader from "react-spinners/FadeLoader";
import ScaleLoader from "react-spinners/ScaleLoader";

// ** TUTORIAL
// 1 - INSTALL THE PACKAGE
// 2 - USE THE PACKAGE {STORY BOOK} PAGE TO SELECT AND COPY THE SPINNER YOU WANT
// 3 - CUSTOMIZE IT AS YOU WANT




const ReactSpinners = () => {
  const [isLoading, setIsLoading] = useState(true)
  const loadingToggler = () => { setIsLoading(prevStatus => !prevStatus) }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])

  return (
    <div>
      <h1 className='text-4xl text-white bg-pink-400 py-5 text-center font-bold'>React-Spinners</h1>

      {/* <div className='flex items-center justify-center pt-10'>
        <button onClick={loadingToggler} className='text-white bg-blue-800 p-4 text-2xl font-bold rounded-xl'>Toggle Loadings</button>
      </div> */}

      {/* <BarLoader color='red' aria-label="Loading Spinner" data-testid="loader" /> */}
      <div className='flex items-start py-10 justify-center max-w-screen h-screen'>
        {isLoading ? (
          <ScaleLoader color="grey" />
        ) : (
          <h1 className='text-white text-4xl font-bold'>LOADING COMPLETED</h1>
        )}
      </div>
      {/* <div className='flex flex-col items-center justify-center bg-zinc-800 space-y-10 px-10 py-10 w-[30rem] mx-auto my-6 border-8 rounded-xl '>
        {isLoading ? (
          <>
            <BeatLoader color="#36d7b7" />
            <PuffLoader color="orange" />
            <PulseLoader color="white" />
            <FadeLoader color="hotpink" speedMultiplier={.8} />
          </>
        ) : <h1 className='text-white text-3xl font-bold'>NO LOADING</h1>}

      </div> */}
    </div>
  )
}

export default ReactSpinners 
