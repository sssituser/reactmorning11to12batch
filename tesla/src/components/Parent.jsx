import React from "react";
import Child from "./Child";
export default function Parent(props){
    return(
        <React.Fragment>
            <div className="container text-center">
                <p className="h1">Parent component :{props.message}</p>
                <Child message={props.message}/>
            </div>
        </React.Fragment>
    )
}