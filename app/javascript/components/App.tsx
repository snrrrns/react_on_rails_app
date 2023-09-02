import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Editor from './Editor';

const App: React.FC = () => (
  <Routes>
    <Route path="events/*" element={<Editor />} />
  </Routes>
);

export default App;
