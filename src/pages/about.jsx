import React, { useEffect, useState } from 'react';

const About = () => {

  return (
    <div className="content">
      <div className="text-detail">
        <h2>Études et formation</h2>
        <p>Ecole Nationale d’Art de Cergy Pontoise 1981 - 1986  :</p>
        <p>Initiée à beaucoup de techniques différentes, de  la photographie à l’illustration en passant par la typographie et l’aquarelle</p>
        <p>INFA de Gouvieux Chantilly :</p>
        <p>Spécialisée dans la peinture à l’huile et l’acrylique lors d’une formation professionnelle de peintre en décor, où j’ai découvert les fausses-matières – faux-bois, faux-marbres, fausses pierres, etc. – et les trompe-l’œil</p>
        <p>Stage avec Claude Roederer :</p>
        <p>Restauration de décor d’hôtel particulier en conditions très exigeantes</p>
      </div>
      <h2>Découvrez l’atelier</h2>
      <div className="opus-img"></div>
      <h2>Les expositions auxquelles j’ai participé</h2>
      <div className="text-detail">
        <h2>Expositions groupées</h2>
        <p>Novembre 1987 : Restaurant “Les Tribunes” à Garches (92)</p>
        <p>Mars 1988 : Salon de thé “Caramelle” à Paris</p>
        <p>Février 1989 : “Espace marine” à Concarneau (29)</p>
        <p>Étés 1989 à 1991 : Avec les “Peintres de Plouescat” (29)</p>
        <p>Septembre 1989 : Regroupement de peintres à Angers</p>
        <p>Juin 1990 : “Grand prix de peinture” à Bénodet (29)</p>
        <p>Novembre 1990 : Galerie “les Roches d’Erigne” à Murs-Erigne (49)</p>
        <p>Juillet 1991 : Salle municipale de Plogastel-Saint-Germain (29)</p>
        <p>Juillet 1992 : “Marché de l’Art” de Loctudy (29)</p>
        <p>Septembre 1995 : “Grand lavoir du Graal” à Paris</p>
        <p>Février 1996 et 97 : Salon des Artistes de Saint-Cloud (92)</p>
        <p>Octobre 1997 : Centre Culturel “Le Colombier” à Ville-d’Avray (92)</p>
        <p>Mai 1998 : avec “Arts Guil”  à l’Abri du Marin du Guilvinec (29)</p>
        <p>Mars 1999 : Galerie F. Delaporte à Ville-d’Avray (92)</p>
        <p>14 - 19 mai 2001 : Exposition d’objets et de tableaux avec une peintre sur soie, au Centre Loisirs et Culture du Guilvinec</p>
        <p>26 mai 2001 : Exposition-rencontre avec d’autres artistes et des musiciens à Mahalon (29) avec l’association Gwenharz</p>
        <p>2001 : Quelques aquarelles en exposition à la galerie Philippe Danty, 35 rue de Richelieu à Paris</p>
        <p>14 - 24 juin 2002 : Salon des Indépendants, ancienne gare d’Auteuil à Paris</p>
        <p>1 - 7 septembre 2002 : Exposition au “Sémaphore” de Lesconil (29)</p>
        <p>21 décembre 2002 : Exposition au Triskell de Pont-l’Abbé (29)</p>
        <p>17 - 18 mai et 6 - 8 décembre 2003, 29 - 30 mai 2004 : Exposition aux Halles Raphalen à Plonéour-Lanvern (29)</p>
        <p>7 - 15 juillet 2003 : Exposition au “Sémaphore” de Lesconil (29)</p>
        <p>Juillet - août 2004 : Avec l’association “Brut de Pinsé” à Plouarzel et à Molène (29)</p>
        <p>10 - 15 juillet 2004 : Avec l’association “Brut de Pinsé” sur le site de Brest 2004, au centre auto de la Marine et au Fourneau de Brest</p>
        <p>D’août à novembre 2006 : Au “Dourdy” à Loctudy</p>
        <p>29 juillet - 4 août 2007 :  Avec l’association “Déchaine ton cœur” au Sémaphore de Lesconil, exposition suivie d’une vente aux enchères à l’Orangerie de Lanniron à Quimper (29)</p>
        <p>13 - 19 août 2007 : À la chapelle de Kerbader à Fouesnant (29)</p>
        <p>1 - 6 Novembre 2007 : Exposition “Résonance” au Domaine de la Forêt (“L’Atelier”, CEAPC) à Loctudy</p>
        <p>7 - 30 Novembre 2007 : À la “Galerie Rouge” à Pont-l’Abbé</p>
        <p>2 - 29 Février 2008, 28 avril - 2 juin 2009 : Exposition “Les Imaginaires” dans la ville de Briec (29)</p>
        <p>4 - 12 avril 2009 : Invitée d’honneur au salon Arts et Peintures de Pluguffan</p>
        <p>1 - 13 août 2009 : Salon de Plomodiern dans le cadre du Festival du Menez-Hom (29)</p>
        <p>3 - 4 octobre 2009 : Opération “Portes ouvertes d’Ateliers d’artistes”, à l’atelier d’Yveline Méhat à Kerity-Penmarc’h (29)</p>
        <p>Fin décembre - début janvier, de 2007 à 2011 : Exposition de groupe au château de Pont-L’Abbé</p>
        <p>Août 2010 : Exposition Galerie 7 à Douarnenez (29), avec Béatrice Giffo et Pascal Théry</p>
        <p>Juillet - août, de 1997 à 2013 : avec “Arts Guil” à la Halle de la Mer au Guilvinec (sauf juillet 2013)</p>
      </div>
      <div className="text-detail">
        <h2>Expositions en solo</h2>
        <p>Février 1988 : Centre Culturel de Vauréal (95)</p>
        <p>Étés 1992 et 1993 : Restaurant “le mille-pâtes” à Tréguennec (29)</p>
        <p>Octobre 1995 : Centre Loisirs et Culture du Guilvinec (29)</p>
        <p>Juillet 1996 : Manoir de Kérazan à Loctudy (29)</p>
        <p>Avril 1998 : Centre Loisirs Culture du Guilvinec</p>
        <p>Mai à Septembre 1998 : Restaurant “le Chandelier” au Guilvinec</p>
        <p>Octobre 1999 : Aux différents comités d’entreprise de l’ONERA, à Chatillon (92), Palaiseau (91), Meudon (92)</p>
        <p>Juillet - août 2002 : Exposition à Dam’zad, salon de thé rue Jean Baudry au Guilvinec</p>
        <p>Septembre 2002 - avril 2003 : Exposition au salon de thé “Dam’zad” du Guilvinec</p>
        <p>1 - 31 juillet 2005 : Exposition à la “Tarte Bigoudène” à Lesconil (29)</p>
        <p>Octobre 2005 : Exposition à la médiathèque “Abri du Marin” au Guilvinec</p>
        <p>15 - 30  juin 2006, 15 - 29 juillet 2007 : Exposition à la “Tarte Bigoudène” à Lesconil</p>
        <p>18 novembre 2008 - 4 janvier 2009 : Rétrospective à la l’Abri du Marin au Guilvinec</p>
        <p>Été 2009 : Exposition d’aquarelles au parc animalier de la Pommeraie à Peumerit (29)</p>
        <p>Décembre 2009 : Rétrospective à l’Abri du Marin au Guilvinec</p>
        <p>De mars à juin 2011 : Exposition au “Temple du Pharaon” à Brest (29)</p>
        <p>Mai 2011 : Exposition au Centre Médico-Psycho-Pédagogique de Brest</p>
        <p>Septembre 2011 : Exposition à la librairie-café “La Joie de lire” à Saint-Guénolé (29)</p>
        <p>1 - 30 avril 2013 : Exposition à la librairie-café “La Joie de lire” à Saint-Guénolé</p>
        <div className="presse"></div>
      </div>
    </div>
  );
};

export default About;