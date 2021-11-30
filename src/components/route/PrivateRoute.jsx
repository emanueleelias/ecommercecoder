import { Route, Redirect } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const PrivateRoute = ({children}) => {
    const { cartList } = useCartContext();
    return  cartList.length === 0 ? <p>asd</p> : <Navigate to="/formulario" />;
};

export default PrivateRoute;

{/* <Component {...props} /> */}