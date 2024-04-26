import {Navigate, Outlet} from "react-router-dom";
import {Header} from "../components/Header.jsx";
import {useAuthenticationContext} from "../context/AuthenticationContext.jsx";


export const Layout = ({loginPath}) => {

        const { loggedIn } = useAuthenticationContext();

        return <>{
            loggedIn ?
                <>
                    <Header></Header>
                    <main>
                        <Outlet/>
                    </main>
                </> :
                <Navigate to={loginPath}/>
        }
        </>
            ;
    }
;