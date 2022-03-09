import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';

import EventCard from '../../components/EventCard/EventCard';
import { addEvents, selectEvents } from '../../features/event/EventSlice';
import { useDispatch } from 'react-redux';
import Loader from '../../components/Loader/Loader';

const Event = () => {
  const events = useSelector(selectEvents);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({page: 1, limit: 10})

  const loadEvents = async () => {
    try {
      setLoading(true);
      const response = await Axios.get(`http://localhost:8080/event?page=${query.page}&limit=${query.limit}`);
      dispatch(addEvents(response.data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  const handleLoadMore = () => {
    setQuery({
      ...query,
      page: query.page + 1
    })
  }

  useEffect(() => {
    loadEvents();
  }, [query.page])

  return (
    <div className="">
      {loading ? <Loader text="Fetching events..."/> : null}
      <ul className="container md:mx-auto px-40 divide-y divide-gray-100">
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </ul>
      <div className="container md:mx-auto px-44 divide-y divide-gray-100 text-right">
        <button 
          className="border-2 border-slate-200 p-2 rounded"
          onClick={handleLoadMore}
        >Load more</button>
      </div>
    </div>
  )
}

export default Event;