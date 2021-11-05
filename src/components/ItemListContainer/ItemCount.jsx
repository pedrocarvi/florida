import React, { useState } from 'react';

export default function Contador({stock, initial, onAdd}) {

    const [contador, setContador] = useState(initial)

    const sumar = () => {
        setContador(contador + 1);

        if (contador === stock) {
            alert("No hay suficiente stock")    
            setContador(contador - 1)
        }
    }
    const restar = () => {
        setContador(contador - 1)

        if (contador === 0) {
            alert("Debes seleccionar una cantidad valida")
            setContador(contador + 1)
        }
    }

    return ( 
        <>
            <div className="contadorCarrito">
                <button onClick={restar}> - </button>
                <p> {contador} </p>
                <button onClick={sumar}> + </button>
            </div>
            <button className="agregar-carrito" onClick={onAdd}> Agregar al carrito </button>
        </>
    )
}

