import React from 'react';

const Home = () => {
    const backgroundStyle = {
    backgroundImage: "url('https://th-i.thgim.com/public/migration_catalog/article10486909.ece/alternates/LANDSCAPE_1200/CM22BADAGA_CUISINE')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "40px",
    color: "white",
  };
  
  return (
  <div className="container mt-4" >
    <h1>Welcome to the Badaga Community in New Zealand</h1>
    <p>This platform connects all Badaga families across Aotearoa!</p>
    <h2> Arambichova???</h2>
    <div style={backgroundStyle}> </div>
  </div>
);
};

export default Home;
