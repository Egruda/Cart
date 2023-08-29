import { render, screen } from "@testing-library/react";
import Shop from "./Shop.jsx";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";


const items = [
    {id: 1, title: 'product1', price: 5, description: 'description', image: 'image', quantity: 0}, 
    {id: 2, title: 'product2', price: 10, description: 'description', image: 'image', quantity: 0}
]



describe("Shop component", () => {
  
    it("renders correctly when loading", () => {
        const loading = true;
        const error = false;
    render(
    <Shop items={items} setItems={()=>{}} loading={loading} error={error}  />
    )

    expect(screen.getByText('loading', {exact: false})).toBeInTheDocument;
  });

    it("renders correctly when fetch fails", () => {
        const loading = false;
        const error = 'server error';
        render(
            <Shop items={items} setItems={()=>{}} loading={loading} error={error}  />
            )
    
    expect(screen.getByText('server', {exact: false})).toBeInTheDocument;

    });

    it("setItems function is called when clicked", async () => {
        const setItems= vi.fn();
        const user = userEvent.setup();
        const loading = false;
        const error = null;

        render(
            <Shop items={items} setItems={setItems} loading={loading} error={error}  />
        )
        
        const button = screen.getAllByRole("button", { name: "-"});

        await user.click(button[1]);
        await user.click(button[1]);

        expect(setItems).toHaveBeenCalledTimes(2);

    })

    it("setItems function is not called when clicked", async() => {
        const setItems= vi.fn();
        const loading = false;
        const error = null;

        render(
            <Shop items={items} setItems={setItems} loading={loading} error={error}  />
        )
        
        expect(setItems).not.toHaveBeenCalled();

    })
});
