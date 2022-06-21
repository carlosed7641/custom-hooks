import { fireEvent, render, screen } from "@testing-library/react";
import TodoListItem from "../../components/08-useReducer/TodoListItem";

describe('Pruebas en <TodoListItem />', () => {

    const todo = {
        id: 1,
        desc: 'Comprar arroz',
        done: false
    }

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    //Resetea las funciones cuando se termina de ejecutar una prueba
    beforeEach(()=> jest.clearAllMocks());

    test('debe de mostrar el TODO pendiente', () => {

        render(
        <TodoListItem todo={todo}
             handleToggle={handleToggle} 
             handleDelete={handleDelete}
        />
        )


        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item');


    })

    test('debe de mostrar el TODO completado ', () => {

        todo.done = true;

        render(
            <TodoListItem todo={todo}
                 handleToggle={handleToggle} 
                 handleDelete={handleDelete}
            />
        )


        const pElement = screen.getByLabelText('parraf');
        expect(pElement.className).toContain('complete');
    })

    test('Se debe llamar el DeleteTodo cuando se hace click', () => {
        render(
            <TodoListItem todo={todo}
                 handleToggle={handleToggle} 
                 handleDelete={handleDelete}
            />
        )

        const btn = screen.getByRole('button');
        fireEvent.click(btn);

        expect(handleDelete).toHaveBeenCalledWith(1);
    })
    
    
    
})
