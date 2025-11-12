import React from "react";
import { useSelector } from "react-redux";

export default function Counter(){

    const count = useSelector(state=>state);
    return (
        <React.Fragment>
            <p className="h1 text-center"> {count} </p>
        </React.Fragment>
    )
}