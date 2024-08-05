import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/homepage.jsx';
import Fresk from './pages/fresques.jsx';
import Portrait from './pages/portraits.jsx';
import Other from './pages/autres.jsx';
import About from './pages/about.jsx';
import Legal from './pages/legal.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/" element={<Home />} />
          <Route path="/trompe-loeil" element={<Fresk />} />
          <Route path="/portraits" element={<Portrait />} />
          <Route path="/oeuvres" element={<Other />} />
          <Route path="/lartiste" element={<About />} />
          <Route path="/mentions" element={<Legal />} />
        </ Route >
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
