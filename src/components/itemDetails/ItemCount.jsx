import { useState, useRef } from 'react';
import { VscAdd, VscRemove} from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import './itemCount.scss';

const InputCart = ({ count, onAdd, productTitle, referencia }) => {
    return (
        <button
            className='button'
            onClick={() =>
                onAdd(count, 'Agregó al carrito', 'success', productTitle, referencia)
            }>
            Agregar al Carrito
        </button>
    );
};

const InputBuy = () => {
    return (
        <div className='containerButtons'>
            <Link to='/'>
                <button className='button'>Seguir comprando</button>
            </Link>
            <Link to='/cart'>
                <button className='button'>Terminar Compra</button>
            </Link>
        </div>
    );
};

const ItemCount = (children) => {
    const { productStock, productInitial = 1, onAdd, toast, productTitle } = children;
    const [count, setCount] = useState(productInitial);
    const [inputType, setInputType] = useState('input');
    const referencia = useRef();
    const handleInterchangeability = (e) => {
        setInputType('buy');
    };


    const onIncrement = (e) => {
        if (count < productStock) {
            setCount(count + 1);
            e.stopPropagation();
        } else {
            toast(
                productStock,
                'Sin stock, la cantidad de máxima es de',
                'error',
                productTitle,
                referencia
                );
                e.stopPropagation();
        }
    }

    const onDecrement = (e) => {
        if (count <= productInitial) {
            toast(
                productInitial,
                'Puede seleccionar como mínimo solo',
                'error',
                productTitle,
                referencia
            );
            e.stopPropagation();
        } else {
            setCount(count - 1);
            e.stopPropagation();
        }
    }
  
    return (
        <div className='container-count'>
            <div onClick={handleInterchangeability}>
                {inputType === 'input' ? (
                    <> 
                        <div className='count'>
                            <button onClick={onDecrement}>
                                <VscRemove />
                            </button>
                            <span>{count}</span>
                            <button onClick={onIncrement}>
                                <VscAdd />
                            </button> 
                        </div>
                        <InputCart
                            count={count}
                            onAdd={onAdd}
                            productTitle={productTitle}
                            referencia={referencia}
                        />
                    </>
                ) : (
                    <InputBuy />
                )}
            </div>

            <div ref={referencia} id='snackbar'></div>
        </div>
    );
};

export default ItemCount;
