import { useContext } from "react";
import { UserContext } from "./UserContext";

const HomeScreen = () => {

    const { user } = useContext(UserContext);
    console.log(user);

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />
        </div>
    );
}

export default HomeScreen;