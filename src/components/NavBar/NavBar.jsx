import React from 'react'
import './NavBar.css'
import imagenes from "../../img/imagenes.js"
import Carro from './CartWidget.jsx'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (

        <header id="arriba" className="header">
        
        {/* <!-- HEADER DESKTOP --> */}
        <div className="header__desktop">
            
            {/* <!-- Logo --> */}
            <div className="header__desktop--logo">
                <img src={imagenes.logo} alt="logo" className="imagenLogo"/> 
            </div>

            {/* <!-- Buscador --> */}
            {/* <div className="header__desktop--search">
                <input type="search" id="buscador" placeholder="Busca tu producto..." />
                <label for="buscador" className="search--lupa"> <img src={imagenes.lupa} alt="buscador" /> </label>
            </div> */}
          
            <div className="header__desktop--usuario">
                <Carro/>
            </div>
           

            {/* <!-- Nav --> */}
            <nav className="header__desktop--menu">
                <ul>
                    <li> <Link to="/"> Inicio </Link> </li>

                    <li> <Link to="/categoria/frutossecos"> Frutos secos </Link> </li>

                    <li> <Link to="/categoria/legumbres"> Legumbres </Link> </li>

                    <li> <Link to="/categoria/pastas"> Pastas </Link></li>

                    <li> <Link to="/categoria/semillas"> Semillas </Link> </li>

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
                        <li> Inicio </li>

                        <li id="spanBtn"> Productos <span> <img src={imagenes.flechaAbajo} alt="flecha" width="13px"/> </span>
                            <ul className="sublista">
                                <li> Frutos secos  </li>
                                <li> Granolas  </li>
                                <li> Cereales </li>
                                <li> Mixs </li>
                                <li> Legumbres </li>
                                <li> Yerba </li>
                                <li> Harina  </li>
                                <li> Especias </li>
                                <li> Barras de cereal </li>
                                <li> Semillas </li>
                                <li> Aceite de oliva </li>
                                <li> Varios </li>   
                            </ul>
                        </li>

                    </ul>
                </nav>
            </aside>

        </div>

    </header>

    )
}

export default NavBar
