import React from 'react'

const Ternary = () => {
    const isLoggedin = true
    // condition?"true":"false"
  return (
    <>
    <div>Ternary</div>
    {isLoggedin?"welcome to dashboard": "please login"}
    
    </>
    
  )
}

export default Ternary
