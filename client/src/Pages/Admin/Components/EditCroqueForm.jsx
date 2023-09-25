import React, {useEffect} from "react";
import {useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {
    useGetCrokPackagingQuery,
    useUpdateCrokMutation,
} from "../../../store/slice/service/crokAPI";
import styles from "./modifyTea.module.css";

function EditCroqueForm() {
    const {id} = useParams();
    const [values, setValues] = useState({
        crokId: 0,
        title: "",
        img: "",
        description: "",
        prix: 0,
    });
    console.log("id", id)

    // on recupère le thé à modifier
    const {data: crok, isLoading: crokLoading} = useGetCrokPackagingQuery(id);
    // le hook pour upgrade
    const [updateCrok, {isLoading}] = useUpdateCrokMutation();

    // on set les valeurs par defaut aux anciennes valeurs
    useEffect(() => {
        if (!crokLoading) {
            setValues({
                ...values,
                crokId: crok.result.id,
                title: crok.result.title,
                img: crok.result.img,
                description: crok.result.description,
                prix: crok.result.prix,
            });
        }
    }, [crok]);


    ///// gestion du formulaire //////////////////////////////
    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = JSON.stringify({
            "title": values.title,
            "img": values.img,
            "description": values.description,
            "prix": values.prix
        });

        updateCrok({id: values.crokId, data});

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

                    <h2>Modification d'un croque :</h2>
                    <form
                        className={styles.form}
                        onSubmit={handleSubmit}
                        method="POST "
                        encType="multipart/form-data">
                        <div>
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
                        </div>
                        <div>
                            <label className={styles.label} htmlFor="image">
                                Image
                            </label>
                            <img width="100" src={`/img/crok/${values.img}`} alt="image du croque"/>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <div>
                                <label className={styles.label} htmlFor="description">
                                    Description
                                </label>
                            </div>
                            <textarea
                                id="description"
                                name="description"
                                value={values.description}
                                rows={8}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className={styles.label} htmlFor="price">
                                Prix
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={values.prix}
                                onChange={handleChange}
                            />
                        </div>
                        <button>
                            <NavLink to={"/admin"}>Annuler</NavLink>
                        </button>
                        <input type="submit" value="Valider"/> <br/>
                    </form>
                </>
            )}
        </div>
    );
}

export default EditCroqueForm;