// import React from 'react'
// import child from "./child";


// const parent = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default parent

// import React from 'react'
// import Child from './child';

// const Parent = () => {

//     const fullname="ram";


//   return (
//     <>
//     <div> Parent</div>
//     <Child name={fullname} />
//     </>
//   )
// }

// export default Parent



// import React from 'react'
// import Child from './child'

// const fullname = "Hamza Ali Mazari";

// function Alert() => {
//   alert("Hosla Endhan Badla");

// return(
//   <>
//   <div>Parent</div>
//   <h1>Rendered in parent comp:{fullname}</h1>

//   <child name={fullname}
//   alert={Alert} />
//   </>
// )
// }
// export default Parent



import React from 'react'
import Child from './child'

const Parent = () => {

  const fullname = "Hamza Ali Mazari";

  function Alert() {
    alert("Hosla Endhan Badla");
  }

  return (
    <>
      <div>Parent</div>
      <h1>Rendered in Parent comp: {fullname}</h1>

      <Child name={fullname} alert={Alert} />
    </>
  )
}

export default Parent