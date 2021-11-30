import Button from '../commons/Button';
import { Link } from 'react-router-dom';
import './item.scss';

const Item = ({id, productTitle, productImage, productAltImage, price, stock}) => {
    return (
        <article className='product'>

            <div className='product__img'>
                <div className='product__img-box'>
                    <img src={productImage} alt={productAltImage} />
                </div>
            </div>
            
            <div className='product__info'>
                
                <h4>{productTitle}</h4>
                
                <p>Disponible {stock} unidades</p>

                <hr />

                <div className='product__info-price'>
                    <p className='price__desc'><span>$1900</span><mark>${price}</mark></p>
                </div>

                <hr />
  
                <div className='product__info-button'>
                    {
                    stock === 0 
                    ? 
                        <p>Sin stock</p>
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
