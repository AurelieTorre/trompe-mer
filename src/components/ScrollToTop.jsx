import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // surveille les changement de route, donc de page
  const { pathname } = useLocation();

  useEffect(() => {
    // positionne en haut de la nouvelle page
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;