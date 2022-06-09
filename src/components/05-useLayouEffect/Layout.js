import { useLayoutEffect, useRef } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './Layout.css';

const Layout = () => {

    const { counter, increment } = useCounter();
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0]; //false o extrae el valor de la data

    const pTag = useRef();

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect())
    }, [quote])


    //console.log(loading);

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />


            <blockquote className='blockquote text-right'>
                <p ref={pTag}>{quote}</p>
            </blockquote>

            <button className='btn btn-primary' onClick={increment}>
                Siguiente quote
            </button>

        </div>
    );
}

export default Layout;
