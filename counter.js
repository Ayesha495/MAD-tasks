import { useState } from 'react';

const [counter , setcounter] =  useState(0);

const increase = ()=> setcounter( counter + 2 );
const decrease = ()=> setcounter( counter - 2 );
const reset = ()=> setcounter(0);

function counter() {
    return(
        <div style = {{backgroundColor: counter < 5 ? 'red' : 'white'}}>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}