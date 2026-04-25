import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'

const Home = () => {

  const topPosts = Data.slice(0, 6)

  return (
    <div style={{ padding: "20px" }}>

      <h1 style={{ textAlign: "center" }}>Welcome to My Blog 🚀</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "30px"
      }}>
        
        {topPosts.map((item) => (
          <div key={item.id} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px"
          }}>
            <Link to={`/post/${item.id}`} style={{ textDecoration: "none", color: "black" }}>
              
              <img 
                src={item.img_url} 
                alt={item.title} 
                style={{ width: "100%", borderRadius: "10px" }}
              />

              <h3>{item.title}</h3>
              <p>{item.category}</p>

            </Link>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Home
