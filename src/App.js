import { useState,useEffect } from "react"
import { flushSync } from "react-dom"



const IamRendering = () =>{
  console.log("Rendering")
  return(
    <div>
      I am Rendering 
    </div>
  )

}

function App() {

  const [stateA, setStateA] = useState(null)
  const [stateB, setStateB] = useState(null)

useEffect(() => {
  setTimeout( () =>{

    /* uncomment this for batch updates
    setStateA("A") 
    setStateB("B") 
*/

 /*
    uncomment this for separate rendering for each
    state update
    flushSync( ()=>setStateA("A") )
    flushSync( ()=>setStateB("B") )
    */

  }, 100)
  
}, [])
  
  return (
    <IamRendering></IamRendering>
  );
}

export default App;
