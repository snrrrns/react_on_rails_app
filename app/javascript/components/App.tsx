import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Editor from './Editor';

const App: React.FC = () => (
  <div className="font-sans text-base leading-7">
    <Routes>
      <Route path="events/*" element={<Editor />} />
    </Routes>
    <ToastContainer />
  </div>
);

export default App;
