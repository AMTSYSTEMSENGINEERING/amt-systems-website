import React from 'react';
import './App.css';
import logo from './assets/log.png';
import AboutSection from './components/AboutSection';
import FloatingActionButton from './components/FloatingActionButton';
import RecentsProjet from './components/RecentsProjet';
import ServiceSolution from './components/ServiceSolution';

function App() {
  return (
    <div>
      <FloatingActionButton />
      <AboutSection />
      <RecentsProjet />
      <ServiceSolution />
    </div>
  );
}

export default App;
