import React, { useContext } from "react";
import { MyContext } from "./ContextExample";
export default function Test(){
    const{ name }=useContext(MyContext);
    return( 
        <React.Fragment>
            <div className="container text-center text-secondary">
                <p className="h3">Hi Iam Test Component</p>
                <p className="h4">My Context Value is {name}</p>
            </div>
        </React.Fragment>
    )
}