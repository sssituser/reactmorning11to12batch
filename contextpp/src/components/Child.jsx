import React, { useContext } from "react";
import GrandChild from './GrandChild'
import { MyContext } from "./ContextExample";
export default function Child(){
  const {message} = useContext(MyContext);
  return(
    <React.Fragment>
      <div className="container text-center text-success">
        <p className="h1">Child Component:{message}</p>
        <GrandChild/>
      </div>
    </React.Fragment>
  )
}