import { useCartContext } from '../../context/CartContext';
import TableCart from './TableCart';
import Button from '../commons/Button';
/* import CartClose from '../cart/CartClose'; */
import CartClose from '../cart/CartClose';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
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
                    <CartClose messageTitle='El carrito se encuentra vacio' message2='Hace tu primera compra' id=''/>
                   
            }
        </>
    );
}

export default Cart;