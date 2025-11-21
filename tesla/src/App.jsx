import React, { useState } from "react";
import Parent from "./components/Parent";
export default function App(){
  
   let[msg,setMsg]=useState("Welcome to SSSIT");
  return(
    <React.Fragment>
      <div className="container text-center">
          <p className="h1 text-danger">App component : {msg}</p>
          <Parent message={msg}/>
      </div>
    </React.Fragment>
    
  )
}