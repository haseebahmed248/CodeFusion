import React from 'react'
import react from '../assets/react.svg'

function NavBar() {
  return (
    <div
    className='w-full bg-slate-950 max-h-fit p-3 flex shadow-md '
    >
        <img src={react} alt='Image' className='w-10 h-10 mr-2' />
        <h2 
        className='text-white text-4xl'
        >Logo</h2>
    </div>
  )
}

export default NavBar