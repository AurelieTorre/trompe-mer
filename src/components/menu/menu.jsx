import s from "./style.module.css";
import { Link } from 'react-router-dom';

const Menu = ({ onDevisClick }) => {
  return (
    <div className="navbar">
      <img src="./assets/logo-vague.jpg" alt="Logo" />
      <Link to="/fresques">Peinture en décor</Link>
      <Link to="/portraits">Portraits chinois</Link>
      <Link to="/autres">Autres œuvres</Link>
      <Link to="/about">À propos</Link>
      <a href="#" onClick={onDevisClick}>Devis</a>
    </div>
  );
};

export default Menu;