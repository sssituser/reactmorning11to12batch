import React,{useState,useRef} from "react";
export default function Counter(){
   
    let[count,setCount]=useState(0);
   
    let ref = useRef(0);
   
    function increment(){
        setCount(count+1)
        ref.current = ref.current+1
    }
        return(
        <React.Fragment>
            <div className="container text-center">
                <p className="h1">Count : {count}</p>
                <p className="h1">Count with :Ref {ref.current}</p>
                <button className="btn btn-sm btn-primary" onClick={increment}>Submit</button>
            </div>
        </React.Fragment>
    )
}
