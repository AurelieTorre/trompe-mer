import React, { useState } from 'react';
import s from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Slider = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };


  return (
    <div className={s.carrousel}>
      <button className={`${s.arrow} ${s.left}`} onClick={prevImage}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className={s.imageContainer}>
        <img src={images[currentIndex]} alt="Carrousel" className={s.image} />
      </div>
      <button className={`${s.arrow} ${s.right}`} onClick={nextImage}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Slider;