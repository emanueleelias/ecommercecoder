import { useCartContext } from '../../context/CartContext';
import { useState  } from 'react';
import { getFirestore } from '../../service/getFirestore';
import TableCart from './TableCart';
import Button from '../commons/Button';
import firebase from 'firebase'
import 'firebase/firestore'
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import CartClose from './CartClose';
import './cart.scss';


const Cart = () => {
    const { cartList, priceTotal, clearCart, removeItem} = useCartContext();

    return (
        <>
            {
                cartList.length !== 0 
                ?
                    <div className='container-cart'>

                        <TableCart clearCart={clearCart} cartList={cartList} priceTotal={priceTotal} removeItem={removeItem}/>
                        <Link to={`/formulario`}> 
                            <Button title="Terminar compra"/>
                        </Link>
                     
                    </div>
                :
                    <p>asdasdas</p>
                   
            }
        </>
    );
}

export default Cart;

 {/* <CartClose messageTitle='¡El carrito esta vacio!' message2='Mira nuestros productos' id={1} img='./emptyCart.svg'/> */}

{/* <div>
{idOrder !== '' 
    &&
        <CartClose messageTitle='Felicidades por su compra' message2='Seguir comprando' id={idOrder} />
} 
</div>
 */}