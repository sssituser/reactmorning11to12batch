import React from "react";
import Counter from "./Counter";
import {useDispatch} from 'react-redux';
export default function Home(){
    const dispatch = useDispatch();
    return(
        <React.Fragment>
           <div className="text-center mb-5">
                 
            <button className="mt-4" onClick={(event)=>dispatch({type:"Incr"})}>Increment</button>
                    <Counter/>
            <button onClick={(event)=>dispatch({type:"Decr"})}>Decrement</button>
           </div>
        </React.Fragment>
    )
}