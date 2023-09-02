import React from 'react';
import { useParams } from 'react-router-dom';
import { EventListProps } from '../types';

const Event: React.FC<EventListProps> = ({ events }) => {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));

  if (!event) return <div className="p-4 mx-4">Event not found</div>;

  return (
    <>
      <div className="text-sm leading-8">
        <h2 className="font-bold text-xl mb-2">
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
      </div>
    </>
  );
};

export default Event;
