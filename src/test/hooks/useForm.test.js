import { act, renderHook } from "@testing-library/react"
import useForm from "../../hooks/useForm";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Carlos',
        emial: 'carlos@hotmail.com'
    }

    test('debe de regresar la información por defecto ', () => {
        const { result } = renderHook(()=> useForm(initialForm));
        //console.log(result.current)
        const [values, handleInputChange, reset] = result.current;

        act(()=> {
            handleInputChange({target: {name: 'name', value: 'Carlos' }})
        })

        //expect(result.current).toBe('Carlos');


    })
    
})
