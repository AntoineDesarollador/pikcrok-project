
import React, { useState } from 'react';

function AddCroqueForm() {
  const [croque, setCroque] = useState({
    title: '',
    description: '',
    img: null,
    prix: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCroque({ ...croque, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setCroque({ ...croque, img: imageFile });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données à votre API avec useAddCrokMutation
    // Réinitialiser le formulaire après l'ajout
    setCroque({
      title: '',
      description: '',
      img: null,
      prix: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Titre</label>
      <input type="text" name="title" value={croque.title} onChange={handleChange} />
      <label>Description</label>
      <input type="text" name="description" value={croque.description} onChange={handleChange} />
      <label>Image</label>
      <input type="file" name="img" accept="image/*" onChange={handleImageChange} />
      <label>Prix</label>
      <input type="text" name="prix" value={croque.prix} onChange={handleChange} />
      <button>Ajouter</button>
    </form>
  );
}

export default AddCroqueForm;
