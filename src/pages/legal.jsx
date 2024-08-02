import React, { useEffect, useState } from 'react';
import Menu from '../components/menu/menu.jsx';
import Banner from '../components/banner/banner.jsx';
import Devis from '../components/contact/contact.jsx';
import Footer from '../components/footer/footer.jsx';

const Legal = () => {

  return (
    <div>
      <Menu />
      <Banner />
      <div className="content">
        {/* mentions légales */}
      </div>
      <Devis />
      <Footer />
    </div>
  );
};

export default Legal;