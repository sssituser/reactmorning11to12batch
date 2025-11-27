import React from "react";

import useCounter from "./useCounter";
export default function Test(){
    let {count,increment,decrement,reset}=useCounter(0)
 return(
        <React.Fragment>
            <h2 style={{textAlign:"center"}}>Test Component</h2>
           
            <button onClick={increment}>Increment</button>
            
            <h2>{count}</h2>
            
            <button onClick={decrement}>Decrement</button>
           
            <button onClick={reset}>Reset</button>
        </React.Fragment>
    )
}