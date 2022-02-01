import React from 'react';
import imagenes from '../../img/imagenes';
import "./footer.css"
import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <>
            <div className="footer">
                
                <div className="footer-nosotros">
                    <h3> Florida frutas secas </h3>
                    
                    <p> Florida Bis 371, Esquina Av. Sabin </p>
                    
                    <p> Lunes a Jueves de 17:45hs a 19:15hs</p>
                </div>

                <div className="footer-contacto">
             
                    <h3> Contacto </h3>                            
                    
                    <div className='footer-contacto-ig'>        
                        <a href="https://www.instagram.com/frutasecas.florida/" target="_blank"  rel="noreferrer"> 
                            <img src={imagenes.ig} alt="ig-logo" />
                            <p> @frutasecas.florida </p>
                        </a>
                    </div>
                    
                    <p> Cel: +54 9 3413775447</p>
                </div>

            </div>
        </>
    )
}