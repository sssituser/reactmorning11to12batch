import React from "react";
import Counter from "./components/Counter";
import Wish from "./components/Wish";


export default function App(){
  return(
    <React.Fragment>
        <p className="h1 text-center">AppComponent</p>
        <Counter/>
        <Wish/>
    </React.Fragment>
  )
}