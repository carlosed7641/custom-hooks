import { UserContext } from "./UserContext";
import AppRouter from "./AppRouter";
import { useState } from "react";

const MainApp = () => {

    const [user, setUser] = useState({
        id: 1,
        name: 'Daniel'
    })

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <AppRouter />
        </UserContext.Provider>
    );
}

export default MainApp;