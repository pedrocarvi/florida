import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
import ItemList from './ItemList'
import { getFirestore } from '../../services/getFirestore.js';
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

            const db = getFirestore()
            const dbQuery = categoryID ?  db.collection('items').where('categoria','==',categoryID) : db.collection('items')
            dbQuery.get()
            .then (data => setProducts(data.docs.map(pro =>({id:pro.id,...pro.data()}))))
            .catch(err=>console.log(err) )
             .finally(()=> setLoading(false))
          
        // LOCAL API CALL
       
        // if ( categoryID ) {

        //     getFetch
        //     .then (res => {
        //         setProducts(res.filter(prod => prod.categoria === categoryID))    
        //     })
        //     .catch( err => {
        //         console.log(`Hubo un error ${err}`);
        //     })
        //     .finally(() => setLoading(false))

        // } else {
            
        //     getFetch
        //     .then (res => {
        //         setProducts(res)    
        //     })
        //     .catch( err => {
        //         console.log(`Hubo un error ${err}`);
        //      })
        //     .finally(() => setLoading(false))
        
        // }
        
    }, [categoryID] )
   
    return(
        <>
        <div className="main-bienvenida">
            <h1> {greeting}</h1>
        </div>

        {loading ? <Spinner/> : <ItemList productos={products}/>} 

        </>
    )
}