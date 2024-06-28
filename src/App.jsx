import React from 'react';
import CodeEditor from "./compoennts/CodeEditor"
import Footer from "./compoennts/Footer"
import NavBar from "./compoennts/NavBar"
import Output from "./compoennts/Output"
import { Extras } from './utils/Extras';


function App() {
  return (
    <div>
      <Extras>
        <NavBar />
        <div className="flex justify-between max-w-full p-8 max-h-fit bg-1a1a1a">
          <CodeEditor language='javascript' value='console.log("Hello World")' onChange={(value) => console.log(value)} />
          <Output />
        </div>
        <Footer />
      </Extras>
    </div>
  );
}

export default App;