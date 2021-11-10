import React from 'react';
import imagenes from '../../img/imagenes';

export default function Spinner() {

    const style = {
        margin: "50px",

    }

    return(
        <div style={style}>
            <img src={imagenes.loading} alt="cargando" width="50px"/>
            <p> Cargando... </p>
        </div>
    )
}