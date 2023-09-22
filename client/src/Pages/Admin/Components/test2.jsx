

import React from "react";
import style from "./form.module.css";
import { useAddTeaMutation } from "../../../store/slice/service/teaAPI";

function Form({ data : crok }) {
    const [addCrok, response] = useAddTeaMutation();
    console.log(crok[0]);
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);
        await addCrok(formData);


    };

    return (
        <form
            onSubmit={submitHandler}
            encType="multipart/form-data"
            className={style.form}
        >
            <input
                type="text"
                name="title"
                placeholder="nom du croque-monsieur"
            />

<input type="file" name="image" id="photo" />
           
            <textarea
                placeholder="description"
                name="description"
                id="description"
                cols="30"
                rows="10"
            ></textarea>
            

          
            <input type="number" name="prix" id="price" placeholder="prix" />
            <input type="submit" value="ajouter" />
        </form>
    );
}

export default Form;