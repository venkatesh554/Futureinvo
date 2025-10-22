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

     </Routes>
   </div>
   </>
  )
}

export default App
                             