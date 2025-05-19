import { render, screen } from "@testing-library/react";
import Input from '../Textfield/index'
import { describe, expect, it } from "vitest";

describe("Input Atom", () => {
  it("renders with the correct placeholder", () => {
    render(
      <Input placeholder="Enter your name" value="" onChange={() => {}} />
    );
    const input = screen.getByPlaceholderText("Enter your name");
    expect(input).toBeInTheDocument();
  });

  it("displays the correct value", () => {
    render(
      <Input
        placeholder="Enter your name"
        value="John Doe"
        onChange={() => {}}
      />
    );
    const input = screen.getByDisplayValue("John Doe");
    expect(input).toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(
      <Input placeholder="Enter your name" value="" onChange={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});