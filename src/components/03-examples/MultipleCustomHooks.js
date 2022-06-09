import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter();
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0]; //false o extrae el valor de la data

    //console.log(loading);

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading
                ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                :
                (
                    <blockquote className='blockquote text-right'>
                        <p>{quote}</p>
                        <footer className='blockquote-footer'>{author}</footer>
                    </blockquote>
                )

                    
            }

            <button className='btn btn-primary' onClick={increment}>
                Siguiente quote
            </button>
            
        </div>
    );
}

export default MultipleCustomHooks;