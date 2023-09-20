

import React, { useState } from 'react';
import { useUpdateCrokMutation } from '../../../store/slice/service/crokAPI';

function EditCroqueForm({ croque }) {
  const [updatedCroque, setUpdatedCroque] = useState({ ...croque });
  const [isEditing, setIsEditing] = useState(false);
  const [updateCrok] = useUpdateCrokMutation();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedCroque({ ...croque });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCroque({ ...updatedCroque, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCrok(updatedCroque)
      .unwrap()
      .then(() => {
        setIsEditing(false);
      });
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>Titre</label>
          <input type="text" name="title" value={updatedCroque.title} onChange={handleChange} />
          <label>Description</label>
          <input type="text" name="description" value={updatedCroque.description} onChange={handleChange} />
          <label>Image</label>
          <input type="file" name="img" accept="image/*" onChange={handleChange} />
          <label>Prix</label>
          <input type="text" name="prix" value={updatedCroque.prix} onChange={handleChange} />
          <button type="submit">Enregistrer</button>
          <button onClick={handleCancelEdit}>Annuler</button>
        </form>
      ) : (
        <div>
          <p>Titre: {croque.title}</p>
          <p>Description: {croque.description}</p>
          <p>Image: {croque.img}</p>
          <p>Prix: {croque.prix}</p>
          <button onClick={handleEditClick}>Modifier</button>
        </div>
      )}
    </div>
  );
}

export default EditCroqueForm;
