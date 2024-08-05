import React from 'react';
import s from "./style.module.css";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo-vague.jpg';

const Menu = ({ onDevisClick }) => {

  // Vérifie sur quelle page on est
  const location = useLocation();
  // N'affiche pas le devis si on est sur les mentions légales
  const showDevisLink = location.pathname !== '/mentions';

  return (
    <div className={s.navbar}>
      <Link to="/"><img src={logo} alt="Logo" id={s.vague} /></Link>
      <Link to="/trompe-loeil">Peinture en décor</Link>
      <Link to="/portraits">Portraits chinois</Link>
      <Link to="/oeuvres">Autres œuvres</Link>
      <Link to="/lartiste">À propos</Link>
      {showDevisLink && <a href="#" onClick={(e) => { e.preventDefault(); onDevisClick(); }}>Devis</a>}
    </div>
  );
};

export default Menu;