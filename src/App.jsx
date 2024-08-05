import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Menu from './components/menu/menu';
import Banner from './components/banner/banner';
import Devis from './components/contact/contact';
import Footer from './components/footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App = () => {
  const location = useLocation();
  // Je ne veux pas qu'il s'affiche sur la dernière page
  const showDevisForm = location.pathname !== '/mentions';
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="App">
      <Menu />
      <Banner />
      <Outlet />
      {showDevisForm && (
        <div>
          <h2 onClick={toggleFormVisibility} style={{ cursor: 'pointer' }}>
            Demandez un devis ou posez-moi une question{' '}
            <FontAwesomeIcon icon={isFormVisible ? faChevronUp : faChevronDown} />
          </h2>
          {isFormVisible && <Devis />}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;