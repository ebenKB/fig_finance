import React from 'react';
import { useSelector } from 'react-redux';
import EventCard from '../../components/EventCard/EventCard';
import { selectEvents } from '../../features/event/EventSlice';

const Event = () => {
  const events = useSelector(selectEvents);

  return (
    <div className="">
      <ul className="container md:mx-auto px-40 divide-y divide-gray-100">
        {events.map((event) => (
          <EventCard event={event} key={event.id}/>
        ))}
      </ul>
    </div>
  )
}

export default Event;