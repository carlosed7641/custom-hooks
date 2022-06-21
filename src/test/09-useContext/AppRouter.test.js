import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import AppRouter from "../../components/09-useContext/AppRouter"

describe('Pruebas en el componente <AppRouter />', () => {

    test('debe de mostrar el HomeScreen', () => {
        render(
        //<MemoryRouter >
            <AppRouter />      
        //</MemoryRouter>
        )
    })
    
})
