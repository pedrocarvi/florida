import React from 'react';
import Contador from './ItemCount';

const Item = ({prod}) => {
    return(
            <div className="producto" key={prod.id}>
                <img src={prod.foto} alt="imgproduct" className="imgProductos"/>
                <h4> {prod.name} </h4>
                <p className="descripcionProducto"> {prod.descripcion} </p>
                <p> ${prod.precio }</p>     

                <Contador stock={10} initial={1}/> 
           </div>
    )
}

export default Item