import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./Navbar/Home";
import About from "./Navbar/AboutUs"
import Navbar from "./Navbar/navbar"
import Services from "./Navbar/Services";
import Trainings from "./Navbar/Trainings";
import Contact from "./Navbar/Contact"
import ContactForm from './components/ContactForm'
import Navbar2 from "./Navbar/Navbar2"
import Faq from "./Navbar/Faq"
import Datascience from "./Navbar/Datascience";
import ScrollTop from "./Navbar/ScrolledTop"
import "./App.css"
import BallCursor from "./Navbar/BallCursor";
import WebDevelopment from './Navbar/WebDevelopment';
import ItConsulting from './Navbar/Service-Pages/ItConsulting';
import WebDevelopmentService from "./Navbar/Service-Pages/WebDevelopmentService"
import Csda from "./Navbar/Service-Pages/Csda";
import Ai from "./Navbar/Service-Pages/Ai"
import WebDesign from "./Navbar/Service-Pages/WebDesign"
import MobileApplications from './Navbar/Service-Pages/MobileApplications';
import DigitalMarket from "./Navbar/Service-Pages/DigitalMarketing"
import CyberSecurity from "./Navbar/Service-Pages/CyberSecurity";
import DatascienceService from "./Navbar/Service-Pages/DataScienceService";
import Emerging from "./Navbar/Service-Pages/Emerging";
import FullStackService from "./Navbar/Service-Pages/FullStackService"
import BusinessToolsService from './Navbar/Service-Pages/BusinessToolsService';
import MachineLearningService from './Navbar/Service-Pages/MachineLearningService';
import Machine1 from "./Navbar/Sub-Categories/Machine1"
import Machine2 from "./Navbar/Sub-Categories/Machine2"
import Machine3 from "./Navbar/Sub-Categories/Machine3"
import FullStack1 from "./Navbar/Sub-Categories/FullStack1"
import FullStack2 from "./Navbar/Sub-Categories/FullStack2"
import FullStack3 from "./Navbar/Sub-Categories/FullStack3"
import Emerging1 from "./Navbar/Sub-Categories/Emerging1"
import Emerging2 from "./Navbar/Sub-Categories/Emerging2"
import Emerging3 from "./Navbar/Sub-Categories/Emerging3"


import Datascience1 from "./Navbar/Sub-Categories/Datascience1"
import Datascience2 from "./Navbar/Sub-Categories/Datascience2"

import Datascience3 from "./Navbar/Sub-Categories/Datascience3"

import Datascience4 from "./Navbar/Sub-Categories/Datascience4"

import Datascience5 from "./Navbar/Sub-Categories/Datascience5"

import Cyber1 from "./Navbar/Sub-Categories/Cyber1"
import Cyber2 from "./Navbar/Sub-Categories/Cyber2"

import Cyber3 from "./Navbar/Sub-Categories/Cyber3"
import Cyber4 from "./Navbar/Sub-Categories/Cyber4"
import Cyber5 from "./Navbar/Sub-Categories/Cyber5"
import Cyber6 from "./Navbar/Sub-Categories/Cyber6"
import Cyber7 from "./Navbar/Sub-Categories/Cyber7"

import Cloud1 from "./Navbar/Sub-Categories/Cloud1"
import Cloud2 from "./Navbar/Sub-Categories/Cloud2"

import Cloud3 from "./Navbar/Sub-Categories/Cloud3"

import Cloud4 from "./Navbar/Sub-Categories/Cloud4"

import Cloud5 from "./Navbar/Sub-Categories/Cloud5"
import It1 from "./Navbar/Sub-Categories/It1"
import It2 from "./Navbar/Sub-Categories/It2"
import It3 from "./Navbar/Sub-Categories/It3"
import It4 from "./Navbar/Sub-Categories/It4"
import It5 from "./Navbar/Sub-Categories/It5"
















function App() { 
  return (
    <>
      <BallCursor />
   <div className="app">
    {/* <Navbar/> */}
        

    <Navbar2/>
    <ScrollTop />
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Trainings" element={<Trainings/>}/>
      <Route path="/Contact" element={<Contact/>}/>  
      <Route path="/ContactSimple" element={<ContactForm/>}/>
      <Route path="/Faq" element={<Faq/>}/> 
      <Route path="/Datascience" element={<Datascience/>}/>
      <Route path="/WebDevelopment" element={<WebDevelopment/>}/>
      <Route path="/ItConsulting" element={<ItConsulting/>}/>
      <Route path="/WebDevelopmentService" element={<WebDevelopmentService/>}/>
      <Route path="/Csda" element={<Csda/>}/>
      <Route path="/WebDesign" element={<WebDesign />}/>
      <Route path="/Ai" element={<Ai/>}/>
      <Route path="/MobileApplications"element={<MobileApplications/>}/>
      <Route path="/DigitalMarket" element={<DigitalMarket/>}/>
      <Route path="/CyberSecurity" element={<CyberSecurity/>}/>
      <Route path="/DataScienceService" element={<DatascienceService />}/>
      <Route path="/Emerging" element={<Emerging />}/>
      <Route path="/FullStackService" element={<FullStackService />}/>
      <Route path="/BusinessToolsService" element={<BusinessToolsService />}/>
      <Route path="/MachineLearningService" element={<MachineLearningService />}/>
      <Route path="/Machine1" element={<Machine1/>}/>
      <Route path="/Machine2" element={<Machine2/>}/>
      <Route path="/Machine3" element={<Machine3/>}/>
      <Route path="/FullStack1" element={<FullStack1/>}/>
      <Route path="/FullStack2" element={<FullStack2/>}/>
      <Route path="/FullStack3" element={<FullStack3/>}/>
      <Route path="/Emerging1" element={<Emerging1/>}/>
      <Route path="/Emerging2" element={<Emerging2/>}/>
      <Route path="/Emerging3" element={<Emerging3/>}/>
      <Route path="/Datascience1" element={<Datascience1/>}/>
      <Route path="/Datascience2" element={<Datascience2/>}/>
      <Route path="/Datascience3" element={<Datascience3/>}/>
      <Route path="/Datascience4" element={<Datascience4/>}/>
      <Route path="/Datascience5" element={<Datascience5/>}/>
      <Route path="/Cyber1" element={<Cyber1/>}/>
       <Route path="/Cyber2" element={<Cyber2/>}/>
        <Route path="/Cyber3" element={<Cyber3/>}/>
         <Route path="/Cyber4" element={<Cyber4/>}/>
          <Route path="/Cyber5" element={<Cyber5/>}/>
           <Route path="/Cyber6" element={<Cyber6/>}/>
            <Route path="/Cyber7" element={<Cyber7/>}/>
            <Route path="/Cloud1" element={<Cloud1/>}/>
             <Route path="/Cloud2" element={<Cloud2/>}/>
              <Route path="/Cloud3" element={<Cloud3/>}/>
               <Route path="/Cloud4" element={<Cloud4/>}/>
                <Route path="/Cloud5" element={<Cloud5/>}/>
                <Route path="/It1" element={<It1/>}/>
                <Route path="/It2" element={<It2/>}/>
                <Route path="/It3" element={<It3/>}/>
                <Route path="/It4" element={<It4/>}/>
                <Route path="/It5" element={<It5/>}/>
            
      

     </Routes>
   </div>
   </>
  )
}

export default App
                             