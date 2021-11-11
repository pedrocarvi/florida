import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from './ItemList'
import getFetch from '../../services/getFetch';
import Spinner from './Spinner';

export default function ItemListContainer({greeting}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    // Usamos el useEffect para que se llame una sola vez. Clase 6 : 1h 37min 
    useEffect(() => {
        getFetch
        .then (res => {
            setProducts(res)    
        })
        .catch( err => {
            console.log(`Hubo un error ${err}`);
        })
        .finally(() => setLoading(false))
    }, [])

    return(
        <>
        <div className="bienvenida">
            <h1> {greeting}</h1>
        </div>
        
        {/* <Contador stock={10} initial={1}/>    */}
        
        {loading ? <Spinner/> : <ItemList productos={products}/>} 
        </>
    )
}