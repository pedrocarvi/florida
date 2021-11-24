import { Component } from 'react';
import imagenes from '../../img/imagenes'
import { Link } from 'react-router-dom';

export default class Carro extends Component {
    render() {
        return (
               <div>
                   <Link to="/cart">
                        <img src={imagenes.carrito} alt="img"/>
                   </Link>
                   
               </div>
        )
    }
}

