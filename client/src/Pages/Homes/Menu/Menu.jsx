



import React from 'react'

import style from "./menu.module.css"
import classNames from "./menu.module.css";

import combo1 from "../../../assets/img/crocboisson.png";
import combo2 from "../../../assets/img/combo1croc.png";
import Rappi from "../../../assets/img/icon/rappi.png";
import Whatsapp from "../../../assets/img/icon/whatsapp.png";




function Menu() {


  return (
    <>

<section id={style.Info}>
            <div id={style.Hour}>
                <div>
                    <h2>Horarios de atención</h2>

                    <ul>
                        <li className={classNames.Jourouvert}>
                            <p className={classNames.Time}>Lunes</p>
                            <div className={classNames.Trait}></div>
                            <p  className={classNames.Time}>12.00 - 15.00</p>
                        </li>
                        <li className={classNames.Jourouvert}>
                            <p  className={classNames.Time}>Martes</p>
                            <div className={classNames.Trait}></div>
                            <p  className={classNames.Time}>12.00 - 15.00</p>
                        </li>
                        <li className={classNames.Jourouvert}>
                            <p  className={classNames.Time}>Miercoles</p>
                            <div className={classNames.Trait}></div>
                            <p  className={classNames.Time}>12.00 - 15.00</p>
                        </li>
                        <li className={classNames.Jourouvert}>
                            <p  className={classNames.Time}>Jueves</p>
                            <div className={classNames.Trait}></div>
                            <p  className={classNames.Time}>12.00 - 15.00</p>
                        </li>
                        <li className={classNames.Jourouvert}>
                            <p  className={classNames.Time}>Viernes</p>
                            <div className={classNames.Trait}></div>
                            <p  className={classNames.Time}>12.00 - 15.00</p>
                        </li>
                        <li className={classNames.Jourouvert}>
                            <p  className={classNames.Time}>Sabado</p>
                            <div className={classNames.Trait}></div>
                            <p  className={classNames.Time}>12.00 - 14.00</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Donde pedir ? </h2>
                    <div id={style.commander} style={{display: "flex"}}>
                        <div id={style.whatsapp}>
                            <img src={Whatsapp} alt=""  target="_blank"/>
                            <p><a  href="https://wa.me/33665671683" target="_blank" >Whatsapp</a></p>
                           
                        </div>
                        <div>
                            <img src={Rappi} alt=""/>
                            <p><a  href="https://www.rappi.com.pe/" target="_blank">Rappi</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classNames.Order}>
                <div >
                    <h2>LOS MENUS</h2>
                    <div id={style.Order}>
                        <div className={classNames.Combo}>
                            <img src={combo1} alt="" />
                            <h3>Combo 1</h3>
                           
                            <p>Desde 25 /S</p>
                        </div>
                        <div className={classNames.Combo}>
                            <img src={combo2} alt="" />
                            <h3>Combo 2</h3>
                           
                            <p>Desde 40 /S </p>
                        </div>
                       
                    </div>
                </div>
                </div>

        </section>
      

      
    
   
    </>
  )
}

export default Menu