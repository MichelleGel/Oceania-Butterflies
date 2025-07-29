import NavBar from "../components/NavBar";
import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("NavBar", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );
    });



    test('render NavBar component with logo', () => {
        const logoButterfly = screen.getAllByAltText(/Logo desktop/i)
        expect(logoButterfly).toBeDefined()
    })

    test('Page will go to Home when clicked on the NavBar title', () => {
        const titleRoute = screen.getAllByText(/POLINIZADORAS | Mariposas Oceania/i)
        expect(titleRoute).toBeDefined()
    })

    test('', () => {
        const 
        expect()
    })
})