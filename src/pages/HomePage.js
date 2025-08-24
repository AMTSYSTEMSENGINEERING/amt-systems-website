import React from 'react';
import '../App.css';
import AboutSection from '../components/AboutSection';
import FloatingActionButton from '../components/FloatingActionButton';
import RecentsProjet from '../components/RecentsProjet';
import ServiceSolution from '../components/ServiceSolution';
import HomeCard from '../components/HomeCard';
import Contact from '../components/contact/contact';
import AvisSlider from '../components/avis/avis';


function App() {
  return (
    <div>
      <HomeCard />
      <AboutSection />
      <RecentsProjet />
      <ServiceSolution />
      
      <Contact/>
      <FloatingActionButton />

     </div>
  );
}

export default App;
