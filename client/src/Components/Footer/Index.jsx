


import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/logo.gif";

import style from "./Footer.module.css";
import classNames from "./Footer.module.css";

import Rappi from "../../assets/img/icon/rappi.png";
import Whatsapp from "../../assets/img/icon/whatsapp.png";


function Footer() {

    return (
        <footer className={style.footer}>

            <section id = {style.footer}>
                <div id={style.logoFooter}>
                <Link to={"/"} target="_blank" title="Logo">
               
                    <img src={logo} alt="logo" />
                
            </Link>
                </div>
                <div id={style.menuFooter}>
                <nav id={style.nav}>
              
                <NavLink style={{textTransform: "uppercase"}} className={style.navFooter} to={"/"}>Home</NavLink>
  
                <NavLink style={{textTransform: "uppercase"}} className={style.navFooter} to={"/about"}>¿Quien somos?</NavLink>
                <NavLink style={{textTransform: "uppercase"}} id={style.blog}   to={"/blog"}>Blog</NavLink>
            </nav>
                </div>

                <div >
            
                <div id={style.findUs} style={{display: "flex"}}>
                        <div className={classNames.logoContact}>
                            <img className={classNames.imgContact} src={Whatsapp} alt=""  target="_blank"/>
                            <p><a  href="https://wa.me/33665671683" target="_blank">Whatsapp</a></p>
                           
                        </div>
                        <div className={classNames.logoContact}>
                            <img className={classNames.imgContact} src={Rappi} alt=""/>
                            <p><a  href="https://www.rappi.com.pe/" target="_blank">Rappi</a></p>
                        </div>
                    </div>
            
                </div>
            </section>

        
        
        </footer>
    );
}

export default Footer;