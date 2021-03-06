import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import emptyCart from '../../assets/images/emptyCart.svg';
import './cartClose.scss';


const CartClose = ({ messageTitle, message2, id }) => {
    const {clearCart} = useCartContext();
    const [idOrder, setIdOrder] = useState('');

    useEffect(() => {
        setIdOrder(id);
        clearCart();
    },[idOrder])

    return (
        <div className="container container__cartClose">
            <img src={emptyCart} alt="Imagen de carrito vacio" />
            <p>{messageTitle}</p>
            {idOrder === "" 
                ? 
                    <Link to="/">
                        <button className="button">{message2}</button>
                    </Link>
                :
                    <div className="center">
                        <p>Copia el número de orden de la compra: {idOrder}</p>
                        <Link to="/">
                            <button onClick={clearCart} className="button">{message2}</button>
                        </Link>
                    </div>
            }
        </div>
    )
}

export default CartClose;
