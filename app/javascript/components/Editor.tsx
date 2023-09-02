import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { EventParams } from '../types';
import Header from './Header';
import EventList from './EventList'
import Event from './Event';

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
      {isError && <p>Something went wrong. Check the console.</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <EventList events={events} />

          <Routes>
            <Route path=":id" element={<Event events={events} />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default Editor
