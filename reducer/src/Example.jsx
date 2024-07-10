import React from 'react'
import { useReducer } from 'react';
import initialstate from './initialstate';
import reducer from './reducer';
import { increment, decrement } from './action';

function Example() {
    const [state, dispatch] = useReducer(reducer, initialstate);

    const handleincrement = (id) => {
      dispatch(increment(id));
    };
    
    const handledecrement = (id) => {
      dispatch(decrement(id)); 
    };
    
    const total = state.prices.reduce((sum, item) => sum + item.value, 0);
      
    return (
      <div className="container">
        {state.prices.map((item) => (
          <div className="item" key={item.id}>
            <h1 id='none'>Price rs. {item.price}</h1>
            <p id='none'><span>Amount :</span> {item.value}</p>
            <button id='incre' onClick={() => handleincrement(item.id)}>+</button>
            <button id='decre' onClick={() => handledecrement(item.id)}>-</button>
          </div>
        ))}
        <div className='bgi'>
           <h1 className="total">Total : {total}</h1>
        </div>

      </div>
    );
}

export default Example