// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//         <h1>my navbar</h1>
      
//     </div>
//   )
// }

// export default Navbar


// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h2 className="logo">MySite</h2>
//       <ul className="nav-links">
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">DesignAI</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#testimonials">Reviews</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;