import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
// import Contador from "./ItemCount"
import ItemList from './ItemList'

export const productos = [
    {id: 1, name: "Almendras", precio: 400, foto: "https://ichef.bbci.co.uk/news/640/cpsprodpb/5664/production/_90561122_almendras.jpg"},
    {id: 2, name: "Nueces", precio: 450, foto: "https://vcm.emol.com/wp-content/uploads/2019/02/Nueces.jpg"},
    {id: 3, name: "Arvejas", precio: 300, foto: "https://biomac.com.ar/wp-content/uploads/2020/02/Arveja.jpg"},
    {id: 4, name: "Lentejas", precio: 320, foto: "https://celiacos.org/wp-content/uploads/2020/10/lentils-1024x1024.jpg"},
]

const getProductos = new Promise((resolve, reject) => {
    const condition = true;

    if (condition) {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    } else {
        reject("404 Not Found")
    }
})


export default function ItemListContainer({greeting}) {

    const [Products, setProducts] = useState([])

    // Usamos el useEffect para que se llame una sola vez. Clase 6 : 1h 37min 
    useEffect(() => {
        getProductos
        .then (res => {
            setProducts(res)    
        })
        .catch( err => {
            console.log(`Hubo un error ${err}`);
        })
    }, [])
    console.log(Products)

    return(
        <>
        <div className="bienvenida">
            <h1> {greeting}</h1>
        </div>
        
        {/* <Contador stock={10} initial={1}/>    */}
        
        <ItemList/>
        </>
    )
}