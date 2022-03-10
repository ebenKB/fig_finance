import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Search from './Search';

test('renders search correctly', () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
});


test('it has form with input and button', () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );

  const form = screen.getByTestId("form");
  const button = screen.getByRole("button");
  const input = screen.getByTestId("search");

  expect(button).toBeInTheDocument();
  expect(form).toBeInTheDocument();
  expect(input).toBeInTheDocument();
})