import NavBar from "../components/NavBar";
import { render, screen } from "@testing-library/react"
import { beforeEach, expect, test } from "vitest";

beforeEach(() => {
    render (<NavBar/>)
})

test('render NavBar component with logo', () => {
    const logoButterfly  = screen.getAllByAltText(/Logo desktop/i)
    expect(logoButterfly).toBeDefined()
})