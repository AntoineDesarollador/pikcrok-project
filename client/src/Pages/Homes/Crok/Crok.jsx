import React from 'react'


import style from "./crok.module.css"
import myPdf from "../../../assets/Pdf/FLYER.pdf"


import { NavLink } from 'react-router-dom';

function Crok({data: {crok}}) {
  return (
    <>
      <section id={style.allCrok}>
        <h2>Nuestros croque-monsieur</h2>

        <NavLink style={{width: "100%"}} to={myPdf} target="_blank">
      ¡Descargar nuestra carta!
</NavLink>

      {crok.result.map((c,i) => {
        return crok.result.length && (
        
          <div>
          <section id={style.crok} >
          
            <h3>{c.title}</h3>
           <img src = {`/img/crok/${c.img}`} alt='foto croque monsieur comida pik&crok' />         
          </section>


          <section id={style.description}>
          <p>{c.description}</p>
          </section>
          </div>
        
          
        )
       
      })
      }

      </section>
 
    </>
  )
}

export default Crok