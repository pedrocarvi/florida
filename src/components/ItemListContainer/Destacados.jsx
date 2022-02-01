import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from './ItemList'
import { getFirestore } from '../../services/getFirestore.js';
import Spinner from './Spinner';

export default function Destacados({greeting}) {

    const [loading, setLoading] = useState(true)
    const [destacados, setDestacados] = useState([])

    useEffect(() => {

        const db = getFirestore()
        const dbQuery = db.collection('items').where('destacado','==', true) 
        dbQuery.get()
        .then (data => setDestacados(data.docs.map(pro =>({id:pro.id,...pro.data()}))))
        .catch(err=>console.log(err) )
         .finally(()=> setLoading(false))
    }) 

    return(
        <>
        <div className="main-bienvenida">
            <h1> {greeting}</h1>
        </div>

        <h2 className='destacados-title'> Productos Destacados </h2>

        {loading ? <Spinner/> : <ItemList productos={destacados}/>} 

        </>
    )
}