import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {

    const {cartList, removeItem, clearCart, itemCounter } = useCartContext()

    let totalPrice = 0;
    
    return ( <>
    
    {cartList.length === 0 && 
        <div className="emptyCart-container"> <br/>
            <h2 className="checkOut-title"> Carrito vacio!</h2> <br/>
            <Link to="/">
                <button className="checkOut-btn"> Volver a la pagina principal </button>
            </Link>
        </div>}
    
    {cartList.length > 0 && 
        <div className="cart-container">
            <div className="items-cart-container">
                {cartList.map(item => <div className="product-card-cart" key={item.id}>
                                        <div>
                                            <img src={item.foto} alt="" className="product-img" width="100px"/>
                                        </div>
                                        <div className="info-container">
                                            <h3 className="product-title-cart">{item.name} </h3>
                                            <p className="product-amount"> Cantidad: {item.cant}</p>
                                            <p className="product-price">${item.precio}</p>
                                            <button onClick={() => removeItem(item.id)} className="delete-item-btn" title="Delete item"> Eliminar producto </button>
                                        </div>
                                    </div>
                                    )}
            </div>

            {cartList.map(item => { totalPrice = item.precio * item.count + totalPrice })}
            <div className="items-detail-container">
                <h2 className="checkOut-title"> Tu compra </h2>
                <div className="checkOut-description-container">
                    <p className="checkOut-description">Total items: {itemCounter()}</p>
                    <p className="checkOut-description">Total price: ${totalPrice}</p>
                </div>
                <div>
                    <Link to="/">
                        <button className="keep-shopping-btn"> Seguir comprando </button> 
                    </Link> <br/>
                    <button onClick={clearCart} className="delete-all-btn"> Eliminar Carrito </button>
                </div>
            </div>
        </div>
    }</>)
}
