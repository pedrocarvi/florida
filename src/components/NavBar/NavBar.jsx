import React from 'react'
import './NavBar.css'
import imagenes from "../../img/imagenes.js"
import Carro from './CartWidget.jsx'

const NavBar = () => {

    return (

        <header id="arriba" className="header">
        
        {/* <!-- HEADER DESKTOP --> */}
        <div className="header__desktop">
            
            {/* <!-- Logo --> */}
            <div className="header__desktop--logo">
                <a href="index.html"> <img src={imagenes.logo} alt="logo" className="imagenLogo" /> </a>
            </div>

            {/* <!-- Buscador --> */}
            <div className="header__desktop--search">
                <input type="search" id="buscador" placeholder="Busca tu producto..." />
                <label for="buscador" className="search--lupa"> <img src={imagenes.lupa} alt="buscador" /> </label>
            </div>

             {/* <!-- Carrito --> */}
             {/* <div className="header__desktop--usuario">
                <img src={imagenes.carrito} alt="carrito" />
                <img src={imagenes.usuario} alt="usuario" />
            </div> */}
          
            <div className="header__desktop--usuario">
                <Carro/>
            </div>
           
            

            {/* <!-- Nav --> */}
            <nav className="header__desktop--menu">
                <ul>
                    <li><a href="#"> Inicio </a></li>

                    <li><a href="#"> Productos </a></li>

                    <li><a href="#"> Nosotros </a></li>

                    <li><a href="#"> Contacto </a></li>
                </ul>
            </nav>

        </div>

        {/* <!-- HEADER MOBILE --> */}

        <div className="header__mobile">

            {/* <!-- Menu hamburguesa--> */}
            <button className="hamburger hamburger--squeeze panel-btn" type="button" id="hamburguer">
                <span className="hamburger-box">
                    <span className="hamburger-inner"> </span>
                </span>
            </button>

            {/* <!-- Logo --> */}
            <div className="header__logo">
                <a href="index.html"> <img src={imagenes.logo} alt="logo" className="imagenLogo" /> </a>
            </div>

            {/* <!-- Nav --> */}
            <aside classNameName="panel">
                <nav className="header__menu menu">
                    <ul>
                        <li><a href="#"> Inicio </a></li>

                        <li id="spanBtn"> Productos <span> <img src={imagenes.flechaAbajo} alt="flecha" width="13px"/> </span>
                            <ul className="sublista">
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
            <div className="header__carrito">
                <img src={imagenes.carrito} alt="carrito" />
            </div>

        </div>

    </header>

    )
}

export default NavBar
