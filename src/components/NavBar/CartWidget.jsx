import { Component } from 'react';
import imagenes from '../../img/imagenes'

export default class Carro extends Component {
    render() {
        return (
               <div>
                   <img src={imagenes.carrito} alt="img"/>
               </div>
        )
    }
}

