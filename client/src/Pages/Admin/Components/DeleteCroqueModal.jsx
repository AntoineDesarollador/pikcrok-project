



import React, { useState } from 'react';
import { useDeleteCrokMutation } from '../../../store/slice/service/crokAPI';

function DeleteCroqueModal({ croque }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteCrok] = useDeleteCrokMutation();

  const handleDeleteClick = () => {
    setIsDeleting(true);
  };

  const handleCancelDelete = () => {
    setIsDeleting(false);
  };

  const handleConfirmDelete = () => {
    deleteCrok(croque.id)
      .unwrap()
      .then(() => {
        setIsDeleting(false);
      });
  };

  return (
    <div>
      {isDeleting ? (
        <div>
          <p>Voulez-vous vraiment supprimer ce croque-monsieur ?</p>
          <button onClick={handleConfirmDelete}>Oui</button>
          <button onClick={handleCancelDelete}>Non</button>
        </div>
      ) : (
        <button onClick={handleDeleteClick}>Supprimer</button>
      )}
    </div>
  );
}

export default DeleteCroqueModal;