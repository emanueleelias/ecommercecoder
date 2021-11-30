import { ImCart } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './cartWidget.scss';

const CartWidget = () => {
    const { itemTotal } = useCartContext();

    return (
        <Link to='/cart' className="nav-cart">
            <ImCart className='icon'/>  
            <span>{itemTotal()}</span>   
        </Link>
    );
};

export default CartWidget;
