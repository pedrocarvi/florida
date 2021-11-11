import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../../services/getFetch';
import ItemDetail from './ItemDetail';
import Spinner from '../ItemListContainer/Spinner';
import './ItemDetailContainer.css'

const getItem = new Promise((res, rej) => {
    const condition = true;

    if(condition) {
        setTimeout(() => {
            res(productos)
        }, 2000);
    }
    else {
        rej('404 not found')
    }
})

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        getItem
            .then(res => 
             setItem(res.find(el => el.id === parseInt(id))) 
            )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } , [id])

    console.log(item);
    
    return(
        <>
            {loading ? <Spinner/> : <ItemDetail item={productos[0]}/>}
        </>
    )
}

export default ItemDetailContainer

