import useCounter from '../../hooks/useCounter';
import './counter.css';


const CounterWithCustomHooks = () => {

    const {state, increment, reset, decrement } =  useCounter();

    return (
        <>
            <h1>Counter with Hook {state}</h1>
            <hr />

            <button className="btn btn-primary" onClick={() => increment(2)}>
                +1
            </button>

            <button className="btn btn-warning" onClick={reset}>
                Reset
            </button>

            <button className="btn btn-danger" onClick={() => decrement(1)}>
                -1
            </button>
        </>
    );
}

export default CounterWithCustomHooks;