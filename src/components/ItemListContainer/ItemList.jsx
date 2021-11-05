import { productos } from './ItemListContainer';
import Contador from './ItemCount';



export default function ItemList() {
    return(
        <>
        <div className="gridProductos"> 
            {productos.map(prod => 
            <div className="producto" key={prod.id}>
                <img src={prod.foto} alt="imgproduct" className="imgProductos"/>
                <h4> {prod.name} </h4>
                <p> ${prod.precio }</p>     
                <Contador stock={10} initial={1}/> 
            </div>)}
            
         </div>
        </>
    )
}