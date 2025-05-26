import { useState } from 'react'
import './App.css'

function App() {
   const [count, setCount] = useState(0)//simple variable holds a value of 0
  //a simple function to add 1 to counter
  var Add = (x) => {
    x = x + 1; //adds 1 to counter
    console.log("Adding 1 to counter", x);
    setCount(x); //sets a new value to  counter
       }
   return (
 <>
<div>
  <button className="Addbutton" onClick={() => Add(count)}>
    Add 1 to {count}
  </button>
  <h2>{count}</h2>
</div>
</>
  )
}
export default App
