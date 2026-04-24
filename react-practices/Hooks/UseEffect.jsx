import React,{use, useEffect, useState} from 'react'

const UseEffect = () => {
    const UseEffect = () => {
  const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0);
//   useEffect(() => {
//     //mounting
//     return() => {
//       //unmounting
//     }
// }, [updating])

    useEffect(() => {},[])
        alert("button clicked")
},[]
  return (
     <>
      <div>UseEffect</div>

      <h1>Count1: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>

      <h1>Count2: {countTwo}</h1>
      <button onClick={() => setCountTwo(countTwo + 1)}>Click</button>
    </>
  )
}


export default UseEffect
