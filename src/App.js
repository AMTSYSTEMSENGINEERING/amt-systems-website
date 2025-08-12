import React from 'react';
import './App.css';
import logo from './assets/log.png';
import AboutSection from './components/AboutSection';
import FloatingActionButton from './components/FloatingActionButton';
import RecentsProjet from './components/RecentsProjet';

function App() {
  return (
    <div>
      <FloatingActionButton />
      <AboutSection />
      <RecentsProjet />
    </div>
  );
}

export default App;
