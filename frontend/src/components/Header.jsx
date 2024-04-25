import {Link} from "react-router-dom";

export const Header = () => <header style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottom: "1px solid gray",
    backgroundColor: "lightgray",
    padding: "10px"
}}>
    <Link to="/students/create">Alta de alumnos</Link>
</header>