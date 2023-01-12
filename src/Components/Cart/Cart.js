import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    // const total= cart.reduce((total, prd) => total+ prd.price,0)
    let total=0;
    for(let i =0; i< cart.length; i++){
        const product = cart[i];
        total= total+ product.wholePrice;
    }
    return (
    

    <div className='cart-info'>
                <div>
            <h4>Player Higher Summury:</h4>
            <p>Player Highered:{cart.length}</p>
            <p>Total Payment: {total}</p>
        </div>
    </div>
    );
};

export default Cart;