import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar.jsx";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";


const cart = [
    {id: 1, title: 'product1', price: 5, description: 'description', image: 'image', quantity: 1}, 
    {id: 2, title: 'product2', price: 10, description: 'description', image: 'image', quantity: 2}
]

describe("Navbar component", () => {
  
    it("renders correct number of products in cart", () => {
    
    render(
    <MemoryRouter>
    <Navbar cart={cart} />
    </MemoryRouter>
    )

    expect(screen.getByText(3, {exact: false})).toBeInTheDocument;
  });

    it("renders correct text", () => {
        
        render(
            <MemoryRouter>
            <Navbar cart={cart} />
            </MemoryRouter>
            )
    
    expect(screen.getByText('Shop', {exact: false})).toBeInTheDocument;
    expect(screen.getByText('Home', {exact: false})).toBeInTheDocument;

    });
});
