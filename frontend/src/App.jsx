import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./pages/Layout.jsx";
import {Home} from "./pages/Home.jsx";
import {CreateStudentPage} from "./pages/CreateStudentPage.jsx";
import {useState} from "react";
import {AuthenticationProvider} from "./context/AuthenticationContext.jsx";
import {LoginPage} from "./pages/LoginPage.jsx";

function App() {

    const [message, setMessage] = useState("");

    const updateMessage = (msg) => setMessage(msg);

    return (
        <AuthenticationProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route element={<Layout loginPath="/login"/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/students/create"
                               element={<CreateStudentPage showMessage={updateMessage}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            {message && message.length > 0 && <div>{message}</div>}
        </AuthenticationProvider>
    )
}

export default App
