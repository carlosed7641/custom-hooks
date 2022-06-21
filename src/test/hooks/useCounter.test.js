import { act, renderHook } from "@testing-library/react"
import useCounter from "../../hooks/useCounter"

describe('Pruebas en useCounter', () => {
    test('debe de retornar los valores por defecto', () => {
      
        const  { result } = renderHook( ()=> useCounter());
        const { counter, decrement, increment, reset} = result.current;
        
        expect(counter).toBe(1);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })

    test('debe de generar el counter con el valor de 100 ', () => {
        const  { result } = renderHook( ()=> useCounter(100));
        const { counter} = result.current;

        expect(counter).toBe(100);
      
    })

    test('debe de incrementar y decrementar el contador ', () => {
        const { result } = renderHook( ()=> useCounter());
        const { increment, decrement} = result.current;

        act(()=> {
            increment()
            increment(3)
            decrement()
        })

        expect(result.current.counter).toBe(4)


    })

    test('debe de resetear el contador ', () => {
        const { result } = renderHook( ()=> useCounter(50));
        const { increment, decrement, reset} = result.current;

        act(()=> {
            increment()
            increment(6)
            decrement(2)
            reset()
        })

        expect(result.current.counter).toBe(50)


    })
    
    
    
    
})
