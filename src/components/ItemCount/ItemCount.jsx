import React, { useState } from 'react';

export default function ItemCount( { initial, stock, onAdd}) {

    const [count, setCount] = useState(initial)

    const sumar = () => {
        count < stock ? setCount(count + 1) : alert("No hay mas stock")
    }

    const restar = () => {
        count > initial ? setCount(count - 1) : alert("No podes seleccionar menos de 1 producto")
    }

    return ( 
        <>
            <div className="contadorCarrito">
                <button onClick={restar}> - </button>
                <p> {count} </p>
                <button onClick={sumar}> + </button>
            </div>
            <button className="agregar-carrito" onClick={() => onAdd(count)}> Agregar al carrito </button>
        </>
    )
}

