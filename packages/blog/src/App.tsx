import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import './styles/fonts.css';

import Home from './pages/Home';

import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
