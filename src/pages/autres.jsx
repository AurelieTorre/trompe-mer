import React, { useEffect, useState } from 'react';
import Menu from '../components/menu/menu.jsx';
import Banner from '../components/banner/banner.jsx';
import Card from '../components/card/card.jsx';
import Devis from '../components/contact/contact.jsx';
import Footer from '../components/footer/footer.jsx';

const Other = () => {

  return (
    <div>
      <Menu />
      <Banner />
      <div className="slider-card">
        {/* titre */}
        <Card />
        <Card />
        <Card />
      </div>
      <div className="slider-card">
        {/* titre */}
        <Card />
        <Card />
        <Card />
      </div>
      <div className="slider-card">
        {/* titre */}
        <Card />
        <Card />
        <Card />
      </div>
      <div className="slider-card">
        {/* titre */}
        <Card />
        <Card />
        <Card />
      </div>
      <div className="slider-card">
        {/* titre */}
        <Card />
        <Card />
        <Card />
      </div>
      <div className="slider-card">
        {/* titre */}
        <Card />
        <Card />
        <Card />
      </div>
      <div className="slider-card">
        {/* titre */}
        <Card />
        <Card />
        <Card />
      </div>
      <div className="slider-card">
        {/* titre */}
        <Card />
        <Card />
        <Card />
      </div>
      <div className="slider-card">
        {/* titre */}
        <Card />
        <Card />
        <Card />
      </div>
      <div className="slider-card">
        {/* titre */}
        <Card />
        <Card />
        <Card />
      </div>
      <div className="slider-card">
        {/* titre */}
        <Card />
        <Card />
        <Card />
      </div>
      <Devis />
      <Footer />
    </div>
  );
};

export default Other;