import Axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loadEventsFromAPI } from '../../api/Event';
import { addEvents } from '../../features/event/EventSlice';

const Search = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchEvents();
  }

  const searchEvents = async () => {
    let response = null;
    let data= [];
    try {
      setLoading(true);
      if(search.length > 0) {
        response = await Axios.get(`http://localhost:8080/event/search?q=${search}`);
        data=response.data;
      } else {
        // load events with default params
        response = await loadEventsFromAPI();
        data=response.data.events
      }
      dispatch(addEvents({data}));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  const handleInputChange = (e) => {
    const {value} = e.target;
    setSearch(value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="search" 
          className="rounded p-2"
          placeholder="Enter event to search"
          onChange={handleInputChange}
          value={search}
        />
          <button 
            className="text-white rounded ml-4" 
            type="submit">{!loading ? "Search" : "Loading"}
          </button>
      </form>
    </div>
  )
}

export default Search