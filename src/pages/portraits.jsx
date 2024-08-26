import React, { useEffect, useState } from 'react';
import alain from "../assets/alainhergott.jpg";
import botton from "../assets/botton.jpg";
import chabaud from "../assets/cathchab.jpg";
import jc from "../assets/jclecloarec.jpg";


const Portrait = () => {

  return (
    <div className="content">
      <div className="content">
        <h2>Portraits personnalisés</h2>
        <div className="opus-grid">
          <div className="opus-part">
            <img src={chabaud} id="chabaud" alt="ouverture sur une mer agîtée avec sur le rebord un pot de tournesol et une flûte traversière" />
            <img src={alain} id="alain" alt="ouverture sur une lande avec chapelle, entourée d'équipements de sports d'aventure" />
          </div>
          <div className="opus-part">
            <img src={botton} id="botton" alt="niche remplie de livres ainsi que d'une guitare et d'un petit avion" />
            <img src={jc} id="jc" alt="fenêtre ouverte sur un port la nuit avec son phare, et sur le rebord des jumelles, une mésange, des cartes" />
          </div>
        </div>
        <div className="how">
          <h2>Modalités</h2>
          <p>Offrez un portrait qui lui ressemble spirituellement à la personne du jour :</p>
          <p>
            • une fenêtre sur son paysage préféré<br />
            • des éléments d’équipements de ses pratiques sportives<br />
            • des instruments de musique qu’elle aime ou qu’elle joue<br />
            • des plantes et animaux qu’elle affectionne<br />
            • son œuvre d’art ou photo favorite<br />
            • son plat préféré<br />
            • des livres qu’elle aime<br />
            • ...
          </p>
          <h2 className="etapes">Étapes</h2>
          <p>Un premier appel pour parler de la personne et fixer des dates ;</p>
          <p>Un rendu de crayonné pour valider le projet ;</p>
          <p>Un second crayonné éventuel intégrant les modifications indiquées à la suite du premier ;</p>
          <p>Et finalement la remise du tableau avant la date de la fête.</p>
        </div>
      </div>
    </div>
  );
};

export default Portrait;