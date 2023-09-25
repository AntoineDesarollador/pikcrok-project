import React from 'react';

import DeleteCroqueModal from './DeleteCroqueModal';

import Form from './AddCroqueForm';
import {NavLink} from "react-router-dom";
import style from "../../../Components/Header/Header.module.css";

function CroqueList({data: {crok}}) {
    return (
        <>
            <div>
                <h2>Liste des croques-monsieur</h2>
                <Form/>

                <table>
                    <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Prix</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {crok.result.map((c, i) => {
                            return (

                                <tr key={c.id}>
                                    <td>{c.title}</td>
                                    <td>{c.description}</td>
                                    <td>
                                        <img src={`/img/crok/${c.img}`} alt={c.title} width="100"/>
                                    </td>
                                    <td>{c.prix}</td>
                                    <td>
                                        <button>
                                            <NavLink  to={"/edit/" + c.id}>Modifier</NavLink>
                                        </button>
                                        <DeleteCroqueModal croqueId={c.id}/>
                                    </td>
                                </tr>
                            )
                        }
                    )}
                    </tbody>
                </table>
            </div>
        </>
    );

}

export default CroqueList;