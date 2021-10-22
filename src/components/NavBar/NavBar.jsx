import React from 'react'
import imagenes from "../../img/imagenes.js";

const NavBar = () => {
    return (
        <header id="arriba" class="header">

        {/* <!-- HEADER DESKTOP --> */}
        <div class="header__desktop">
            
            {/* <!-- Logo --> */}
            <div class="header__desktop--logo">
                <a href="index.html"> <img src={imagenes.logo} alt="logo" class="imagenLogo" /> </a>
            </div>

            {/* <!-- Buscador --> */}
            <div class="header__desktop--search">
                <input type="search" id="buscador" placeholder="Busca tu producto..." />
                <label for="buscador" class="search--lupa"> <img src={imagenes.lupa} alt="buscador" /> </label>
            </div>

             {/* <!-- Carrito --> */}
             <div class="header__desktop--usuario">
                <img src={imagenes.carrito} alt="carrito" />
                <img src={imagenes.usuario} alt="usuario" />
            </div>

            {/* <!-- Nav --> */}
            <nav class="header__desktop--menu">
                <ul>
                    <li><a href="#"> Inicio </a></li>

                    <li><a href="#"> Productos </a></li>

                    <li><a href="#"> Nosotros </a></li>

                    <li><a href="#"> Contacto </a></li>
                </ul>
            </nav>

        </div>

        {/* <!-- HEADER MOBILE --> */}

        <div class="header__mobile">

            {/* <!-- Menu hamburguesa--> */}
            <button class="hamburger hamburger--squeeze panel-btn" type="button" id="hamburguer">
                <span class="hamburger-box">
                    <span class="hamburger-inner"> </span>
                </span>
            </button>

            {/* <!-- Logo --> */}
            <div class="header__logo">
                <a href="index.html"> <img src={imagenes.logo} alt="logo" class="imagenLogo" /> </a>
            </div>

            {/* <!-- Nav --> */}
            <aside className="panel">
                <nav class="header__menu menu">
                    <ul>
                        <li><a href="#"> Inicio </a></li>

                        <li id="spanBtn"> Productos <span> <img src={imagenes.flechaAbajo} alt="flecha" width="13px"/> </span>
                            <ul class="sublista">
                                <li> <a href=""> Frutos secos </a> </li>
                                <li> <a href=""> Granolas </a> </li>
                                <li> <a href=""> Cereales </a> </li>
                                <li> <a href=""> Mixs </a> </li>
                                <li> <a href=""> Legumbres </a> </li>
                                <li> <a href=""> Yerba </a> </li>
                                <li> <a href=""> Harina </a> </li>
                                <li> <a href=""> Especias / Condimentos </a> </li>
                                <li> <a href=""> Barras de cereal </a> </li>
                                <li> <a href=""> Semillas </a> </li>
                                <li> <a href=""> Aceite de oliva </a> </li>
                                <li> <a href=""> Varios </a> </li>   
                            </ul>
                        </li>

                        <li><a href="#"> Nosotros </a></li>

                        <li><a href="#"> Contacto </a></li>
                    </ul>
                </nav>
            </aside>
            

            {/* <!-- Carrito --> */}
            <div class="header__carrito">
                <img src={imagenes.carrito} alt="carrito" />
            </div>

        </div>

    </header>

    )
}

export default NavBar
