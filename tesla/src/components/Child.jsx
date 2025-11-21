import React from "react";
import { MyContext } from "./ContextExample";
import { useContext } from "react";
export default function Child(props){
    
    return(
        <React.Fragment>
            <div className="container text-cennter">
                <p className="h1">Child Component:{props.message}</p>
            </div>
        </React.Fragment>
    )
}