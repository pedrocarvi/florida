import React, { useState } from 'react'
import './navbar.css'
import imagenes from "../../img/imagenes.js"
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { VscListSelection, VscClose } from 'react-icons/vsc'
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons'


const NavBar = () => {

    const { itemCounter } = useCartContext();

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (

        <header>
            <IconContext.Provider value={{ color: '#fff' }}>

                <div className="navbar">

                    <div className="navbarTop">

                        <div className="hamburger-div">
                            <VscListSelection className='hamburger-icon' onClick={showSidebar} />
                        </div>

                        
                        <div className="logo">
                            <Link to="/"> 
                                <img src={imagenes.logo} alt="logo" className="imagenLogo" />
                            </Link>
                        </div>
                       

                        <div className="cart">
                            <Link to='/cart' className='enlaceCarrito'>
                                <CartWidget />
                                <p> {itemCounter() !== 0 && itemCounter()} </p>
                            </Link>
                        </div>

                        {/* RESPONSIVE NAV */}

                        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} id='navResponsive'>

                            <ul className="nav-menu-items" onClick={showSidebar}>

                                <li className="navbar-toggle">
                                    <Link to="#" className='menu-close'>
                                        <VscClose />
                                    </Link>
                                </li>

                                {SidebarData.map((item, index) => {
                                    return (
                                        <li key={index} className={item.class}>
                                            <Link to={item.path}>
                                                {item.icon}
                                                <span> {item.title} </span>
                                            </Link>
                                        </li>
                                    )
                                })}

                            </ul>
                        </nav>
                    </div>

                    {/* DESKTOP NAV */}
                    <div id="navDesktop">
                        <ul>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.class}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span> {item.title} </span>
                                        </Link>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>

                </div>
            </IconContext.Provider>
        </header>

    )
}

export default NavBar
