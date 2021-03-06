import React, { useState } from 'react';
// SCSS
import './_ItemCount.scss';

const ItemCount = ({ stock, onAdd }) => {
    const [quantity, setQuantity] = useState(1);
    
    const handlerPlus = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const handlerMinus = () => {
        setQuantity((quantity >= 2) ? quantity - 1 : quantity);
    };

    return (
        <div className="card card-main">
            <div className="card-body">
                <div className="card card-content">
                    <p onClick={handlerMinus} className="plus-minus">-</p>
                    <p id="counter-value">{quantity}</p>
                    <p onClick={handlerPlus} className="plus-minus">+</p>
                </div>
                <button className="btn" onClick={()=>onAdd(quantity)}>Comprar</button>
            </div>
        </div>
    );
};

export default ItemCount;
