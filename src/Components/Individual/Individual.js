import React from 'react';
import'./Individual.css'

const Individual = (props) => {
    const { img, name, wholePrice } = props.player;
    return (
            <div className='single'> 
                    <div className='image'>
                        <img src={img} alt="" />
                    </div>


                    <div className='single-name'>
                        <h1>{name}</h1>
                        <br />
                        <br/>
                        <br />
                        <h3>${wholePrice}</h3>
                        <br/>
                        <button className='order-button' onClick={()=>props.handleAddProduct(props.player)}> Higher Me</button>
                    </div>
    
            </div>
        
    );
};

export default Individual;