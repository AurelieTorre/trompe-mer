import s from "./style.module.css";

const Card = ({ imageSrc, altText, titre, medium, taille, dispo }) => {

  return (
    <div className={s.card}>
      <img src={imageSrc} alt={altText} className={s.imgCard} />
      <div className={s.cardInfos}>
        <h3>{titre}</h3>
        <p>{medium}</p>
        <p>{taille}</p>
        <p>{dispo}</p>
      </div>
    </div>
  );
};

export default Card;