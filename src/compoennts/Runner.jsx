import React from 'react';
import { FaPlay } from 'react-icons/fa';
import '../styles/Runner.css';
import ExtrasContext from '../utils/Extras';
import axios from 'axios';


function Runner() {
  const {code,setOutput} = React.useContext(ExtrasContext);
  const handleRunClick = () => {
    console.log(code);
    console.log("Run button clicked");
    axios.post("http://localhost:4000/code/run",{
      code:code,
      language:"javascript"

    }).then((res)=>{
      console.log(res.data);
      setOutput(res.data.output);
    }).catch((err)=>{
      console.log(err);
    } )
  };

  return (
    <div className="runner-container">
      <button onClick={handleRunClick} className="run-button">
        <FaPlay className="run-icon max-w-full" />
        Run
      </button>
    </div>
  );
}

export default Runner;
