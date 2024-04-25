import {describe, it, expect, beforeAll} from "vitest";
import {configure, render, screen, waitFor} from "@testing-library/react";
import App from "../App.jsx";
import {setupServer} from "msw/node";
import {http, HttpResponse} from "msw";
import {userEvent} from "@testing-library/user-event";

configure({asyncUtilTimeout: 5000});

const server = setupServer(
    http.post("/api/students", () => {
        return HttpResponse.json({
            studentName: "Pepito",
            course: "RuralCamp2"
        });
    })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe("La aplicación", () => {

    it(" nos permite dar de alta a un alumno ", async () => {
        render(<App/>);

        await userEvent.click(screen.getByText(/Alta de Alumnos/));

        // entramos en la página de nuevo estudiante
        let nameInput = await screen.findByLabelText("/Nombre/");
        await userEvent.type(nameInput, "Pepito");

        let courseSelect = await screen.findByLabelText("/Curso/");
        await userEvent.selectOptions(courseSelect, "RuralCamp2");

        await userEvent.click(screen.getByText("Alta"));

        expect(await screen.findByText(/Se ha dado de alta a Pepito en RuralCamp2/));
    })
})

