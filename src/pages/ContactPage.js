import React from 'react';
import SocialMedia from '../components/Contact/SocialMedia.components';
import From from '../components/Contact/Form.components';
import HomeCard from "../components/HomeCard";

const ContactPage = (props) => {
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
          <SocialMedia/>
          <From/>
    </div>
     
    );
  
}

export default ContactPage;

