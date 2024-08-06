import React, { useState, useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Banner from './components/banner/Banner';
import Devis from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App = () => {
  const location = useLocation();
  // Je ne veux pas que le devis s'affiche sur la dernière page
  const showDevisForm = location.pathname !== '/mentions';
  // Pour commencer le devis est replié
  const [isFormVisible, setIsFormVisible] = useState(false);
  // Ça servira à se placer au niveau du formulaire quand il s'ouvre
  const formRef = useRef(null);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const scrollToForm = () => {
    setIsFormVisible(true);
    // Assure que le formulaire est affiché avant de s'y rendre
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    // Permet d'aller au formulaire depuis le menu même s'il est déjà déplié
    if (isFormVisible && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isFormVisible]);

  return (
    <div className="App">
      <header>
        <Menu onDevisClick={scrollToForm} />
        <Banner />
      </header>
      <main>
        <Outlet />
      </main>
      {showDevisForm && (
        <div ref={formRef} className='devis'>
          <h2 onClick={toggleFormVisibility} style={{ cursor: 'pointer' }}>
            Demandez un devis ou posez-moi une question{' '}
            {/* Change le sens de la flèche selon que le devis est rangé ou déroulé */}
            <FontAwesomeIcon icon={isFormVisible ? faChevronUp : faChevronDown} />
          </h2>
          {/* Affichage du formulaire */}
          {isFormVisible && <Devis />}
        </div>
      )}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;