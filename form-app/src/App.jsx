import React, { useState } from "react";
export default function App(){

  let[count,setCount]=useState(0);

  let[msg,setMsg] = useState("Welcome To React")

  let[employee,setEmployee]=useState({
    employee:{
      eid:111,
      ename:"kiran",
      esla:50000
    }
  })

  return(
    <React.Fragment>
        <div className="container text-center">

            <p className="h2">
              Count : {count}
            </p>

            <p className="h2">
              Message : {msg}
            </p>
            <p className="h2">
              Employee :{JSON.stringify(employee)}
            </p>

        </div>
    </React.Fragment>
  )
}