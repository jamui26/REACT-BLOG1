import React from 'react'
import Data from '../Data'

const Hollywood = () => {

const HollywoodData = Data.filter((item) => item.category === "Hollywood")
console.log(HollywoodData)

  return (
    <>
    <div></div>
    {HollywoodData.map((hollydata)=>(
      <>
      <Link to={`/post/${hollywood.id}`}>
      <h1>{hollydata.title}</h1>
      <img src={hollydata.img_url}/>
      </Link>
      </>
    ))}
    </>
  )
}

export default Hollywood