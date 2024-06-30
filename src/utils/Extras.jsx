import React, { createContext, useState } from 'react'; // Import useState

const ExtrasContext = createContext();

export const Extras = ({ children }) => {
  const [code, setCode] = useState('console.log("Hello World")');
  const [output,setOutput] = useState('');
  return (
    <ExtrasContext.Provider value={{ code, setCode, output,setOutput }}>
      {children}
    </ExtrasContext.Provider>
  );
};

export default ExtrasContext;