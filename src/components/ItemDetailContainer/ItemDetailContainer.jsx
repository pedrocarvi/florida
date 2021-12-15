import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../../services/productos';
import ItemDetail from './ItemDetail';
import Spinner from '../ItemListContainer/Spinner';
import './ItemDetailContainer.css'
import { useCartContext } from '../../context/CartContext';
import {getFirestore} from "../../services/getFirestore"

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
    const [click, setClick] = useState(false)
    const {cartList, addItem } = useCartContext()
    const {id} = useParams()

    const handleAdd = (count) =>{
        setClick(count)
        addItem(item, count)
    }

    useEffect (() => {
        const dbQuery = getFirestore()
         dbQuery.collection('items').doc(id).get()
             .then (resp => setItem({ id:resp.id,...resp.data() }))
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false))
    },[id])
    
    return(
        <>
            {loading ? <Spinner/> : <ItemDetail item={item} {...{click, setClick}} handleAdd={handleAdd}/>}
        </>
    )
}

export default ItemDetailContainer

