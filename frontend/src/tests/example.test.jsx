import {describe, it, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import App from "../App.jsx";

describe("La aplicación", () => {
    render(<App/>);

    it(" muestra un mensaje ", () => {
        expect(screen.getByText(/Desplegando automáticamente/)).toBeInTheDocument()
    })
})

