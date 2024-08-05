import React from 'react';
import s from "./style.module.css";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-vague.jpg';

const Menu = ({ onDevisClick }) => {
  return (
    <div className={s.navbar}>
      <Link to="/"><img src={logo} alt="Logo" id={s.vague} /></Link>
      <Link to="/trompe-loeil">Peinture en décor</Link>
      <Link to="/portraits">Portraits chinois</Link>
      <Link to="/oeuvres">Autres œuvres</Link>
      <Link to="/lartiste">À propos</Link>
      <a href="#" onClick={onDevisClick}>Devis</a>
    </div >
  );
};

export default Menu;