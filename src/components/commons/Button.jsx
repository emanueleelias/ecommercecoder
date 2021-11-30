import React from 'react';
import './button.scss';

function Button({title}) {
    return (
        <div>
            <button
                className="button"
/*                 onClick={() =>
                onAdd(count, "Agregó al carrito", "success", productTitle)
                                                                } */
            >{title}</button>
        </div>
    )
}

export default Button;
