import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders application layout correctly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const button = screen.getByRole("button");
  const search = screen.getByPlaceholderText(/Enter event to search/)

  expect(button).toBeInTheDocument();
  expect(search).toBeInTheDocument();
  expect(getByText(/Search/i)).toBeInTheDocument();
});
