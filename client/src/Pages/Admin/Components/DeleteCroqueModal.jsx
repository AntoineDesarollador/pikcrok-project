import React, { useState } from 'react';
import { useDeleteCrokMutation, useGetCrokCategoryQuery } from '../../../store/slice/service/crokAPI';

function DeleteCroqueModal({ croque }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteCrok] = useDeleteCrokMutation();
  const { data, refetch } = useGetCrokCategoryQuery();

  const handleDeleteClick = () => {
    setIsDeleting(true);
  };

  const handleCancelDelete = () => {
    setIsDeleting(false);
  };

  const handleConfirmDelete = async (e) => {
    e.preventDefault();
    try {


      const formData = new FormData(e.target);
    console.log(formData);
    await deleteCrok(formData);

     
    } catch (error) {
      console.error('Erreur lors de la suppression du croque-monsieur :', error);
    } finally {
      setIsDeleting(false); // Assurez-vous de réinitialiser l'état après la suppression
    }
  };

  return (
    <div>
      {isDeleting ? (
        <div>
          <p>Voulez-vous vraiment supprimer ce croque-monsieur ?</p>
          <form onSubmit={handleConfirmDelete}>
  <button type="submit">Oui</button>
  <button type="button" onClick={handleCancelDelete}>Non</button>
</form>
        </div>
      ) : (
        <button onClick={handleDeleteClick}>Supprimer</button>
      )}
    </div>
  );
}

export default DeleteCroqueModal;
