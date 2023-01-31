import './App.css';
import React, { useState } from 'react';

function App() {
 
  let [Inum, setInum] = useState(0)

  let Sum = () =>{
    setInum(Inum+1)
    console.log("clicked")
  
  
  }

  return (
    <div>
      <h1>{Inum}</h1>
      <button onClick={Sum}> Click me</button>
    </div>

  );
  
}

export default App;
