import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {

    //estado con la lista de productos que se agregan al carrito.
    const [cartList, setCartList] = useState([]);

    //funcion que agrega items no duplicados a el estado carList
    //faltaria agregar la logica para que no agregue más productos de los que tiene en stock
    function addItem(items) {
        //La variable amount contiene la cantidad de productos seleccionados
        const cartListNoDuplicates = [...cartList];
        if (cartListNoDuplicates.find((product) => product.id === items.props.product.id) !== undefined) {
            cartListNoDuplicates.find((product) => product.id === items.props.product.id).amount += items.amount;
            cartListNoDuplicates.find((product) => product.id === items.props.product.id).stock -= items.amount;
            setCartList(cartListNoDuplicates);
        } else {
            items.props.product.stock -= items.amount;
            setCartList([...cartList, { ...items.props.product, amount: items.amount }]);
        }
    }

    //Remueve items individuales
    const removeItem = (itemId) => {
        const cartListDeleteItem = cartList.filter((product) => product.id !== itemId);
        setCartList([...cartListDeleteItem]);
    };

    //Borra todos los items del carrito.
    const clearCart = () => {
        setCartList([]);
    };


    //Devuelve verdadero si el imtem se encuentra dentro del carrito, de lo contrario falso.
    const isInCart = (itemId) => cartList.some( (product) => product.id === itemId);

    //Devuelve la cantidad total de productos en el carrito
    const itemTotal = () => cartList.reduce((total, item) => total + item.amount, 0);

    //Devuelve el precio total de los productos en el carrito.
    const priceTotal = () => cartList.reduce((total, item) => total + item.amount * item.price, 0);

    return (
        <CartContext.Provider
        value={{
            cartList,
            addItem,
            clearCart,
            removeItem,
            itemTotal,
            priceTotal,
            isInCart }}>
        {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
