import Slider from '../components/carrousel/Carrousel.jsx';
import cabane from "../assets/cabane-soizen.webp";
import zip from "../assets/fermeture.webp";
import feu from "../assets/feu.webp";
import glycine from "../assets/hanvec.webp";
import plage from "../assets/plage-steir.webp";
import trou from "../assets/trou.webp";
import veranda from "../assets/veranda.webp";
import alain from "../assets/alainhergott.webp";
import botton from "../assets/botton.webp";
import chabaud from "../assets/cathchab.webp";
import jc from "../assets/jclecloarec.webp";
import cadres from "../assets/cadres.webp";
import tete from "../assets/virginiethery.webp";


const imagesFresk = [
  cabane,
  zip,
  feu,
  glycine,
  plage,
  trou,
  veranda
];

const imagesFaces = [
  alain,
  botton,
  chabaud,
  jc
]

const Home = () => {

  return (
    <div>
      <div className="content">
        <h2>Trompe l’œil en fresques</h2>
        <Slider images={imagesFresk} />
        <div className="text-detail">
          <h2>Donnez une autre dimension à votre habitation</h2>
          <p>Vous souhaitez mettre en valeur votre patrimoine ? Le sublimer, le restaurer ?<br />Avoir un décor qui vous ressemble ?</p>
          <p>Peintre en décors spécialisée dans les techniques de trompe-l’œil, je mets mon savoir-faire à votre service. Un mur aveugle qui aurait dû donner sur la mer ? Ouvrez une fenêtre virtuelle sur la vue que vous n’aviez pas, ou sur un ailleurs qui vous fait rêver...</p>
        </div>
        <button className="button" onClick={() => window.location.href = '/trompe-loeil'}>En savoir plus</button>
      </div>
      <div className="content">
        <h2>Portraits chinois</h2>
        <Slider images={imagesFaces} />
        <div className="text-detail">
          <h2>Occasions festives</h2>
          <p>Anniversaire important, mariage, départ... offrez un portrait qui lui ressemble spirituellement à la personne du jour. Contactez-moi pour en discuter.</p>
        </div>
        <button className="button" onClick={() => window.location.href = '/portraits'}>En savoir plus</button>
      </div>
      <div className="info-container">
        <div className="info-content">
          <h2>Mes autres œuvres</h2>
          <img id="frames" src={cadres} alt="petits tableaux des œuvres" />
          <button className="button" onClick={() => window.location.href = '/oeuvres'}>En voir plus</button>
        </div>
        <div className="info-content">
          <h2>En savoir plus sur moi</h2>
          <img id="face" src={tete} alt="photographie de l'artiste" />
          <button className="button" onClick={() => window.location.href = '/lartiste'}>Voir mon parcours</button>
        </div>
      </div>
    </div>
  );
};

export default Home;