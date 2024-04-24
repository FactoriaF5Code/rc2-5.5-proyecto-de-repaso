import {describe, it, expect, beforeAll} from "vitest";
import {configure, render, screen, waitFor} from "@testing-library/react";
import App from "../App.jsx";
import {setupServer} from "msw/node";
import {http, HttpResponse} from "msw";

configure({asyncUtilTimeout: 5000});

const server = setupServer(
    http.get("/api/students", () =>
        HttpResponse.json([
            {
                id: "9573ac55-1ac7-4583-82da-067ceff5dc0a",
                name: "Jaimito"
            },
            {
                id: "3442fd9a-a606-4056-8bb1-70bc53681a51",
                name: "Luisa"
            }
        ])
    )
);


beforeAll(() => server.listen());
afterAll(() => server.close());

describe("La aplicación", () => {

    it(" muestra los nombres de los alumnos ", () => {
        render(<App/>);

        waitFor(() => {
                expect(screen.getByText(/Jaimito/)).toBeInTheDocument();
                expect(screen.getByText(/Jaimito/)).toBeInTheDocument();
            }
        );
    })
})

