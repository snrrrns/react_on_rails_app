import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { EventParams } from '../types';
import { handleAjaxError } from '../helpers/helper';
import { success } from '../helpers/notifications';
import Header from './Header';
import EventList from './EventList';
import Event from './Event';
import EventForm from './EventForm';

const Editor: React.FC = () => {
  const [events, setEvents] = useState<EventParams[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch('/api/events');
        if (!response.ok) throw Error(response.statusText);
        const data: EventParams[] = await response.json();
        setEvents(data);
      } catch (error) {
        handleAjaxError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const addEvent = async (newEvent: EventParams) => {
    try {
      const response = await window.fetch('/api/events', {
        method: 'POST',
        body: JSON.stringify(newEvent),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw Error(response.statusText);

      const savedEvent: EventParams = await response.json();
      const newEvents = [...events, savedEvent];
      setEvents(newEvents);
      success('Event Added!');
      navigate(`/events/${savedEvent.id}`);
    } catch (error) {
      handleAjaxError(error);
    }
  };

  const deleteEvent = async (targetId: number) => {
    const sure = window.confirm('Are you sure?');
    if (!sure) return;

    try {
      const response = await window.fetch(`/api/events/${targetId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw Error(response.statusText);

      success('Event Deleted!');
      navigate('/events');
      setEvents(
        events.filter((event) => {
          const eventId = event.id!;
          return eventId !== targetId;
        })
      );
    } catch (error) {
      handleAjaxError(error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto w-9/10 h-screen mt-8">
        <div className="flex">
          {isLoading ? (
            <p className="p-4">Loading...</p>
          ) : (
            <>
              <EventList events={events} />
              <div className="p-4 mx-4 grow">
                <Routes>
                  <Route path="new" element={<EventForm onSave={addEvent} />} />
                  <Route path=":id" element={<Event events={events} onDelete={deleteEvent} />} />
                </Routes>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Editor;
