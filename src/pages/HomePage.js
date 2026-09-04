import React from 'react';
import '../App.css';
import AboutSection from '../components/AboutSection';
import FloatingActionButton from '../components/FloatingActionButton';
import RecentsProjet from '../components/RecentsProjet';
import ServiceSolution from '../components/ServiceSolution';
import HomeCard from '../components/HomeCard';


function App() {
  return (
    <div>
      <HomeCard />
      <AboutSection />
      <RecentsProjet />
      <ServiceSolution />
      <FloatingActionButton />

     </div>
  );
}

export default App;
