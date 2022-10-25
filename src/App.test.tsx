import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './tests/test-utils';

jest.mock('./appSettings.json', () => ({
  get isUnderConstrucionEnabled() {
    return false;
  },
}));

describe('App', () => {
  test('renders learn react link', () => {
    renderWithProviders(<App />);
    const linkElement = screen.getByText(/App/i);
    expect(linkElement).toBeInTheDocument();
  });
});
