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

     </Routes>
   </div>
   </>
  )
}

export default App
                             