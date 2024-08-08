import React, { useEffect, useState } from 'react';

const Portrait = () => {

  return (
    <div className="content">
      <div className="content">
        <h2>Portraits personnalisés</h2>
        <div className="opus-img">
        </div>
        <div className="text-detail">
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
          <h2>Étapes</h2>
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