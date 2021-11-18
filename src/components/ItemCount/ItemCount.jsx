import React, { useState } from 'react';

export default function ItemCount( { initial, stock, onAdd}) {

    const [count, setCount] = useState(initial)

    const sumar = () => {
        setCount(count + 1);

        if (count === stock) {
            alert("No hay suficiente stock")    
            setCount(count - 1)
        }
    }
    const restar = () => {
        setCount(count - 1)

        if (count <= 1) {
            setCount(count + 1)
            alert("Debes seleccionar minimo 1 producto")
        }
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

