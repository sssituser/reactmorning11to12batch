import React,{useReducer} from "react";
export default function Wish(){
    let[state,dispatch] =  useReducer(reducer,{message:"Welcome"})
    function reducer(state,action){
        switch(action.type){
            case "GM":
                return {message:"Good Morning"}
            case "GA":
                return {message:"Good Afternoon"}
            case "GE":
                return {message:"Good Evening"}
            default:
                return state.message
        }
    }
    return(
        <React.Fragment>
            <div className="container text-center">

                <p className="h1">{state.message}</p>
                <button onClick={()=>dispatch({type:"GM"})} className="btn btn-sm btn-success">
                    Good Morning
                </button>
                <button onClick={()=>dispatch({type:"GA"})} className="btn btn-sm btn-warning">
                    Good Afternoon
                </button>
                <button onClick={()=>dispatch({type:"GE"})} className="btn btn-sm btn-primary">
                    Good Evening
                </button>
            </div>
        </React.Fragment>
    )
}