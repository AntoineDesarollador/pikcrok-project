
import React from 'react';

import DeleteCroqueModal from './DeleteCroqueModal';
import EditCroqueForm from "./EditCroqueForm"
import AddCroqueForm from './AddCroqueForm';



function CroqueList({data: {crok}}) {

 
    return (
        <>
      <div>
        <h2>Liste des croques-monsieur</h2>
        <AddCroqueForm />
        
 
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
                  <img src={`/img/crok/${c.img}`} alt={c.title} width="100" />
                </td>
                <td>{c.prix}</td>
                <td>
                <EditCroqueForm croque={c} />
                <DeleteCroqueModal croque={c} />
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