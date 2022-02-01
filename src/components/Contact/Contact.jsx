import React from 'react';
import './contact.css'

export default function Contact() {
    return(
        <div className='containerContact' xs={12} >

            <h2 className='titleContact'> Contactanos! </h2>
            
            <form className='formContact'>
                <input type="text" name="nombre" id="nombre"placeholder="Name" required />

                <input type="email" name="email" id="email" placeholder="Email" required />

                <textarea name="consulta" id="consulta" cols="30" rows="10" placeholder="Text"></textarea>

                <div className="divBtnForm"> 
                    <input type="reset" value="Reset form" id="reset" className='btnForm' />

                    <input type="submit" value="Send form" id="send" className='btnForm' />
                </div>
            </form>
        </div>
    )
}