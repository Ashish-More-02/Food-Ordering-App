import { render, screen } from "@testing-library/react";
import Contact from "../Contact.js";
import "@testing-library/jest-dom";

// describe is a block that contains multiple test cases 
describe("Contact us page test cases", () => {
  test("should correctly render Contact us page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  // `it` and `test` are one and the same
  it("should load input box , and textarea in Contact component", () => {
    render(<Contact />);

    // we will get an array of multiple items
    const input = screen.getAllByRole("textbox");

    //Assertion
    expect(input.length).toBeGreaterThan(1);
  });
});
