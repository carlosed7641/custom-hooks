import { fireEvent, render, screen } from "@testing-library/react"
import LoginScreen from "../../components/09-useContext/LoginScreen"
import { UserContext } from "../../components/09-useContext/UserContext";

describe('Pruebas en <LoginScreen />', () => {

    const setUser = jest.fn();

  test('debe de mostrar el componente sin el usuario ', () => {

    render(
        <UserContext.Provider value={{setUser}}>
            <LoginScreen />)
        </UserContext.Provider>
    )

    screen.debug();

  })

  test('debe de llamar el setUser cuando damos click', () => {

    const user = {
        id: 123,
        name: 'Carlos'
    }
    render(
        <UserContext.Provider value={{setUser}}>
            <LoginScreen />)
        </UserContext.Provider>
    )

    const btn = screen.getByRole('button');

    fireEvent.click(btn);

    expect(setUser).toHaveBeenCalledWith(user)

  })
  
  
})

