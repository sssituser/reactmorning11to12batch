import React from "react";
import {useSelector} from 'react-redux';
export default function Counter(){
    let count = useSelector((state)=>state);
    return(
        <React.Fragment>
                <p className="h1 text-center text-secondary">{count}</p>
        </React.Fragment>
    )
}