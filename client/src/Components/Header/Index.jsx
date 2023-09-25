import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/img/logo.gif";
import style from "./Header.module.css";

import RestaurantStatus from './utils'; // Adjust the import path accordingly


function Header() {

    return (
        <header className={style.header}>


            <RestaurantStatus/>


            <section id={style.header}>
                <div id={style.logoHeader}>
                    <Link to={"/"} title="logo">

                        <img src={logo} alt="logo croque-monsieur pik&crok"/>

                    </Link>
                </div>
                <div id={style.menuHeader}>
                    <nav id={style.nav}>
                        {/* <NavLink to={"/tea"}>thés</NavLink> */}
                        <Link style={{textTransform: "uppercase"}} className={style.navHeader}
                                 to={"/"}>Home</Link>


                        <Link style={{textTransform: "uppercase"}} className={style.navHeader} to={"/about"}>¿Quien
                            somos?</Link>
                        <Link style={{textTransform: "uppercase"}} id={style.blog} to={"/blog"}>Blog</Link>
                    </nav>
                </div>
            </section>


        </header>
    );
}

export default Header;