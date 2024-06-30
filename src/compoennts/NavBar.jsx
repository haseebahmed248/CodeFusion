import React from 'react'
import react from '../assets/react.svg'
import codeFusion from '../assets/codeFusion.png'

function NavBar() {
  return (
    <div
    className='w-full bg-slate-900 max-h-fit p-3 flex shadow-md'
    >
        <img src={codeFusion} alt='Image' className='w-12 h-12 mr-2 ' />
        <h2 
        className='text-orange-400 font-bold text-4xl'
        >Code Fusion</h2>
    </div>
  )
}

export default NavBar