import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import 'firebase/firestore';

export default function Cart() {
    
    const { cartList, removeItem, clearCart, itemCounter} = useCartContext();

    let totalPrice = 0;

    return (
        <>
            {/* Carrito vacio */}

            {cartList.length === 0 && (
                <div className="carritoVacioContainer">
                    {" "}
                    <br />
                    <h2 className="carritoVacioTitulo"> Carrito vacio </h2> <br />
                    <Link to="/">
                        <button className="carritoVaciobtn">
                            {" "}
                            Volver a la pagina principal{" "}
                        </button>
                    </Link>
                </div>
            )}

            {/* Carrito con productos */}

            {cartList.length > 0 && (
                <div className="carritoContainer">
                    <div className="carritoTablaContainer">
                        <table className="carritoTabla carritoTabla1">
                            <thead>
                                <tr>
                                    <th> Imagen </th>
                                    <th> Nombre </th>
                                    <th> Precio </th>
                                    <th> Cantidad </th>
                                    <th> Subtotal </th>
                                    <th> Eliminar </th>
                                </tr>
                            </thead>
                        </table>

                        {cartList.map((item) => (
                            <div key={item.id}>
                                <table className="carritoTabla">
                                    <tbody>
                                        <tr>
                                            <td>
                                                {" "}
                                                <img
                                                    src={item.foto}
                                                    alt="imagen"
                                                    className="imgProducto"
                                                    width="100px"
                                                />{" "}
                                            </td>

                                            <td className="nombreProducto"> {item.name} </td>

                                            <td className="precioProducto"> ${item.precio} </td>

                                            <td> {item.count} </td>

                                            <td> ${item.precio * item.count} </td>

                                            <td>
                                                {" "}
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="delete-item-btn"
                                                    title="Delete item"
                                                >
                                                    {" "}
                                                    X{" "}
                                                </button>{" "}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>

                    {cartList.map((item) => {
                        totalPrice = item.precio * item.count + totalPrice;
                    })}

                    <div className="carritoCompra">

                        <h2 className="carritoCompra-titulo"> Tu compra: <span> ${totalPrice}, </span> <span className="cantProductos"> {itemCounter()} productos </span> </h2>

                        <div className="compraBotones">
                            <Link to="/">
                                <button className="keep-shopping-btn">
                                    {" "}
                                    Seguir comprando{" "}
                                </button>
                            </Link>{" "}
                            <br />
                            <button onClick={clearCart} className="delete-all-btn">
                                {" "}
                                Eliminar Carrito{" "}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
