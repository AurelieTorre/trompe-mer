import s from "./style.module.css";
import { useState } from 'react';

const Devis = () => {

  const [formData, setFormData] = useState({
    lastname: '',
    firstname: '',
    email: '',
    phone: '',
    object: '',
    message: '',
    file: null,
    fileName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFormData({
        ...formData,
        file: e.target.files[0],
        fileName: e.target.files[0].name,
      });
    } else {
      // pour que les gens ne soient pas obligés de joindre un fichier
      setFormData({
        ...formData,
        file: null,
        fileName: '',
      });
    }
  };

  const handleFileClick = () => {
    document.getElementById('file').click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log('Formulaire envoyé : ', formData);
  };

  return (
    <div className={s.devis} id="devis">
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.contact}>
          <input
            type="text"
            id="name"
            name="lastname"
            placeholder="Nom"
            value={formData.lastname}
            onChange={handleChange}
            required></input>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Prénom"
            value={formData.firstname}
            onChange={handleChange}></input>
        </div>
        <div className={s.contact}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required></input>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Téléphone"
            value={formData.phone}
            onChange={handleChange}></input>
        </div>
        <div className={s.object}>
          <input
            type="text"
            id="object"
            name="object"
            placeholder="Objet du message"
            value={formData.object}
            onChange={handleChange}></input>
        </div>
        <div className={s.message}>
          <textarea
            type="textarea"
            wrap="hard"
            id="message"
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required></textarea>
        </div>
        <div className={s.buttons}>
          <div>
            <input
              type="file"
              id="file"
              name="file"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <button id={s.join} type="button" onClick={handleFileClick}>
              Joindre un fichier
            </button>
            {formData.fileName && <span>{formData.fileName}</span>}
          </div>
          <button id={s.button} type="submit">Envoyer</button>
        </div>
      </form>

    </div>
  );
};

export default Devis;