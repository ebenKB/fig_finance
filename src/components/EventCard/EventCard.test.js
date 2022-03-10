import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import EventCard from './EventCard';

test('renders event card correctly', () => {
  render(
    <Provider store={store}>
      <EventCard event={{}}/>
    </Provider>
  );
});

test('can render an event item', () => {
  const event = {
    title: "test event",
    isVirtual: false,
    description: "Test event for unit test",
    category: "AI",
    address: "Accra,Ghana",
    date: "2022-03-09",
  }

  render(
    <Provider store={store}>
      <EventCard event={event}/>
    </Provider>
  );

  const title = screen.getByText(event.title);
  const description = screen.getByText(event.description);
  const venue = screen.getByText(event.address);
  const date = screen.getByText(new RegExp(event.date));

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(venue).toBeInTheDocument();
  expect(date).toBeInTheDocument();
})