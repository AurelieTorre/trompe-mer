import React, { useEffect, useState } from 'react';
import Slider from '../components/carrousel/Carrousel.jsx';

const Home = () => {

  return (
    <div>
      <div className="content">
        {/* section trompe-l'œil */}
        <Slider />
        {/* détail */}
        {/* bouton */}
      </div>
      <div className="content">
        {/* section portraits */}
        <Slider />
        {/* détail */}
        {/* bouton */}
      </div>
      <div className="content">
        {/* section autres œuvres */}
        {/* photos */}
        {/* bouton */}
      </div>
      <div className="content">
        {/* section à propos */}
        {/* photo */}
        {/* bouton */}
      </div>
    </div>
  );
};

export default Home;