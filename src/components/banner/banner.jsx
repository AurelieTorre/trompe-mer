import React, { useEffect, useState } from 'react';
import s from "./style.module.css";
import vague from "../../assets/bout-vague.jpg";

const Banner = () => {

  const [tideTime, setTideTime] = useState('');
  const [tideType, setTideType] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTideData = async () => {
      try {
        const apiKey = process.env.REACT_APP_TIDE_API_KEY; // Utiliser la clé d'API depuis .env
        const response = await fetch(`https://www.worldtides.info/api/v3?extremes&lat=47.7986100&lon=-4.2811100&key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données de marée');
        }

        const data = await response.json();
        console.log(data); // Afficher les données pour vérifier la structure

        // Trouver la prochaine marée
        const currentTime = new Date().getTime() / 1000; // Temps actuel en secondes depuis l'epoch (= 1er janvier 1970)
        const nextTide = data.extremes.find(tide => tide.dt > currentTime);

        if (nextTide) {
          setTideTime(nextTide.dt);
          setTideType(nextTide.type);
        } else {
          console.error('Aucune marée future trouvée');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTideData();
  }, []);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convertir le timestamp en millisecondes
    const formatter = new Intl.DateTimeFormat('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/Paris',
      hour12: false // Format 24 heures
    });

    // Formater l'heure et les minutes
    const [hours, minutes] = formatter.format(date).split(':');
    return `${hours}h${minutes}`; // Remplacer les deux-points par un "h"
  };

  return (
    <div className={s.hero} style={{ backgroundImage: `url(${vague})` }}>
      <div className={s.title}>
        <h1>Virginie Théry est une Artiste peintre – Trompe l’œil</h1>
      </div>
      <div className={s.tide}>
        <p>Prochaine marée :</p>
        <div className={s.hour}>
          {loading ? 'Chargement...' : tideTime ? (
            <>
              {tideType === 'High' ? '↑' : '↓'} {formatTime(tideTime)}
            </>
          ) : 'Aucune donnée disponible'}
        </div>
      </div>
    </div>
  );
};

export default Banner;