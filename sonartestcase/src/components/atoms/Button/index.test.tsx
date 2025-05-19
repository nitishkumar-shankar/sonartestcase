// import { render, screen, fireEvent } from '@testing-library/react';
// import AppButton from '../Button';
// import { describe, it, expect, vi } from 'vitest'; // this line ensures no TS errors

// describe('AppButton', () => {
//   it('renders with label', () => {
//     render(<AppButton label="Submit" />);
//     expect(screen.getByText('Submit')).toBeInTheDocument();
//   });

//   it('calls onClick when clicked', () => {
//     const mockFn = vi.fn();
//     render(<AppButton label="Submit" onClick={mockFn} />);
//     fireEvent.click(screen.getByText('Submit'));
//     expect(mockFn).toHaveBeenCalledTimes(1);
//   });
// });
import { render, screen, fireEvent } from '@testing-library/react';
import AppButton from '../Button';
import { describe, it, expect, vi } from 'vitest'; // this line ensures no TS errors

describe('AppButton', () => {
  it('renders with label', () => {
    render(<AppButton label="Submit" />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const mockFn = vi.fn();
    render(<AppButton label="Submit" onClick={mockFn} />);
    fireEvent.click(screen.getByText('Submit'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('does not throw an error when onClick is not provided', () => {
    render(<AppButton label="Submit" />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
    // Just rendering the button without onClick should not throw an error
  });
});
