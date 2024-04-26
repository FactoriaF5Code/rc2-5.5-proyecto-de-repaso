import {createContext, useContext, useState} from "react";
import axios from "axios";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({children}) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const login = (user, password) =>
        axios.post("/auth/login", {user, password})
            .then(response => {
                if (response.status !== 200) {
                    throw new Error("Contraseña no válida");
                }
                setLoggedIn(true);
            })

    const value = {
        loggedIn,
        login
    }

    return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>
}

export const useAuthenticationContext = () => useContext(AuthenticationContext);