import { useState } from 'react';

export default function useCounter(initialValue = 10) {
    const [first, setFirst] = useState(initialValue);

    const incrementValue = (factor = 1) => {
        setFirst(first + factor);
    }

    const decrementValue = (factor = 1) => {
        setFirst(first - factor);
    }
    const resetValue = () => {
        setFirst(initialValue);
    }
    return { first, incrementValue, decrementValue, resetValue }
}
