import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from '../redux/counterSlice';


const Counter = () => {
    //const[count ,setCount] =useState(0);
    const val = useSelector(state=>state.counter);
    console.log(val)
    const dispatch = useDispatch()
    const handleIncrement=()=>{
        //setCount(count+1)
        dispatch(increment())
    }
    const handleDecrement=()=>{
        //setCount(count-1)
        dispatch(decrement())
    }
  return (
    <div>
        <p>{}</p>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
    </div>
  )
}

export default Counter