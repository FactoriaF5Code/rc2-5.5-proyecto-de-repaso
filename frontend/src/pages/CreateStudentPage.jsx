import {useState} from "react";
import { v4 as uuid} from "uuid";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const CreateStudentPage = ({showMessage}) => {

    const [name, setName] = useState("");
    const [courseName, setCourseName] = useState("");

    const navigate = useNavigate();


    const createStudent = (e) => {
        e.preventDefault();

        const newStudent = {
            id: uuid(),
            name: name,
            courseName: courseName
        };

        axios.post("/api/students", newStudent)
            .then( response => {
                showMessage(`Se ha dado de alta a ${name} en ${courseName}`);
                navigate("/");
            } )
            .catch( e => console.log("errorrrrr"))

    };

    return <form onSubmit={createStudent}
        style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "30px",
        }}
    >
        <label htmlFor="name"> Nombre:</label>
        <input id="name"
               name="name"
               placeholder={"Nombre"}
               value={name}
               onChange={ e => setName(e.target.value)}
        />
        <label htmlFor="courseName"> Curso:</label>
        <select id="courseName"
               name="courseName"
               value={courseName}
               onChange={ e => setCourseName(e.target.value)}>
            <option value="RuralCamp2">RuralCamp2</option>
            <option value="FemCodersNorte">FemCodersNorte</option>
        </select>
        <input type="submit" value="Alta"/>
    </form>;
}