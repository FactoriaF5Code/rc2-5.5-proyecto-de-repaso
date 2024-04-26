import {useContext, useState} from "react";
import {useAuthenticationContext} from "../context/AuthenticationContext.jsx";
import {useNavigate} from "react-router-dom";

export const LoginPage = () => {

    const navigate = useNavigate();

    const [ user , setUser ] = useState("");
    const [ password , setPassword ] = useState("");

    const [ message, setMessage ] = useState("");

    const { login } = useAuthenticationContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(user, password)
            .then( () => navigate("/") )
            .catch( err => {
                // console.log(err);
                setMessage("Contraseña no válida");
            });
    };

    return <form onSubmit={handleSubmit}>
        <label htmlFor="user">Usuario</label>
        <input name="user" id="user"
                value={user}
                onChange={e => setUser(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input name="password" id="password"
               value={password}
               onChange={e => setPassword(e.target.value)}
        />
        <input value="Login" type="submit"/>
        <p style={{color: "red"}}>{message}</p>
    </form>;
}