import React from "react";
import Test from "./components/Test";

export default function App(){
  return(
    <React.Fragment>
      <h1 style={{marginLeft:10,textAlign:"center",color:"blueviolet"}}>App.jsx component</h1>
      <Test/>
    </React.Fragment>
  )
}