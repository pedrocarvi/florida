import React, { useState } from 'react';
import './ItemCount.css'

export default function Contador({stock, initial}) {

    const [contador, setContador] = useState(initial)

    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    const carrito = () => {
        if (contador === 0) {
            alert("Ingrese una cantidad")
        } else {
            alert(`Se agregaron ${contador} productos a tu carrito`)
        }
    }

    if (contador === stock + 1 ) {
        alert("No hay suficiente stock")    
        setContador(contador - 1)
    }

    if (contador < 0) {
        alert("No puede ser menos que 0")
        setContador(contador + 1)
    }

    return ( 
        <>
            <div className="contadorCarrito">
                <button onClick={restar}> - </button>
                <p> {contador} </p>
                <button onClick={sumar}> + </button>
            </div>
            <button className="agregar-carrito" onClick={carrito}> Agregar al carrito </button>
        </>
    )
}

