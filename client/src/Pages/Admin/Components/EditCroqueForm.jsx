import React, {useEffect} from "react";
import {useState} from "react";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {
    useGetCrokPackagingQuery,
    useUpdateCrokMutation,
} from "../../../store/slice/service/crokAPI";
import styles from "./modifyTea.module.css";

function EditCroqueForm() {
    const navigate = useNavigate();

    const {id} = useParams();
    const [values, setValues] = useState({
        id: 0,
        title: "",
        img: "",
        description: "",
        prix: 0,
    });

    // on recupère le thé à modifier
    const {data: crok, isLoading: crokLoading} = useGetCrokPackagingQuery(id);
    // le hook pour upgrade
    const [updateCrok, {isLoading}] = useUpdateCrokMutation();

    // on set les valeurs par defaut aux anciennes valeurs
    useEffect(() => {
        if (!crokLoading) {
            setValues({
                id: crok.result.id,
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

        let files = e.target.files;
        console.log(files)
        const formData = new FormData(e.target);
        const crok = {
            id: values.id,
            title: formData.get("title"),
            description: formData.get("description"),
            prix: formData.get("prix"),
        }
        await updateCrok(crok);

        navigate("/admin")
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
                        {/*<div>
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
                        </div>*/}

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
                            <label className={styles.label} htmlFor="prix">
                                Prix
                            </label>
                            <input
                                type="number"
                                id="prix"
                                name="prix"
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