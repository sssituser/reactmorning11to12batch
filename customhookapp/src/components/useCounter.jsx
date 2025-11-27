import React,{useState} from "react";

export default function useCounter(initialValue=0){
 let[count,setCount]=useState(initialValue);

 function increment(){
    setCount(count+1)
 }

 function decrement(){
    setCount(count-1)
 }
 function reset(){
    setCount(initialValue)
 }
 return{count,increment,decrement,reset}
}