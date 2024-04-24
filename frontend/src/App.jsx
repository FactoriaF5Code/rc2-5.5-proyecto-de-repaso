import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [students, setStudents] = useState([]);


    useEffect(() => {
        axios.get("/api/students")
            .then( body => setStudents(body.data));
    }, []);


  return (
    <>
        {
            students.map( s => <p>{s.name}</p>)
        }
    </>
  )
}

export default App
