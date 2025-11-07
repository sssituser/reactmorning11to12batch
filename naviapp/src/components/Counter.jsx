import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
  const count = useSelector(state=>state);
  return (
    <React.Fragment>
        <p className="h1 text-center mt-3"> {count} </p>
    </React.Fragment>
  )
}

export default Counter