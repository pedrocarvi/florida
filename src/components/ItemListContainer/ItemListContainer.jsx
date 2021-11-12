import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
import ItemList from './ItemList'
import Spinner from './Spinner';
import { productos } from '../../services/productos';

const getFetch = new Promise((resolve, reject) => {
    const condition = true;

    if (condition) {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    } else {
        setTimeout(() => {
            reject('404 not found')
        }, 2000);
    }
})

export default function ItemListContainer({greeting}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

        
    const { categoryID } = useParams()

    // Usamos el useEffect para que se llame una sola vez. Clase 6 : 1h 37min 
    useEffect(() => {
        
        if ( categoryID ) {

            getFetch
            .then (res => {
                setProducts(res.filter(prod => prod.categoria === categoryID))    
            })
            .catch( err => {
                console.log(`Hubo un error ${err}`);
            })
            .finally(() => setLoading(false))

        } else {
            
            getFetch
            .then (res => {
                setProducts(res)    
            })
            .catch( err => {
                console.log(`Hubo un error ${err}`);
             })
            .finally(() => setLoading(false))
        
        }
        
    }, [categoryID] )

    // console.log(categoryID);
    
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