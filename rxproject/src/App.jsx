import React from "react";

import Counter from "./Counter";
import   {useDispatch}  from   'react-redux'

export default function App(){

  let dispatch = useDispatch()

  return(
    <React.Fragment>
      <div className="container text-center">
        <Counter/>
        <button onClick={(e)=>dispatch({type:"Increment"})}>Increment</button>
        <button onClick={(e)=>dispatch({type:"Decrement"})}>Decrement</button>
        <button onClick={(e)=>dispatch({type:"Reset"})}>Reset</button>
      </div>
    </React.Fragment>
  )
}