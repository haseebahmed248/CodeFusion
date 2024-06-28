import React from 'react'
import ExtrasContext from '../utils/Extras'

function Output() {
  const {output} = React.useContext(ExtrasContext);
  return (
    <div
        className=' border ml-4 mt-16 p-8 border-blue-400 text-white shadow-lg overflow-y-auto'
        style={{
            height:'69vh',
            width:'40vw',
        }}
    >
        <h1>Output</h1>
        <p>{output}</p>
    </div>
  )
}

export default Output