import {Outlet} from "react-router-dom";
import {Header} from "../components/Header.jsx";


export const Layout = () => (
    <>
        <Header></Header>
        <main>
            <Outlet/>
        </main>
    </>
);