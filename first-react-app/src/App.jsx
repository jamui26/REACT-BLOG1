// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App                                         


// import React from 'react'
// import navbar from ''
// const App = () => {
//   return (
//     <div>
//       App
//     </div>
//   )
// }

// export default App


// import componentname from " pathname "

// const App =() => {
//   const value=0;
//   function demo(){

//   }
//   return(
//         <>
//     <div>App</div>
//     <h1>{value}</h1>
//     <button onClick={demo}>Click</button>
//     <Navbar/>
//     </>

//   )

  
  
// }



// import React from 'react'
// import Navmenu from './Navmenu'

// const App = () => {
//   return (
//     <>
//     <Navmenu/>
//     <div className="nav">App</div>
//     <h1>This is APP COMPONENT</h1>
//     </>
//   )
// }

// export default App;

// import "./App.css";

// const App = () => {
//   return (
//     <>
//       <div className="nav">App</div>
//       <h1>This is APP COMPONENT</h1>
//     </>
//   );
// };

// export default App;

// import React from "react";
// import ReactDOM from "react-dom/client";

// function Navbar() {
//   return <h1>Hello World</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Navbar />);

// import Navbar from "./components/Navbar";
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <Navbar />
      
//     </div>
//   )
// }

// export default App


// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import Footer from "./components/Footer";
// import "./App.css";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <HeroSection />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import './styles/style.css';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <HeroSection />
//       <Features />
//       <Testimonials />
//       <Footer />
//     </div>
//   );
// }

// export default App;




// import Parent from "./props/Parent";
// import Child from "./props/child";


import React from 'react'
import Parent from './props/Parent'

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  )
}

export default App