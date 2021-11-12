import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
    return(
            <div className="producto" key={prod.id}>
                <img src={prod.foto} alt="imgproduct" className="imgProductos"/>
                <h4> {prod.name} </h4>
                <p className="descripcionProducto"> {prod.descripcion} </p>
                <p> ${prod.precio }</p>     
                <Link to={`/item/${prod.id}`}> 
                    <button> Ver mas </button>  
                </Link>
           </div>
    )
}

export default Item