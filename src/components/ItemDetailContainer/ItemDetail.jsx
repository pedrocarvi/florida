import { productos } from "../ItemListContainer/ItemListContainer";
import Contador from "../ItemListContainer/ItemCount";

export default function ItemDetail() {
    return(
        <>
            {productos.map( producto => 
                <div key={producto.id}>

                    <div className="productoDetalle"> 
                    
                        <img src={producto.foto} alt="imgDetalle" className="imgDetalle"/>

                        <div className="barraLateralDetalle">
                            <h2> {producto.name }</h2>
                            <p> ${producto.precio} </p>
                            <p> Stock: {producto.stock} </p>
                            <Contador initial={1}/>
                        </div>
                    </div>

                    <div className="productoDetalleDescripcion">
                        <h3> Descripcion del producto </h3>
                        <p> {producto.descripcion} </p>
                    </div>
                </div>

                
                )}
        </>
    )
}