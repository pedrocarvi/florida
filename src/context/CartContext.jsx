import { createContext, useState, useContext } from 'react'

const CartContext = createContext([]);

export const useCartContext = () =>{
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    // Funciones del carrito

    const isInCart = (item) =>{
        return cartList.some((cartItem) => cartItem.id === item.id)
    }
    
    const addItem = (item, count) => {

        if (isInCart(item)){
            let newCart = cartList;
            newCart.forEach((cartItem) => {
                if(cartItem.id === item.id){
                    cartItem.count += count;
                }
            });
            setCartList(newCart);
        }
        else{
            setCartList([...cartList, {...item, count}])
        }
    }

    const cartTotal = cartList.reduce((total, item) => total + item.subtotal, 0);

    const removeItem = (id) =>{
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    const clearCart = () =>{
        setCartList([])
    }

    const itemCounter = () =>{
        return cartList.reduce((accum, item) => accum = accum + item.count, 0)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            cartTotal,
            addItem,
            removeItem,
            clearCart,
            itemCounter
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider