import { memo } from 'react'
import Item from './Item';
import Spinner from '../commons/Spinner';
import './itemList.scss';

const ItemList = memo(({ products, loading }) => {
    return (
        <>
            {loading ? (
                    <Spinner />
                ) : (
                    <section className='container products'>
                        <div className='products__grid'>
                            {products.map((res) => {
                                return <Item key={res.id} id={res.id} stock={res.stock} initial={res.initial} productTitle={res.title} productImage={res.image}  productAltImage={res.altImage}  price={res.price} />
                            })}
                        </div>
                    </section>
            )}
        </>
    );
});

export default ItemList;