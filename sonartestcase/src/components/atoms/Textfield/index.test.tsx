// import { render, screen } from "@testing-library/react";
// import Input from '../Textfield/index'
// import { describe, expect, it } from "vitest";

// describe("Input Atom", () => {
//   it("renders with the correct placeholder", () => {
//     render(
//       <Input placeholder="Enter your name" value="" onChange={() => {}} />
//     );
//     const input = screen.getByPlaceholderText("Enter your name");
//     expect(input).toBeInTheDocument();
//   });

//   it("displays the correct value", () => {
//     render(
//       <Input
//         placeholder="Enter your name"
//         value="John Doe"
//         onChange={() => {}}
//       />
//     );
//     const input = screen.getByDisplayValue("John Doe");
//     expect(input).toBeInTheDocument();
//   });

//   it("matches the snapshot", () => {
//     const { asFragment } = render(
//       <Input placeholder="Enter your name" value="" onChange={() => {}} />
//     );
//     expect(asFragment()).toMatchSnapshot();
//   });
// });
import { render, screen, fireEvent } from "@testing-library/react";
import Input from '../Textfield/index';
import { describe, expect, it, vi } from "vitest";

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

  it("calls onChange with the correct value when input changes", () => {
    const handleChange = vi.fn(); // or vi.fn() if using Vitest
    render(
      <Input placeholder="Enter your name" value="" onChange={handleChange} />
    );
    const input = screen.getByPlaceholderText("Enter your name");
    
    // Simulate user typing
    fireEvent.change(input, { target: { value: 'Jane Doe' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('Jane Doe');
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(
      <Input placeholder="Enter your name" value="" onChange={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
