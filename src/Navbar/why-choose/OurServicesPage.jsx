import React from 'react';
import { Link } from 'react-router-dom'; 
import './OurServicesPage.css'; 

const OurServicesPage = () => {
  const buttonData = [
    { to: '/ItConsulting', text: 'ItConsulting' },
    { to: '/WebDevelopmentService', text: 'WebDevelopment' },
    { to: '/WebDesign', text: 'WebDesign' },
    { to: '/MobileApplications', text: 'MobileApplications' },
    { to: '/DigitalMarket', text: 'DigitalMarket' },
    { to: '/Ai', text: 'Artifitial Intelligence' },
    { to: '/BusinessToolsService', text: 'BusinessTools Development' },
    { to: '/Csda', text: 'Cloud Services & Devops Automation' },
    { to: '/CyberSecurity', text: 'CyberSecurity Solutions' },
    { to: '/DataScienceService', text: 'DataScience & Big Data' },
    { to: '/Emerging', text: 'Emerging Tech' },
    { to: '/FullStackService', text: 'FullStack Web & Saas Development' },
    { to: '/MachineLearningService', text: 'Machine Learning & Deep Learning' },
  ];

  return (
    <div className="button-page">
      <div className="button-container">
        {buttonData.map((button, index) => (
          <Link key={index} to={button.to} className="long-button">
            {button.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurServicesPage;