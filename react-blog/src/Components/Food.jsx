import React from 'react'
import Data from '../Data'

const Food = () => {

  const filteredData = Data.filter((item) => item.category === "Food")
  console.log(filteredData)
  return (
    <>
    <div></div>
    {filteredData.map((fooddata)=>(
      <>
      <h1>{fooddata.title}</h1>  
      <img src={fooddata.img_url}/>
      </> 
    ))}
    </>
  )
}

export default Food