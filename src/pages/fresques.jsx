import React, { useEffect, useState } from 'react';

const Fresk = () => {

  return (
    <div>
      <div className="content">
        <h2>Fresques et trompe-l’œil</h2>
        <div className="opus-img">
        </div>
        <div className="text-detail">
          <h2>Modalités</h2>
          <p>Offrez à votre logement la vue sur mer, le coin de nature ou le décor somptueux qu’il lui manquait :</p>
          <p>
            • une fenêtre sur votre paysage préféré<br />
            • un mur effondré laissant voir ce qu’il y a derrière<br />
            • des murs en pierre ou des boiseries plus vrais que nature<br />
            • des sanitaires en marbre<br />
            • ...
          </p>
          <h2>Étapes</h2>
          <p>Un premier appel pour parler de votre projet et fixer une date de visite des lieux ;</p>
          <p>Une visite sur place avec prise de photos et de cotes ;</p>
          <p>Un rendu de crayonné pour valider le projet ;</p>
          <p>Un second crayonné éventuel intégrant les modifications indiquées à la suite du premier ;</p>
          <p>Une fois les croquis validés définitivement, définition des dates du chantier ;</p>
        </div>
      </div>
    </div>
  );
};

export default Fresk;