// import React from 'react'

// const child = () => {
//   return (
//     <div>
//         Child data name:{name}
      
//     </div>
//   )
// }

// export default child


// import React from 'react'

// const Child = (name) => {
//   return (
//     <div>Child data name:{name}
      
//     </div>
//   )
// }

// export default Child


import React from 'react'

const Child = ({ name, alert }) => {
  return (
    <>
      <div>Child data name: {name}</div>

      {/* use alert function inside onclick */}
      <button onClick={alert}>Click</button>
    </>
  )
}

export default Child