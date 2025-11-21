import React, { useContext } from "react";
import Child from './Child';
import { MyContext } from "./ContextExample";
export default function Parent(){
  let {message}=useContext(MyContext);
  return(
    <React.Fragment>
      <div className="container text-center text-primary">
        <p className="h1">Parent Component : {message}</p>
        <Child/>
      </div>
    </React.Fragment>
  )
}