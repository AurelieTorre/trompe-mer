import React, { useEffect, useState } from 'react';
import Card from '../components/card/Card.jsx';
import Milliers from '../assets/desmilliers.jpg';

const Other = () => {

  return (
    <div>
      <div className="slider-card">
        <h2>Vagues</h2>
        <div className="card-container">
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
        </div>
      </div>
      <div className="slider-card">
        <h2>Laisse de mer</h2>
        <div className="card-container">
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
        </div>
      </div>
      <div className="slider-card">
        <h2>Baignades</h2>
        <div className="card-container">
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
        </div>
      </div>
      <div className="slider-card">
        <h2>Dans la tempête</h2>
        <div className="card-container">
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
        </div>
      </div>
      <div className="slider-card">
        <h2>Matières</h2>
        <div className="card-container">
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
        </div>
      </div>
      <div className="slider-card">
        <h2>Korrigans</h2>
        <div className="card-container">
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
        </div>
      </div>
      <div className="slider-card">
        <h2>Arbres</h2>
        <div className="card-container">
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
        </div>
      </div>
      <div className="slider-card">
        <h2>Fenêtres et niches</h2>
        <div className="card-container">
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
        </div>
      </div>
      <div className="slider-card">
        <h2>Cailloux visages</h2>
        <div className="card-container">
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
        </div>
      </div>
      <div className="slider-card">
        <h2>Pinsés</h2>
        <div className="card-container">
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
        </div>
      </div>
      <div className="slider-card">
        <h2>Illustrations</h2>
        <div className="card-container">
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
          <Card imageSrc={Milliers} altText="dessin d'une vague qui éclate sur un rocher" titre="Des Milliers de petites gouttes d'eau" medium="Pastel sur papier" taille="65 x 50 cm" dispo="disponible" prix="350€" />
        </div>
      </div>
    </div>
  );
};

export default Other;