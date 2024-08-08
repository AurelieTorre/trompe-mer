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
import cadres from "../assets/cadres.png";
import tete from "../assets/virginiethery.webp";


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
        <Slider images={imagesFresk} />
        {/* détail */}
        <button className="button" onClick={() => window.location.href = '/trompe-loeil'}>En savoir plus</button>
      </div>
      <div className="content">
        <h2>Portraits chinois</h2>
        <Slider images={imagesFaces} />
        {/* détail */}
        <button className="button" onClick={() => window.location.href = '/portraits'}>En savoir plus</button>
      </div>
      <div className="content">
        <h2>Mes autres œuvres</h2>
        <img src={cadres} alt="petits tableaux des œuvres" />
        <button className="button" onClick={() => window.location.href = '/oeuvres'}>En voir plus</button>
      </div>
      <div className="content">
        <h2>En savoir plus sur moi</h2>
        <img src={tete} alt="photographie de l'artiste" />
        <button className="button" onClick={() => window.location.href = '/lartiste'}>Voir mon parcours</button>
      </div>
    </div>
  );
};

export default Home;