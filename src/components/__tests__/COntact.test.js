import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page test cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //assertions
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    //assertions
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    //assertions
    expect(inputName).toBeInTheDocument();
  });

  it("Should load input boxes inside Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    //assertions

    expect(inputBoxes.length).toBe(3);
  });
});
