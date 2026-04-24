// import React from 'react'

// const Features = () => {
//   return (
//     <div>
//       my navbar
      
//     </div>
//   )
// }

// export default Features


import React from 'react';

const Features = () => {
  const data = [
    { title: "Responsive", desc: "Looks great on any screen." },
    { title: "Reusable", desc: "Component-based architecture." },
    { title: "Fast", desc: "Optimized for performance." }
  ];

  return (
    <section id="features" className="features-section">
      <h2>Our Features</h2>
      <div className="feature-grid">
        {data.map((f, i) => (
          <div key={i} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
