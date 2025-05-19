
import { createRoot } from 'react-dom/client';
import App from './App'; // Adjust the path as necessary
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Main Entry Point', () => {
  it('renders the App component', () => {
    const rootElement = document.createElement('div');
    rootElement.setAttribute('id', 'root');
    document.body.appendChild(rootElement);
    
    const root = createRoot(rootElement);
    root.render(<App />);

    // Check if the App component is rendered by looking for elements within it
    // Use a timeout to allow for rendering
    setTimeout(() => {
      const inputElement = screen.getByPlaceholderText(/enter some text/i);
      const buttonElement = screen.getByRole('button', { name: /submit/i });

      expect(inputElement).toBeInTheDocument();
      expect(buttonElement).toBeInTheDocument();
    }, 0);
  });
});