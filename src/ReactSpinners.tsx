//^ REACT SPINNERS PAGE
import React from 'react'
import BarLoader from "react-spinners/BarLoader";
import BeatLoader from "react-spinners/BeatLoader";
import PuffLoader from "react-spinners/PuffLoader";
import PulseLoader from "react-spinners/PulseLoader";
import FadeLoader from "react-spinners/FadeLoader";



const ReactSpinners = () => {
  return (
    <div>
      <h1 className='text-4xl text-white bg-cyan-800 py-5 text-center font-bold'>React-Spinners</h1>

      <div className='flex flex-col items-center justify-center bg-zinc-800 space-y-10 px-10 py-16 w-[30rem] mx-auto my-24 border-8 rounded-xl '>
        <BarLoader color='red' aria-label="Loading Spinner" data-testid="loader" />
        <BeatLoader color="#36d7b7" />
        <PuffLoader color="orange" />
        <PulseLoader color="white" />
        <FadeLoader color="hotpink" />
      </div>
    </div>
  )
}

export default ReactSpinners 
