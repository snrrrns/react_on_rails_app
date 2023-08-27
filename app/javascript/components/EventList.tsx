import React from 'react';

export type Event = {
  id: number;
  type: string;
  date: string;
  title: string;
  speaker: string;
  host: string;
  published: string;
};

type EventListProps = {
  events: Event[];
};

const EventList: React.FC<EventListProps> = ({ events }) => {
  const renderEvents = (eventArray: Event[]) => {
    eventArray.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return eventArray.map((event) => (
      <li key={event.id}>
        {event.date}
        {' - '}
        {event.type}
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
