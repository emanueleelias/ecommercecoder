import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';
import ItemCount from './ItemCount';
import Spinner from '../commons/Spinner';
import 'react-toastify/dist/ReactToastify.css';
import './itemDetail.scss';


const CustomToast = ({ total, mensaje, product }) => {
    const style = {
        fontSize: 15,
        color: 'black'
    }; 

    return (
        <div>
            <p style={style}>{`${mensaje} ${total} producto/s correspondientes al ${product}`}</p>
        </div>
    )
}

toast.configure();

const ItemDetail = (props) => {
    const { addItem } = useCartContext();
    const { stock, initial, altImage, title, description, image, price } = props.product;
    const { loading } = props;
    const [total, setTotal] = useState(1);


    const notify = (total, mensaje, type, product) => {
        type === 'error' 
        ? 
            toast.warn(<CustomToast total={total} mensaje={mensaje} product={product}/>, {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 3000})
        :
            toast.success(<CustomToast total={total} mensaje={mensaje} product={product}/>, {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 3000})    
    }

    const onAdd = (total, mensaje, type, product) => {
        setTotal(total);
        addItem({props, amount: total});
        notify(total, mensaje, type, product);
    };


    return (
        <>
            {loading
            ?
                <Spinner />
            :
                <div className='item-detail'>
            
                    <div className='item-detail__img'>
                        <div className='item-detail__img-box'>
                            <img src={image} alt={altImage} />
                        </div>
                    </div>

                    <section className='item-detail__texts'>
                        <h3>{title}</h3>
                        <p><span>Descripción: </span>{description}</p>
                        <p><span>Precio: </span>$ {price}.</p>
                        <ItemCount
                            productStock={stock}
                            productInitial={initial}
                            onAdd={onAdd}
                            toast={notify}
                            productTitle={title}
                        />
                    </section>
                </div>
            }
        </>
    );
};

export default ItemDetail;
