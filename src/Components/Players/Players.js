import React, { useState } from 'react';
import './Players.css'
import fakedata from'../../fakedata/players.json';
import Individual from '../Individual/Individual';
import Cart from './../Cart/Cart';

const Players = () => {
    const [players,] =useState(fakedata);
    const[cart, setCart ]= useState([]);

    const handleAddProduct= (playerdata) =>{
        console.log('product Added', playerdata)
        const newCart=[...cart,playerdata];
        setCart(newCart)
    }

    return (
        <div className='player-container'>
            <div className='individual-container'>
            {
                players.map(player => <Individual handleAddProduct={handleAddProduct} player={player}></Individual>)
            }
            </div>


            <div className='cart-container' >
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Players;