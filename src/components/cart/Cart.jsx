import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import TableCart from './TableCart';
import Button from '../commons/Button';
import CartClose from '../cart/CartClose';
import 'react-toastify/dist/ReactToastify.css';
import Fade from 'react-reveal/Fade';
import './cart.scss';

const Cart = () => {
    const { cartList, priceTotal, clearCart, removeItem} = useCartContext();
    return (
        <>
            {
                cartList.length !== 0 
                ?
                    <Fade right>                
                        <div className='container-cart'>

                            <TableCart clearCart={clearCart} cartList={cartList} priceTotal={priceTotal} removeItem={removeItem}/>
                            <Link to={`/formulario`}> 
                                <Button title="Terminar compra"/>
                            </Link>
                        
                        </div>
                    </Fade>
                :
                    <CartClose messageTitle='El carrito se encuentra vacio' message2='Hace tu primera compra' id=''/>
                   
            }
        </>
    );
}

export default Cart;