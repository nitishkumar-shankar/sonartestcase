
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App'; // Adjust the path as necessary
import { describe, expect, it, vi } from 'vitest';

describe('App Component', () => {
  it('renders input and button', () => {
    render(<App />);
    
    // Check if the input and button are in the document
    const inputElement = screen.getByPlaceholderText(/enter some text/i);
    const buttonElement = screen.getByRole('button', { name: /submit/i });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('updates input value and alerts on button click', () => {
    // Mock the alert function
    window.alert = vi.fn();

    render(<App />);
    
    const inputElement = screen.getByPlaceholderText(/enter some text/i);
    const buttonElement = screen.getByRole('button', { name: /submit/i });

    // Simulate user typing in the input
    fireEvent.change(inputElement, { target: { value: 'Hello, World!' } });
    expect(inputElement.value).toBe('Hello, World!');

    // Simulate button click
    fireEvent.click(buttonElement);
    
    // Check if alert was called with the correct message
    expect(window.alert).toHaveBeenCalledWith('Button clicked! Input value: Hello, World!');
  });
});
