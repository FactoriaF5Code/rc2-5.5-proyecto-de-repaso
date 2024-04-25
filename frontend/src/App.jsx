import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./pages/Layout.jsx";
import {Home} from "./pages/Home.jsx";
import {CreateStudentPage} from "./pages/CreateStudentPage.jsx";
import {useState} from "react";

function App() {

  const [message, setMessage] = useState("");

  const updateMessage = (msg) => setMessage(msg);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/students/create"
                   element={<CreateStudentPage showMessage={updateMessage}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      { message && message.length > 0 && <div>{message}</div>}
    </>
  )
}

export default App
