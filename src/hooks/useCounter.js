import { useState } from "react";

const useCounter = (initialState = 1) => {
    
    const [state, setState] = useState(initialState);

    const increment = (factor = 1) => {
        setState((current) => current + factor);
    }

    const reset = () => {
        setState(initialState);
    }

    const decrement = ( factor = 1) => {
        setState((current) => current - factor);
    }

    return {
        counter: state,
        increment,
        reset,
        decrement
    }

}

export default useCounter;