

import React from "react";


import style from "./About.module.css";
import classNames from "./About.module.css";
import bannerAbout from "../../assets/img/about/Moi.jpg"

function Us() {
  
    return (
        <>

<section id={style.bannerAbout}>
                <img src={bannerAbout} alt="  Pérou"/>
                
            </section>

             <section id={style.bio}>
            <h1>Un joven franchute perdido en Lima</h1>
            <section id={style.bioDiv}>
                <div className={classNames.myStory}>
                    <h2>Mi historia</h2>
                    <p>Me llamo Antoine, un francés de 31 años nacido cerca de París. Llegué a Lima en 2018, y como la
                        mayoría de los franceses en Perú, fue el amor por una peruana lo que me hizo dejar mi Francia.
                        Una peruana que conocí en Barcelona durante mis vacaciones. Después de enamorarme de una
                        peruana, me enamoré de Perú. Su provincia, su cultura, su comida, su lengua y su gente.
                        Y aún me queda mucho por descubrir de este hermoso país. </p>
                </div>
                <div className={classNames.myStory}>
                    <h2>Mi pasión por la cocina</h2>
                    <p> Siempre me ha gustado comer y, sobre todo, comer bien. Y una cosa llevó a la otra y empecé a la
                        cocina y me apasioné por ella. Pero esta pasión nace especialmente de los platos que mi abuela
                        solía preparar para mí, y que mi madre retomó. Arroz con cebolla, tabboule, sol
                        meuniere, sopas, boeuf Bourguignon etc... ¡una delicia!
                        Con todas sus recetas, supieron darme el gusto por la buena comida. Así que también me puse el
                        delantal y me puse a cocinar. Me gusta crear nuevas recetas y recetas y combinar los alimentos
                        que me gustan. Pero la cocina es sobre todo compartir y dar el placer por encima de todo. </p>
                </div>
                <div className={classNames.myStory}>
                    <h2>Nacimiento de PIK<span>&</span>CROC</h2>
                    <p>PIK<span>&</span>CROC nació de la idea de revisar una receta de sándwich
                        100% francesa para mover las fronteras y exportarla a Perú.
                        Esta original forma de crear refinadas recetas de croque-monsieur es fruto de un aficionado a la
                        cocina francesa.

                        Este nuevo concepto de comida rápida quería alejarse del croque-monsieur francés corriente y
                        quería ofrecerle recetas originales desarrolladas por nosotros mismos. Nous avons travaillé pour
                        imaginer les
                        premières recettes des Croque-Monsieur PIK<span>&</span>CROC. Cada podrá
                        encontrar su croque-monsieur favorito. Fácil de comer, ideal para la pausa del almuerzo en el
                        trabajo o en casa para el ocasional o en casa para una merienda ocasional. </p>
                </div>
            </section>


        </section>
        </>
    );
}

export default Us;