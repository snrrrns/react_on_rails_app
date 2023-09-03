import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { EventParams } from '../types';

type EventListProps = {
  events: EventParams[];
};

const EventList: React.FC<EventListProps> = ({ events }) => {
  const renderEvents = (eventArray: EventParams[]) => {
    eventArray.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return eventArray.map((event) => (
      <li key={event.id} className="hover:bg-orange-100">
        <NavLink to={`/events/${event.id}`} className="block border-b border-gray-300 py-2 px-1">
          {event.date}
          {' - '}
          {event.type}
        </NavLink>
      </li>
    ));
  };

  return (
    <section className="bg-gray-100 p-4 h-fit">
      <h2 className="text-xl font-medium pb-2 px-1">
        Events
        <Link to="/events/new" className="text-blue-600 text-sm float-right font-normal pt-1">
          New Event
        </Link>
      </h2>
      <ul>{renderEvents(events)}</ul>
    </section>
  );
};

export default EventList;
