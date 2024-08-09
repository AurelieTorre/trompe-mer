import React, { useEffect, useState } from 'react';
import Card from '../components/card/Card.jsx';
import Milliers from '../assets/desmilliers.jpg';
import Ecume from '../assets/ecume.jpg';
import Houle from '../assets/houle.jpg';
import Algue from '../assets/algue.jpg';
import Oursin from '../assets/oursin.jpg';
import Lapis from '../assets/lapis.jpg';
import Cassepied from '../assets/cassepied.jpg';
import Nageuse from '../assets/nageuse.jpg';
import Plongeur from '../assets/plongeur.jpg';
import Barque from '../assets/barque.jpg';
import Main from '../assets/main.jpg';
import Abri from '../assets/abri.jpg';
import Bleue from '../assets/bleue.jpg';
import Rouge from '../assets/rouge.jpg';
import Inclusions from '../assets/inclusions.jpg';
import Trop from '../assets/trop.jpg';
import Serpent from '../assets/serpent.jpg';
import Vague from '../assets/vague-korrigans.jpg';
import Big from '../assets/grand-arbre.jpg';
import Tortueux from '../assets/tortueux.jpg';
import Solar from '../assets/arbre-oiseaux.jpg';
import Parasol from '../assets/parasol.jpg';
import Balustre from '../assets/balustre.jpg';
import Gargouille from '../assets/gargouille.jpg';
import Cailloux1 from '../assets/cailloux1.jpg';
import Cailloux2 from '../assets/cailloux2.jpg';
import Cailloux3 from '../assets/cailloux3.jpg';
import Sage from '../assets/sage.jpg';
import Vue from '../assets/vue.jpg';
import Pile from '../assets/pile.jpg';
import Contrebasse from '../assets/contrebasse.jpg';
import Piano from '../assets/piano.jpg';
import Chat from '../assets/chat.jpg';

