



import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
    useGetCrokPackagingQuery,
    useUpdateCrokMutation,
} from "../../../store/slice/service/crokAPI";
import styles from "./modifyTea.module.css";

function ModifyCrok() {
  const { id } = useParams();
  const [values, setValues] = useState({
    crokId: 0,
    title: "",
    img: "",
    description: "",
    prix: 0,
  });

  // on recupère le thé à modifier
  const { data: crok, isLoading: crokLoading } = useGetCrokPackagingQuery(id);
 
  // le hook pour upgrade
  const [updateTea, {isLoading}] = useUpdateCrokMutation();


  // on set les valeurs par defaut aux anciennes valeurs 


  useEffect(() => {
    if (!crokLoading) {

      

      setValues({
        ...values,
        crokId: (crok[0]).id,
        title: (crok[0]).title,
        img: (crok[0]).img,
        description: (crok[0]).description,
        prix: (crok[0]).prix,
      });
    }
  }, [crok]);



  ///// gestion du formulaire //////////////////////////////

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      
        "title": values.title,
        "img": values.img,
        "description": values.description,
        "prix": values.prix
    
    });

    console.log ("data", data)

    updateTea(
      { id: values.crokId, data });

    // reset des champs du form
    setValues({
      ...values,
      title: "",
      img: "",
      description: "",
      prix: "",
    
    });
  };

  ////////////////////////////////////////////////////////
  return (
    <div className="container">
      {crokLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <h2>Modification d'un thé :</h2>
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            method="POST "
            encType="multipart/form-data"
          >
            <label className={styles.label} htmlFor="mainTitle">
              titre
            </label>
            <input
              type="text"
              id="mainTitle"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            <label className={styles.label} htmlFor="subTitle">
              sous-titre
            </label>
            <input
              type="file"
              id="subTitle"
              name="subTitle"
              value={values.img}
              onChange={handleChange}
            />
          
            
            <label className={styles.label} htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={8}
              cols={5}
              value={values.description}
              onChange={handleChange}
            />
             <input
              type="number"
              id="subTitle"
              name="subTitle"
              value={values.prix}
              onChange={handleChange}
            />
            <br />
            <input type="submit" value="Validation" /> <br />
          </form>
        </>
      )}
    </div>
  );
}

export default ModifyCrok;