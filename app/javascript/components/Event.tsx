import React from 'react';
import { useParams } from 'react-router-dom';
import { EventListProps } from '../types';

const Event: React.FC<EventListProps> = ({ events }) => {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));

  if (!event) return <div>Event not found</div>;

  return (
    <>
      <h2>
        {event.date}
        {' - '}
        {event.type}
      </h2>
      <ul>
        <li>
          <strong>Type:</strong> {event.type}
        </li>
        <li>
          <strong>Date:</strong> {event.date}
        </li>
        <li>
          <strong>Title:</strong> {event.title}
        </li>
        <li>
          <strong>Speaker:</strong> {event.speaker}
        </li>
        <li>
          <strong>Host:</strong> {event.host}
        </li>
        <li>
          <strong>Published:</strong> {event.published ? 'yes' : 'no'}
        </li>
      </ul>
    </>
  );
};

export default Event;
