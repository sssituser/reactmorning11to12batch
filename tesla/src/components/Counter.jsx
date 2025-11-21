import React,{useReducer} from "react";

export default function Counter(){
    
    let[state,dispatch]=useReducer(reducer,{count:0});

    function reducer(state,action){
        switch(action.type){
            case "increment":
                return {count:state.count+1}
            case "decrement":
                return {count:state.count-1}
            case "reset":
                return {count:0}
            default:
                return state
        }
    }

    return(
        <React.Fragment>
            <div className="container text-center">
                <p className="h3 text-center text-secondary">Counter Component</p>
                <p className="h3">{state.count}</p>
                <button onClick={()=>{dispatch({type:"increment"})}} className="btn btn-sm btn-primary">
                    Increment
                </button>
                 <button onClick={()=>{dispatch({type:"decrement"})}} className="btn btn-sm btn-danger">
                    Decrement
                </button>
                 <button onClick={()=>{dispatch({type:"reset"})}} className="btn btn-sm btn-warning">
                    Reset
                </button>
            </div>
        </React.Fragment>

    )
}