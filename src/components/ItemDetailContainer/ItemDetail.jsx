import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail({item}) {
    return(
        <>
                <div key={item.id}>

                    <div className="productoDetalle"> 
                    
                        <img src={item.foto} alt="imgDetalle" className="imgDetalle"/>

                        <div className="barraLateralDetalle">
                            <h2> {item.name }</h2>
                            <p> ${item.precio} </p>
                            <p> Stock: {item.stock} </p>
                            <ItemCount stock={10} initial={1}/>
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