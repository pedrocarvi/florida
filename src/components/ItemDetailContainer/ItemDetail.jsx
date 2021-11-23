import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetailContainer/ItemDetailContainer.css'

export default function ItemDetail({item, click, setClick, handleAdd}) {
  
    return(
        <>
                <div key={item.id}>

                    <div className="productoDetalle"> 
                    
                        <img src={item.foto} alt="imgDetalle" className="imgDetalle"/>

                        <div className="barraLateralDetalle">
                            <h2> {item.name }</h2>
                            <p> ${item.precio} </p>
                            <p> Stock: {item.stock} </p>

                            { click ?
                                <div className="intercambAggCarrito">
                                    <Link to="/"> 
                                        <button> Volver </button>
                                    </Link>
                                    <Link to="/cart">
                                        <button> Terminar compra </button>
                                    </Link>
                                </div> 
                                :
                                <ItemCount 
                                    initial = {1}
                                    stock={10}
                                    onAdd={handleAdd}/>
                            }

                           
                        </div>
                    </div>

                    <div className="productoDetalleDescripcion">
                        <h3> Descripcion del item </h3>
                        <p> {item.descripcion} </p>
                    </div>
                </div>
        </>
    )
}