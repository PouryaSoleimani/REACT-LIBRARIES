//^ REACT SPINNERS PAGE
import React from 'react'
import BarLoader from "react-spinners/BarLoader";
import BeatLoader from "react-spinners/BeatLoader";
import PuffLoader from "react-spinners/PuffLoader";
import PulseLoader from "react-spinners/PulseLoader";
import FadeLoader from "react-spinners/FadeLoader";

// ** TUTORIAL
// 1 - INSTALL THE PACKAGE
// 2 - USE THE PACKAGE {STORY BOOK} PAGE TO SELECT AND COPY THE SPINNER YOU WANT
// 3 - CUSTOMIZE IT AS YOU WANT




const ReactSpinners = () => {
  return (
    <div>
      <h1 className='text-4xl text-white bg-pink-400 py-5 text-center font-bold'>React-Spinners</h1>

      <div className='flex flex-col items-center justify-center bg-zinc-800 space-y-10 px-10 py-16 w-[30rem] mx-auto my-24 border-8 rounded-xl '>
        <BarLoader color='red' aria-label="Loading Spinner" data-testid="loader" />
        <BeatLoader color="#36d7b7" />
        <PuffLoader color="orange" />
        <PulseLoader color="white" />
        <FadeLoader color="hotpink" speedMultiplier={.8} />
      </div>
    </div>
  )
}

export default ReactSpinners 
