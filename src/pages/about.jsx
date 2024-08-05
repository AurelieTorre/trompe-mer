import React, { useEffect, useState } from 'react';
import Menu from '../components/menu/menu.jsx';
import Banner from '../components/banner/banner.jsx';
import Devis from '../components/contact/contact.jsx';
import Footer from '../components/footer/footer.jsx';

const About = () => {

  return (
    <div>
      <Menu />
      <Banner />
      <div className="content">
        {/* formation */}
        {/* photos */}
        {/* liste d'expos et presse */}
      </div>
      <Devis />
      <Footer />
    </div>
  );
};

export default About;