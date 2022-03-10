import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Loader from './Loader';

test('renders loader correctly', () => {
  render(
    <Provider store={store}>
      <Loader text="Loading" />
    </Provider>
  );
});

test('it renders loading text', () => {
  const text ="Loading";

  render(
    <Provider store={store}>
      <Loader text={text} />
    </Provider>
  );

  expect(screen.getByText(new RegExp(text))).toBeInTheDocument();
})