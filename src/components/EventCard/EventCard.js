import React from 'react'

const EventCard = ({event}) => {
  return (
  <li key={event.id} className="py-8 bg-slate-100 p-8 m-4 rounded">
    <div className="ml-3">
      <div className="flex justify-between items-start">
        <p className="text-sm font-medium text-gray-900">{event.title}</p>
        <p className="text-sm font-medium text-gray-900 bg-slate-200 p-2 rounded">{event.category}</p>
      </div>
      <p className="mt-2 text-xs">
        {event.virtual ? "Virtual" : "Not Virtual"}
        <span> | {event.date ? event.date.split("T")[0] : event.date}</span>
      </p>
      <p className="text-sm text-gray-500">{event.description}</p>
    </div>
  </li>
  )
}

export default EventCard;
