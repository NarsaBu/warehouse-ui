import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/consumable';

export default function Counter() {
    const count = useSelector((state) => state.consumable.value);
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}