const Other = () => {

  return (
    <div>
      <div className="slider-card">
        <h2>Vagues</h2>
        <div className="card-container">
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d’eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Ecume} altText="aquarelle de vagues qui bouillonnent" titre="Ecumes" medium="Aquarelle" taille="30 x 40 cm" dispo="disponible" prix="250€" />
          <Card imageSrc={Houle} altText="gouache d'une mer agitée la nuit" titre="Houle nocturne" medium="Gouache" taille="14 x 18 cm" dispo="indisponible" prix="collection privée" />
        </div>
      </div>
      <div className="slider-card">
        <h2>Laisse de mer</h2>
        <div className="card-container">
          <Card imageSrc={Algue} altText="nature morte de galets avec une algue noire séchée" titre="Composition avec algue" medium="Aquarelle" taille="24 x 30 cm" dispo="indisponible" prix="collection privée" />
          <Card imageSrc={Oursin} altText="dessin d'un squelette blanc d'oursin" titre="Oursin" medium="Aquarelle" taille="11 x 11 cm" dispo="disponible" prix="25€" />
          <Card imageSrc={Lapis} altText="nature morte d'éléments ramassés sur une plage, sur fond de lapis-lazuli" titre="Composition marine" medium="Huile sur bois" taille="30 x 55 cm" dispo="indisponible" prix="collection privée" />
        </div>
      </div>
      <div className="slider-card">
        <h2>Baignades</h2>
        <div className="card-container">
          <Card imageSrc={Cassepied} altText="peinture de groupes de femmes dans l'eau" titre="Les Casse-pieds" medium="Acrylique sur bois" taille=" " dispo=" " prix=" " />
          <Card imageSrc={Nageuse} altText="peinture d'une femme se baignant dans l'eau" titre="La Nageuse" medium="Acrylique sur bois" taille=" " dispo=" " prix=" " />
          <Card imageSrc={Plongeur} altText="peinture d'un plongeur vu depuis le fond de l'eau" titre="Plongeur" medium="Huile sur toile" taille=" " dispo=" " prix=" " />
        </div>
      </div>
      <div className="slider-card">
        <h2>Dans la tempête</h2>
        <div className="card-container">
          <Card imageSrc={Barque} altText="barque de sauvetage ancienne sur une grosse vague" titre="Ça va passer" medium="Aquarelle" taille="24 x 30 cm" dispo="disponible" prix="200€" />
          <Card imageSrc={Main} altText="main qui sort de l'eau comme si la personne était en train de boire la tasse" titre="S.O.S." medium="Aquarelle" taille="24 x 30 cm" dispo="indisponible" prix="Collection privée" />
          <Card imageSrc={Abri} altText="peinture d'un abri du marin dans la brume" titre="L’Abri dans la brume" medium="Huile sur agloméré" taille=" " dispo=" " prix=" " />
        </div>
      </div>
      <div className="slider-card">
        <h2>Matières</h2>
        <div className="card-container">
          <Card imageSrc={Bleue} altText="peinture d'une roche bleue très fissurée" titre="Brèche bleue" medium="Huile sur toile" taille="36 x 48 cm" dispo="disponible" prix="400€" />
          <Card imageSrc={Rouge} altText="trois petits cailloux sur fond de roche rouge" titre="Trio de feu" medium="Huile sur peinture sur soie marouflée" taille=" " dispo="indisponible" prix="Collection privée" />
          <Card imageSrc={Inclusions} altText="peinture d'une roche grise truffée d'inclusions de pierres rougeâtres" titre="Minéral rouge" medium="Huile sur bois" taille="17,5 x 14,5 cm" dispo="indisponible" prix="Collection privée" />
        </div>
      </div>
      <div className="slider-card">
        <h2>Korrigans</h2>
        <div className="card-container">
          <Card imageSrc={Trop} altText="dessin d'une multitude de visages simplistes de tons beiges" titre="Saint-Trop’" medium="Aquarelle" taille="14,5 x 9,5 cm" dispo="disponible" prix="25€" />
          <Card imageSrc={Serpent} altText="peinture d'une multitude de visages simplistes de tons multicolores" titre="Surveillance" medium="Huile sur carton toilé" taille=" " dispo="indisponible" prix="Collection privée" />
          <Card imageSrc={Vague} altText="peinture d'une multitude de visages simplistes en surimpression d'une vague en rouleau" titre="Vague ressemblance" medium="Acrylique sur carton" taille="23,5 cm" dispo="disponible" prix="300€" />
        </div>
      </div>
      <div className="slider-card">
        <h2>Arbres</h2>
        <div className="card-container">
          <Card imageSrc={Big} altText="peinture d'un tronc d'arbre sans feuillage" titre="Grand arbre" medium=" " taille=" " dispo=" " prix=" " />
          <Card imageSrc={Tortueux} altText="représentation d'un arbre de type saule tortueux" titre="Abre tortueux" medium=" " taille=" " dispo=" " prix=" " />
          <Card imageSrc={Solar} altText="peinture d'un arbre avec beaucoup de branches, impression de solarisation des couleurs" titre="Arbre aux oiseaux" medium=" " taille=" " dispo=" " prix=" " />
        </div>
      </div>
      <div className="slider-card">
        <h2>Fenêtres et niches</h2>
        <div className="card-container">
          <Card imageSrc={Parasol} altText="trompe-l'oeil d'une fenêtre à volets de fer donnant sur une terrasse avec un parasol rouge et la mer au fond" titre="Le Parasol" medium="Huile sur bois" taille="27,5 x 27,5 cm" dispo="indisponible" prix="collection privée" />
          <Card imageSrc={Balustre} altText="trompe-l'oeil d'une ouverture donnant sur une terrasse à balustrade avec la mer au fond" titre="La Terrasse" medium="Huile sur bois" taille="70 x 77 cm" dispo="disponible" prix="1200€" />
          <Card imageSrc={Gargouille} altText="trompe-l'oeil d'une sorte de gargouille dans une niche de pierre" titre="Statuette" medium="Huile sur bois" taille="60 x 50 cm" dispo="indisponible" prix="collection privée" />
        </div>
      </div>
      <div className="slider-card">
        <h2>Cailloux visages</h2>
        <div className="card-container">
          <Card imageSrc={Cailloux1} altText="cailloux sur lesquels ont été ajoutés des yeux et des bouches" titre="Série de cailloux avec visage" medium="Huile sur caillou" taille=" " dispo=" " prix=" " />
          <Card imageSrc={Cailloux2} altText="cailloux sur lesquels ont été ajoutés des yeux et des bouches" titre="Série de cailloux avec visage" medium="Huile sur caillou" taille=" " dispo=" " prix=" " />
          <Card imageSrc={Cailloux3} altText="cailloux sur lesquels ont été ajoutés des yeux et des bouches" titre="Série de cailloux avec visage" medium="Huile sur caillou" taille=" " dispo=" " prix=" " />
        </div>
      </div>
      <div className="slider-card">
        <h2>Pinsés</h2>
        <div className="card-container">
          <Card imageSrc={Sage} altText="débris de plage dans les tons rouges agencés pour former une silhouette" titre="La Danse du vieux sage" medium="bois, coquillage, maerl, céramique, métal" taille="29 x 37 cm" dispo="indisponible" prix="Collection privée" />
          <Card imageSrc={Vue} altText="petits débris de peinture agencés pour former un voilier" titre="Terre en vue" medium="Eclats de carrénage" taille="15 x 15 cm encadré" dispo="indisponible" prix="Collection privée" />
          <Card imageSrc={Pile} altText="empilement de fragments de bois et de caillou dans un cadre" titre="Composition bleu et ocre" medium="bois et caillou" taille=" " dispo="" prix="" />
        </div>
      </div>
      <div className="slider-card">
        <h2>Illustrations</h2>
        <div className="card-container">
          <Card imageSrc={Contrebasse} altText="dessin d'une contrebasse dotée de bras et de jambes" titre="Quelqu’un pour applaudir" medium="Crayon de couleur" taille="24 x 32 cm" dispo="indisponible" prix="Collection privée" />
          <Card imageSrc={Piano} altText="dessin d'une multitude d'animaux chantant devant un clavier de piano infini" titre="Extrait de conte musical" medium="Crayon de couleur" taille="32 x 24 cm" dispo="indisponible" prix="Collection privée" />
          <Card imageSrc={Chat} altText="dessin d'un oeil de chat en gros plan où se reflète un chat regardant la lune" titre="Dans l’œil du chat" medium="Crayon de couleur" taille=" " dispo=" " prix=" " />
        </div>
      </div>
    </div>
  );
};

export default Other;