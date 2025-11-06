import axios from "axios";
import React,{useEffect, useState} from "react";

export default function About(){
  const  [users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setUsers(res.data)
        })
        .catch((err)=>{
            alert(err)
        })
    })


    return(
        <React.Fragment>
            <p className="h1 text-center text-primary">About Page</p>
            {JSON.stringify(users)}
        </React.Fragment>
    )
}