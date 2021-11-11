import React from 'react';

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