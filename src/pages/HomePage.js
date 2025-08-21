import React from 'react';
import '../App.css';
import AboutSection from '../components/AboutSection';
import FloatingActionButton from '../components/FloatingActionButton';
import RecentsProjet from '../components/RecentsProjet';
import ServiceSolution from '../components/ServiceSolution';
import HomeCard from '../components/HomeCard';
import globe from '../assets/globe.png';

function App() {
  const homeData = {
    title: "Innovative Solutions for Your Busines",
    description: "We offer a complete Web development Service. We have expertise and knolage to deliver digital solution to clients across a wide range of sectors in Africa.",
    logo:globe,
    alt: "AMT Systems Engineering",
    buttonText: "Get Started",
    page: "home"
  }
  return (
    <div>
      <HomeCard homeData={homeData}/>
      <AboutSection />
      <RecentsProjet />
      <ServiceSolution />
      <FloatingActionButton />
     </div>
  );
}

export default App;
