import React, { useEffect, useState } from 'react';
import Vetheuil from '../assets/vetheuil.jpg';
import Port from '../assets/fenetre-chat.jpg';
import Palier from '../assets/palier.jpg';
import Plantes from '../assets/plantesvertes.jpg';
import Steir from '../assets/fresque-steir.jpg';

const Fresk = () => {

  return (
    <div className="content">
      <h2>Fresques et trompe-l’œil</h2>
      <div className="opus-img">
        <div className="part-top">
          <img src={Steir} alt="fresque d'une plage, peinte dans un salon" />
          <img src={Plantes} alt="panneau de faux bois percé par des grandes plantes qui poussent au travers" />
          <img src={Palier} alt="palier entièrement en trompe-l'œil avec des dunes sur les murs et les portes en cabines de plage" />
        </div>
        <div className="part-bottom">
          <img src={Port} alt="grand panneau représentant une fenêtre ouverte sur un port de pêche et un chat curieux" />
          <img src={Vetheuil} alt="fresque d'une église dans un bois, peinte dans une cage d'escalier" />
        </div>
      </div>
      <div className="how">
        <h2>Modalités</h2>
        <p>Offrez à votre logement la vue sur mer, le coin de nature ou le décor somptueux qu’il lui manquait :</p>
        <p>
          • une fenêtre sur votre paysage préféré<br />
          • un mur effondré laissant voir ce qu’il y a derrière<br />
          • des murs en pierre ou des boiseries plus vrais que nature<br />
          • des sanitaires en marbre<br />
          • ...
        </p>
        <h2 className="etapes">Étapes</h2>
        <p>Un premier appel pour parler de votre projet et fixer une date de visite des lieux ;</p>
        <p>Une visite sur place avec prise de photos et de cotes ;</p>
        <p>Un rendu de crayonné pour valider le projet ;</p>
        <p>Un second crayonné éventuel intégrant les modifications indiquées à la suite du premier ;</p>
        <p>Une fois les croquis validés définitivement, définition des dates du chantier ;</p>
      </div>
    </div>
  );
};

export default Fresk;