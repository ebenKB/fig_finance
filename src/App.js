import React from 'react';
import EventsPage from "./pages/Event/Event";

import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header title="Events" />
      <EventsPage />
    </div>
  );
}

export default App;
