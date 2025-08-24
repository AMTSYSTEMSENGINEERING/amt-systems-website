import React from 'react';
import HomeCard from "../components/HomeCard";
import Aboutus from '../components/AboutUs/AboutUs';
import Team from '../components/AboutUs/Team';

const AboutUs = (props) => {
 const homeData = {
    title: "Innovative Solutions for Your Business",
    description: "We offer a complete Web development Service. We have expertise and knowledge to deliver digital solutions to clients across a wide range of sectors in Africa.",
    logo: "/logo192.png",
    alt: "AMT Systems Engineering",
    buttonText: "Get Started",
    page: "contact"
  }
    return (
      <div>
          <HomeCard homeData={homeData}/>
     
          <Team />
    </div>
     
    );
  
}

export default AboutUs;

