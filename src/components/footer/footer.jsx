import s from "./style.module.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo-over-blog.png';

const Footer = () => {

  return (
    <div className={s.footer}>
      <p className={s.large}>
        <Link to="/mentions">Mentions légales</Link>| Réseaux sociaux : <a href="https://www.facebook.com/vidateliervirginie" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://virginietorre.over-blog.com" target="_blank"><img src={logo} alt="Over-blog" id={s.ob} /></a>
      </p>
      <div className={s.small}>
        <Link to="/mentions">Mentions légales</Link>
        <p>
          Réseaux sociaux : <a href="https://www.facebook.com/vidateliervirginie" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://virginietorre.over-blog.com" target="_blank"><img src={logo} alt="Over-blog" id={s.ob} /></a>
        </p>
      </div>
    </div>
  );
};

export default Footer;