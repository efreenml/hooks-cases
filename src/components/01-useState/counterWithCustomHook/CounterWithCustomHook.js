import React from 'react'
import useCounter from '../../../hooks/useCounter';
export default function CounterWithCustomHook() {
    const { first, incrementValue, decrementValue, resetValue } = useCounter(5);
    //    const values = useCounter(0);
    return (
        <>
            <h1>counter with hook: {first} </h1>
            <hr />
            <button
                className='btn'
                onClick={() => {
                    incrementValue(2);
                }}
            >+1</button>
            <button
                className='btn'
                onClick={() => {
                    resetValue();
                }}
            >reset</button>
            <button
                className='btn'
                onClick={() => {
                    decrementValue(3);
                }}
            >-1</button>

        </>
    )
}
