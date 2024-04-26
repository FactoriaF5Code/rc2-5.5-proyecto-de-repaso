import {describe, it, expect, beforeAll} from "vitest";
import {configure, render, screen, waitFor} from "@testing-library/react";
import App from "../App.jsx";
import {setupServer} from "msw/node";
import {http, HttpResponse} from "msw";
import {userEvent} from "@testing-library/user-event";
import {request} from "axios";

configure({asyncUtilTimeout: 5000});

const server = setupServer(
    http.post("/api/students", () => {
        return HttpResponse.json({
            studentName: "Pepito",
            course: "RuralCamp2"
        });
    }),

    http.post("/auth/login", async ({request}) => {

        const {user, password} = await request.json();

        if (user === "admin" && password === "password") {
            return new HttpResponse(null, {
                status: 200
            });
        }

        return new HttpResponse(null, {status: 401});
    })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe("La aplicación", () => {

    it(" no nos permite hacer nada si no estamos logueadas", async () => {
        render(<App/>);

        let userInput = screen.getByLabelText(/Usuario/);
        await userEvent.type(userInput, "admin");

        let passwordInput = await screen.findByLabelText(/Contraseña/);
        await userEvent.type(passwordInput, "contraseñaNoValida");

        await userEvent.click(screen.getByText(/Login/));

        expect(screen.getByText(/Contraseña no válida/)).toBeInTheDocument()

    })

    it(" nos permite dar de alta a un alumno ", async () => {
        render(<App/>);

        let userInput = screen.getByLabelText(/Usuario/);
        await userEvent.type(userInput, "admin");

        let passwordInput = await screen.findByLabelText(/Contraseña/);
        await userEvent.type(passwordInput, "password");
        await userEvent.click(screen.getByText(/Login/));

        await userEvent.click(screen.getByText(/Alta de alumnos/));

        // entramos en la página de nuevo estudiante
        let nameInput = screen.getByLabelText(/Nombre/);
        await userEvent.type(nameInput, "Pepito");

        let courseSelect = await screen.findByLabelText(/Curso/);
        await userEvent.selectOptions(courseSelect, "RuralCamp2");

        await userEvent.click(screen.getByText("Alta"));

        expect(screen.getByText(/Se ha dado de alta a Pepito en RuralCamp2/));
    })
})

