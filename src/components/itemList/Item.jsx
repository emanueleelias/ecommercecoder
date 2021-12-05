import { Link } from 'react-router-dom';
import Button from '../commons/Button';
import './item.scss';

const Item = ({ id, productTitle, productImage, productAltImage, price, stock, priceHigh }) => {
    return (
        <article className='product'>

            <div className='product__img'>
                <div className='product__img-box'>
                    {
                        stock === 0 
                        ?
                            <img src={productImage} alt={productAltImage} />
                        :
                            <Link to={`/detalle/${id}`}>
                                <img src={productImage} alt={productAltImage} />
                            </Link>
                    }
                </div>
            </div>
            
            <div className='product__info'>
                
                <h4>{productTitle}</h4>
                {
                    stock === 0 
                    ?
                        <p className='discount'>Sin disponibilidad</p>
                    :
                        <p>Disponible {stock} unidades</p>
                }
                
                <hr />
                <div className='product__info-price'>
                    <p className='price__desc'><span>${priceHigh}</span><mark>${price}</mark></p>
                </div>
                <hr />
                <div className='product__info-button'>
                    {
                    stock === 0 
                    ? 
                        <p>¡Ups volvé pronto a revisar este producto!</p>
                    :
                        <Link to={`/detalle/${id}`}>
                            <Button title='Más info'/>
                        </Link>
                    }
                </div>

            </div>
        </article>
    );
};

export default Item;
