import { render, screen } from "@testing-library/react";
import Sale from "./Sale.jsx";
import { describe, it, expect } from "vitest";

describe("Sale component", () => {
  it("renders correct text", () => {
    render(<Sale />);
    expect(screen.getByText("Get 20% discount with code", {exact: false})).toBeInTheDocument;
  });
});
