import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Header from './Header';

test('renders header correctly', () => {
  render(
    <Provider store={store}>
      <Header title="Test header" />
    </Provider>
  );
});


test('it renders props correctly', () => {
  const title = "Events"

  render(
    <Provider store={store}>
      <Header title={title} />
    </Provider>
  );

  expect(screen.getByText(new RegExp(title))).toBeInTheDocument();
})