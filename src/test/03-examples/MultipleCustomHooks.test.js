import { fireEvent, render, screen } from "@testing-library/react"
import MultipleCustomHooks from "../../components/03-examples/MultipleCustomHooks"
import useCounter from "../../hooks/useCounter";
import useFecth from '../../hooks/useFetch';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

   

    test('dede mostrar el componente por defecto', () => {

        const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
           counter: 1,
           increment: mockIncrement
        });

        useFecth.mockReturnValue({
            loading: true,
            data: null
        })

        render(<MultipleCustomHooks />)
        
        expect(screen.getByText('Loading...'))
        expect(screen.getByText('BreakingBad Quotes'))

    })

    test('debe de mostrar un Quote ', () => {

        const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
           counter: 1,
           increment: mockIncrement
        });

        useFecth.mockReturnValue({
            loading: false,
            data: [{author: 'Carlos', quote: 'Hola Mundo'}]
        })


        render(<MultipleCustomHooks />)
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Carlos')).toBeTruthy();
    })

    test('debe de llamar la función de incrementar  ', () => {

        const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
           counter: 1,
           increment: mockIncrement
        });

        // beforeEach(()=> {
        //     jest.clearAllMocks();
        // })
    
        useFecth.mockReturnValue({
            loading: false,
            data: [{author: 'Carlos', quote: 'Hola Mundo'}]
        })

    
        render(<MultipleCustomHooks />)
        const nextButton = screen.getByRole('button', {name: 'Siguiente quote'})
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();

    })
    
    
    
})
