import { render, screen } from "@testing-library/react"
import HomeScreen from "../../components/09-useContext/HomeScreen"
import { UserContext } from "../../components/09-useContext/UserContext";


describe('Pruebas en <HomeScreen />', () => {
  test('debe mostrar el componente sin el usuario ', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <HomeScreen />
            </UserContext.Provider>
        );
        
  })

  test('debe de mostrar el componente con el usuario', () => {

        const user = {
            name: 'Carlos'
        }
        render(
            <UserContext.Provider value={{user}}>
                <HomeScreen />
            </UserContext.Provider>
        );

       const h1 = screen.getByRole('heading');
       expect(h1.innerHTML).toContain(user.name);

  })
  
  
})
