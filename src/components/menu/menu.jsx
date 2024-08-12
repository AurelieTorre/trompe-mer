import React, { useState } from 'react';
import s from "./style.module.css";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo-vague.jpg';

const Menu = ({ onDevisClick }) => {

  // Vérifie sur quelle page on est
  const location = useLocation();
  // N'affiche pas le devis si on est sur les mentions légales
  const showDevisLink = location.pathname !== '/mentions';

  // Pour gérer le clic
  const [activeItem, setActiveItem] = useState('');
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className={s.navbar}>
      <Link to="/"><img src={logo} alt="Logo" id={s.vague} /></Link>
      <Link to="/trompe-loeil">
        <span
          className={`${s.item} ${activeItem === 'trompe-loeil' ? s.active : ''}`}
          onClick={() => handleItemClick('trompe-loeil')}
        >
          Peinture en décor
        </span>
      </Link>
      <Link to="/portraits"><span className={s.item}>Portraits chinois</span></Link>
      <Link to="/oeuvres"><span className={s.item}>Autres œuvres</span></Link>
      <Link to="/lartiste"><span className={s.item}>À propos</span></Link>
      {showDevisLink && <a href="#" onClick={(e) => { e.preventDefault(); onDevisClick(); }}><span className={s.item}>Devis</span></a>}
    </div>
  );
};

export default Menu;