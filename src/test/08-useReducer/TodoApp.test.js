import { render, screen } from "@testing-library/react"
import TodoApp from "../../components/08-useReducer/TodoApp"



describe('Pruebas en <TodoApp />', () => {
    test('debe de mostrar el componente correctamente', () => {
        render(<TodoApp />)
        const h1 = screen.getByRole("heading", {level: 1})
        expect(h1.innerHTML).toContain('TodoApp (0)')
    })
    
})
