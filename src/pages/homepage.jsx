import React, { useEffect, useState } from 'react';
import Menu from '../components/menu/menu.jsx';
import Banner from '../components/banner/banner.jsx';
import Slider from '../components/carrousel/carrousel.jsx';
import Devis from '../components/contact/contact.jsx';
import Footer from '../components/footer/footer.jsx';

const Home = () => {

  return (
    <div>
      <Menu />
      <Banner />
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
      <Devis />
      <Footer />
    </div>
  );
};

export default Home;