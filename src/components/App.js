
import React from "react";
import { useState } from "react";
import './../styles/App.css';


const App = () => {
 const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>Button clicked {counter} times</p>
      <button onClick={() => setCounter(num => num + 1)}>Click me</button>
    </div>
  );
}

export default App
