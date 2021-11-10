import Item from './Item'

export default function ItemList({productos}) {
    return(
        <>
        <div className="gridProductos"> 
            {productos.map( prod => <Item prod={prod}/> )}
        </div>
        </>
    )
}