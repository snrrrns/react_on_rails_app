import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Pikaday from 'pikaday';
import {
  EventParams,
  FormErrors,
  EventFormProps,
  InputChangeEvent,
  TextAreaChangeEvent,
  EventKey,
} from '../types';
import { isEmptyObject, validateEvent, formatDate } from '../helpers/helper';

const EventForm: React.FC<EventFormProps> = ({ events, onSave }) => {
  const { id } = useParams();

  const initialEventState = useCallback(() => {
    const defaults: EventParams = {
      type: '',
      date: '',
      title: '',
      speaker: '',
      host: '',
      published: false,
    };

    const currentEvent: EventParams | undefined = id
      ? events!.find((e) => e.id === Number(id))
      : undefined;

    return { ...defaults, ...currentEvent };
  }, [events, id]);
  const [event, setEvent] = useState(initialEventState);

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const dateInput = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: InputChangeEvent) => {
    const { target } = e;
    const { name, type, checked, value } = target;
    const eventKeyName = name as EventKey;
    const resultValue = type === 'checkbox' ? checked : value;

    updateEvent(eventKeyName, resultValue);
  };

  const handleTextAreaChange = (e: TextAreaChangeEvent) => {
    const { target } = e;
    const { name, value } = target;
    const eventKeyName = name as EventKey;

    updateEvent(eventKeyName, value);
  };

  const renderErrors = () => {
    if (isEmptyObject(formErrors)) return null;

    return (
      <div className="border border-red-500 rounded my-10 w-2/3">
        <h3 className="bg-red-500 text-white p-2 text-sm">
          he following errors prohibited the event from being saved:
        </h3>
        <ul className="divide-y divide-pink-500">
          {Object.values(formErrors).map((formError) => (
            <li key={formError} className="px-3 py-2 text-xs">
              {formError}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateEvent(event);
    setFormErrors(errors); // エラーがある場合もない場合もformErrorsを更新

    if (isEmptyObject(errors)) {
      onSave(event);
    }
  };

  useEffect(() => {
    const datepicker = new Pikaday({
      field: dateInput.current,
      toString: (date) => formatDate(date),
      onSelect: (date) => {
        const formattedDate = formatDate(date);

        if (dateInput.current) {
          dateInput.current.value = formattedDate;
          updateEvent('date', formattedDate);
        }
      },
    });

    return () => datepicker.destroy();
  }, []);

  useEffect(() => {
    setEvent(initialEventState);
  }, [events]);

  const updateEvent = (key: EventKey, value: EventParams[EventKey]) => {
    setEvent((prevEvent) => ({ ...prevEvent, [key]: value }));
  };

  return (
    <section>
      {renderErrors()}
      <h2 className="font-bold text-xl mb-4">New Event</h2>
      <form onSubmit={handleSubmit} className=" w-2/3 grid gap-2 space-y-4">
        <div className="flex justify-between items-center">
          <label htmlFor="type" className="w-40 block font-bold text-right pr-4">
            Type:
          </label>
          <input
            type="text"
            id="type"
            name="type"
            className="w-full px-2 border border-gray-500 rounded"
            onChange={handleInputChange}
            value={event.type}
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="date" className="w-40 block font-bold text-right pr-4">
            Date:
          </label>
          <input
            type="text"
            id="date"
            name="date"
            ref={dateInput}
            autoComplete="off"
            className="w-full px-2 border border-gray-500 rounded"
            onChange={handleInputChange}
            value={event.date}
          />
        </div>
        <div className="flex justify-between mb-4">
          <label htmlFor="title" className="w-40 block font-bold text-right pr-4">
            Title:
          </label>
          <textarea
            cols={30}
            rows={10}
            id="title"
            name="title"
            className="w-full px-2 border border-gray-500 rounded"
            onChange={handleTextAreaChange}
            value={event.title}
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="speaker" className="w-40 block font-bold text-right pr-4">
            Speakers:
          </label>
          <input
            type="text"
            id="speaker"
            name="speaker"
            className="w-full px-2 border border-gray-500 rounded"
            onChange={handleInputChange}
            value={event.speaker}
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="host" className="w-40 block font-bold text-right pr-4">
            Hosts:
          </label>
          <input
            type="text"
            id="host"
            name="host"
            className="w-full px-2 border border-gray-500 rounded"
            onChange={handleInputChange}
            value={event.host}
          />
        </div>
        <div className="flex justify-start items-center mb-4">
          <label htmlFor="published" className="w-40 block text-right font-bold text-right pr-4">
            Publish:
          </label>
          <div className="flex items-center w-full">
            <input
              type="checkbox"
              id="published"
              name="published"
              className="h-4 w-4 rounded"
              onChange={handleInputChange}
              checked={event.published}
            />
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-40"></div>
          <div className="flex item-center w-full">
            <button
              type="submit"
              className="max-w-lg bg-orange-500 hover:bg-orange-400 active:bg-orange-500 duration-100 text-white font-semibold cursor-pointer rounded px-6 py-2"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default EventForm;
