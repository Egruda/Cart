import { render, screen } from "@testing-library/react";
import Home from "./Home.jsx";
import { describe, it, expect } from "vitest";

describe("Home component", () => {
  it("renders correct text", () => {
    render(<Home />);
    expect(screen.getByText("True to You!", {exact: false})).toBeInTheDocument;
  });
});
