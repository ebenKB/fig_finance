import React from 'react'

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="search" 
          className="rounded p-2"
          placeholder="Enter event to search" />
          <button 
          className="text-white rounded ml-4" 
          type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search