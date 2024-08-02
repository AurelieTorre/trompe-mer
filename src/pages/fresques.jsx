import React, { useEffect, useState } from 'react';
import Menu from '../components/menu/menu.jsx';
import Banner from '../components/banner/banner.jsx';
import Devis from '../components/contact/contact.jsx';
import Footer from '../components/footer/footer.jsx';

const Fresk = () => {

  return (
    <div>
      <Menu />
      <Banner />
      <div className="content">
        {/* titre */}
        {/* photos */}
        {/* modalités */}
      </div>
      <Devis />
      <Footer />
    </div>
  );
};

export default Fresk;