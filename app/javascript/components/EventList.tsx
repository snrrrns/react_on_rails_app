import React from 'react';
import { Link } from 'react-router-dom';
import { EventParams, EventListProps } from '../types';


const EventList: React.FC<EventListProps> = ({ events }) => {
  const renderEvents = (eventArray: EventParams[]) => {
    eventArray.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return eventArray.map((event) => (
      <li key={event.id}>
        <Link to={`/events/${event.id}`}>
          {event.date}
          {' - '}
          {event.type}
        </Link>
      </li>
    ));
  };

  return (
    <section>
      <h2>Events</h2>
      <ul>{renderEvents(events)}</ul>
    </section>
  );
};

export default EventList;
