import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Sign from './Sign';
import Main from './Main';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </Router>
  );
};

export default App;
