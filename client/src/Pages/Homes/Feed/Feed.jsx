

import React from 'react'
import style from "./Feed.module.css"

import banner from "../../../assets/img/El_salmon.jpg";
import Serrano from "../../../assets/img/El_serrano.jpg";




function Feed(){
    return (
        <>

             <section id={style.banner}>
                <img src={banner} alt="croque-monsieur au saumon"/>
                
            </section>
        <section>
<h1>PIK<span>&</span>CROC LE INVITA A DESCUBRIR ESTE SANDWICH FRANCÉS,</h1>
</section>

<section id={style.sectionFeed}>

    <div id={style.sectionImg}>
    <img id={style.Img} src={Serrano} alt="" />
    </div>

    <div id={style.sectionTxt}>
        <h2>PIK<span>&</span>CROC, su historia.</h2>
        <h3>Nuestro chef Antoine, apasionado de la cocina, tuvo la idea de reinventar este sándwich francés estrella y hacer que lo descubriera de otra forma que su versión clásica. Nuestros croque-monsieurs son con recetas auténticas que pueden gustar a todo el mundo.</h3>
        
        <h2>¿Cómo nació PIK<span>&</span>CROC?</h2>
        <h3>PIK<span>&</span>CROC nació de la idea de reinventar una receta de sándwich 100% francesa para mover las fronteras y exportarla a Perú. Esta original forma de crear refinadas recetas de croque-monsieur es fruto de un aficionado a la cocina francesa. Este nuevo concepto de comida rápida quería alejarse del croque-monsieur francés corriente y quería ofrecerle recetas originales desarrolladas por nosotros mismos. Nous avons travaillé pour imaginer les premières recettes des Croque-Monsieur PIK&CROC. Cada podrá encontrar su croque-monsieur favorito. Fácil de comer, ideal para la pausa del almuerzo en el trabajo o en casa para el ocasional o en casa para una merienda ocasional.</h3>
   
    </div>

</section>
</>
    );
}

export default Feed; 