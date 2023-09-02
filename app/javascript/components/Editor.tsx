import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { EventParams } from '../types';
import Header from './Header';
import EventList from './EventList';
import Event from './Event';
import EventForm from './EventForm';

const Editor: React.FC = () => {
  const [events, setEvents] = useState<EventParams[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch('/api/events');
        if (!response.ok) throw Error(response.statusText);
        const data: EventParams[] = await response.json();
        setEvents(data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto w-9/10 h-screen mt-8">
        <div className="flex">
          {isError && <p className="p-4">Something went wrong. Check the console.</p>}
          {isLoading ? (
            <p className="p-4">Loading...</p>
          ) : (
            <>
              <EventList events={events} />
              <div className="p-4 mx-4 grow">
                <Routes>
                  <Route path="new" element={<EventForm />} />
                  <Route path=":id" element={<Event events={events} />} />
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
