import React, { useEffect, useState } from 'react';
import Slider from '../components/carrousel/Carrousel.jsx';
import cabane from "../assets/cabane-soizen.jpg";
import zip from "../assets/fermeture.jpg";
import feu from "../assets/feu.jpg";
import glycine from "../assets/hanvec.jpg";
import plage from "../assets/plage-steir.jpg";
import trou from "../assets/trou.jpg";
import veranda from "../assets/veranda.jpg";
import alain from "../assets/alainhergott.jpg";
import botton from "../assets/botton.jpg";
import chabaud from "../assets/cathchab.jpg";
import jc from "../assets/jclecloarec.jpg";


const imagesFresk = [
  cabane,
  zip,
  feu,
  glycine,
  plage,
  trou,
  veranda
];

const imagesFaces = [
  alain,
  botton,
  chabaud,
  jc
]

const Home = () => {

  return (
    <div>
      <div className="content">
        <h2>Trompe l’œil en fresques</h2>
        {/* section trompe-l'œil */}
        <Slider images={imagesFresk} />
        {/* détail */}
        {/* bouton */}
      </div>
      <div className="content">
        <h2>Portraits chinois</h2>
        <Slider images={imagesFaces} />
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