import { render, screen } from "@testing-library/react";
import Cart from "./Cart.jsx";
import { describe, it, expect } from "vitest";



const cart = [
    {id: 1, title: 'product1', price: 5, description: 'description', image: 'image', quantity: 1}, 
    {id: 2, title: 'product2', price: 10, description: 'description', image: 'image', quantity: 2}
]

describe("Navbar component", () => {
  
    it("renders correct total amount", () => {
    
    render(
    <Cart cart={cart} />
    )

    expect(screen.getByText('$ 25.00')).toBeInTheDocument;
  });

    it("renders correct text", () => {
        
        render(
            <Cart cart={cart} />
            )
    
    expect(screen.getByText('product1', {exact: false})).toBeInTheDocument;
    expect(screen.getByText('product2', {exact: false})).toBeInTheDocument;
    expect(screen.getByText('$ 10.00')).toBeInTheDocument;
    expect(screen.getAllByText('$ 5.00')).toBeInTheDocument;
    expect(screen.queryByText('product3', {exact: false})).not.toBeInTheDocument;

    });
});
