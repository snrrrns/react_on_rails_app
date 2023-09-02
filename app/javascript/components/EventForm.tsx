import React from 'react';

const EventForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <section>
      <h2 className="font-bold text-xl mb-4">New Event</h2>
      <form onSubmit={handleSubmit} className=" w-2/3 grid gap-2 space-y-4">
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="type" className="w-40 block font-bold text-right pr-4">
            Type:
          </label>
          <input
            type="text"
            id="type"
            name="type"
            className="w-full px-2 border border-gray-500 rounded"
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
            className="w-full px-2 border border-gray-500 rounded"
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
          />
        </div>
        <div className="flex justify-start items-center mb-4">
          <label htmlFor="published" className="w-40 block text-right font-bold text-right pr-4">
            Publish:
          </label>
          <div className="flex items-center w-full">
            <input type="checkbox" id="published" name="published" className="h-4 w-4 rounded" />
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
