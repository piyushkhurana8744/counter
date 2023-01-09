import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
      <h1>Count :{count}</h1>
      <button disabled={count==1} onClick={()=>setCount(count-1)}>Dec</button>
      <button onClick={()=>setCount(count+1)}>Inc</button>
      <h1>count</h1>
    </div>
  )
}

export default Counter
