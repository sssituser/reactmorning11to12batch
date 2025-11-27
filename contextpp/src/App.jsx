import React from "react";
import Parent from "./components/Parent";
import { MyContext } from "./components/ContextExample";
import UseRefExmple from "./components/UseRefExample";
import Counter from "./components/Counter";
export default function App(){
  return(
   <MyContext.Provider value={{message:"Welcome to SSSIT"}}>
  <React.Fragment>
      <div className="container text-center text-success">
        <p className="h1">App Component</p>
        <Parent/>
        <UseRefExmple/>
        <Counter/>
        
      </div>
    </React.Fragment>
   </MyContext.Provider>
  )
}