import React, { useState } from "react";
import Test from "./components/Test";
import Counter from "./components/Counter";
import { useDispatch } from "react-redux";
export default function App(){

  let dispatch = useDispatch();

  return(
    <React.Fragment>
      
       <p className="h1 text-center">App Component</p>
       <div className="text-center">
  <button className="btn btn-success btn-sm"  onClick={(event)=>dispatch({type:"Incr"})} >Increment</button>
            <Counter/>
  <button className="btn btn-danger btn-sm"   onClick={(event)=>dispatch({type:"Decr"})}
        >Decrement</button>
       </div>
      
    </React.Fragment>
  )
}