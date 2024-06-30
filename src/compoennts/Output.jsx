import React from 'react';
import ExtrasContext from '../utils/Extras';

function Output() {
  const {output} = React.useContext(ExtrasContext);
  return (
    <div className="flex flex-col">
      <h1 className='ml-4 mt-16 mb-8'>Output</h1>
      <div
          className='border ml-4 p-8 border-blue-400 text-white shadow-lg overflow-y-auto max-w-full md:w-96 md:h-full'
      >
          <p>{output}</p>
      </div>
    </div>
  );
}

export default Output;