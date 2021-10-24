import { Component } from 'react';
import imagenes from '../../img/imagenes'

export default class Carro extends Component {
    render() {
        return (
               <div>
                   <img href={imagenes.carrito} alt="img"/>
               </div>
        )
    }
}

