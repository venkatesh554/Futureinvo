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


import Webdev1 from "./Navbar/Sub-Categories/Webdev1"
import Webdev2 from "./Navbar/Sub-Categories/Webdev2"
import Webdev3 from "./Navbar/Sub-Categories/Webdev3"

import Webdev4 from "./Navbar/Sub-Categories/Webdev4"

import Webdev5 from "./Navbar/Sub-Categories/Webdev5"

import Webdesign1 from "./Navbar/Sub-Categories/Webdesign1"
import Webdesign2 from "./Navbar/Sub-Categories/Webdesign2"

import Webdesign3 from "./Navbar/Sub-Categories/Webdesign3"

import Webdesign4 from "./Navbar/Sub-Categories/Webdesign4"

import Webdesign5 from "./Navbar/Sub-Categories/Webdesign5"

import Ai1 from "./Navbar/Sub-Categories/Ai1"
import Ai2 from "./Navbar/Sub-Categories/Ai2"

import Ai3 from "./Navbar/Sub-Categories/Ai3"

import Ai4 from "./Navbar/Sub-Categories/Ai4"

import Ai5 from "./Navbar/Sub-Categories/Ai5"
import Ai6 from "./Navbar/Sub-Categories/Ai6"

import Mobile1 from "./Navbar/Sub-Categories/Mobile1"
import Mobile2 from "./Navbar/Sub-Categories/Mobile2"

import Mobile3 from "./Navbar/Sub-Categories/Mobile3"

import Mobile4 from "./Navbar/Sub-Categories/Mobile4"

import Mobile5 from "./Navbar/Sub-Categories/Mobile5"


import Digital1 from "./Navbar/Sub-Categories/Digital1"
import Digital2 from "./Navbar/Sub-Categories/Digital2"

import Digital3 from "./Navbar/Sub-Categories/Digital3"

import Digital4 from "./Navbar/Sub-Categories/Digital4"

import Digital5 from "./Navbar/Sub-Categories/Digital5"
import Digital6 from "./Navbar/Sub-Categories/Digital6"



import Bdt1 from "./Navbar/Sub-Categories/Bdt1"
import Bdt2 from "./Navbar/Sub-Categories/Bdt2"

import Bdt3 from "./Navbar/Sub-Categories/Bdt3"
import Bdt4 from "./Navbar/Sub-Categories/Bdt4"
import Bdt5 from "./Navbar/Sub-Categories/Bdt5"
import Bdt6 from "./Navbar/Sub-Categories/Bdt6"
import Bdt7 from "./Navbar/Sub-Categories/Bdt7"
import Bdt8 from "./Navbar/Sub-Categories/Bdt8"
import Bdt9 from "./Navbar/Sub-Categories/Bdt9"

import Bdt10 from "./Navbar/Sub-Categories/Bdt10"
import Bdt11 from "./Navbar/Sub-Categories/Bdt11"
import Bdt12 from "./Navbar/Sub-Categories/Bdt12"
import Bdt13 from "./Navbar/Sub-Categories/Bdt13"
import Bdt14 from "./Navbar/Sub-Categories/Bdt14"
import Bdt15 from "./Navbar/Sub-Categories/Bdt15"
import Bdt16 from "./Navbar/Sub-Categories/Bdt16"
import Bdt17 from "./Navbar/Sub-Categories/Bdt17"
import Bdt18 from "./Navbar/Sub-Categories/Bdt18"
import Bdt19 from "./Navbar/Sub-Categories/Bdt19"
import Bdt20 from "./Navbar/Sub-Categories/Bdt20"
import Bdt21 from "./Navbar/Sub-Categories/Bdt21"

import OurServicesPage from "./Navbar/why-choose/OurServicesPage"

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
                <Route path="/Webdev1" element={<Webdev1/>}/>
                <Route path="/Webdev2" element={<Webdev2/>}/>
                <Route path="/Webdev3" element={<Webdev3/>}/>
                <Route path="/Webdev4" element={<Webdev4/>}/>
                <Route path="/Webdev5" element={<Webdev5/>}/>
              <Route path="/Webdesign1" element={<Webdesign1/>}/>
          <Route path="/Webdesign2" element={<Webdesign2/>}/>
       <Route path="/Webdesign3" element={<Webdesign3/>}/>
     <Route path="/Webdesign4" element={<Webdesign4/>}/>
  <Route path="/Webdesign5" element={<Webdesign5/>}/>
  <Route path="/Ai1" element={<Ai1/>}/>
   <Route path="/Ai2" element={<Ai2/>}/>
    <Route path="/Ai3" element={<Ai3/>}/>
     <Route path="/Ai4" element={<Ai4/>}/>
      <Route path="/Ai5" element={<Ai5/>}/>
       <Route path="/Ai6" element={<Ai6/>}/>
          <Route path="/Mobile1" element={<Mobile1/>}/>
             <Route path="/Mobile2" element={<Mobile2/>}/>
                <Route path="/Mobile3" element={<Mobile3/>}/>
                   <Route path="/Mobile4" element={<Mobile4/>}/>
                      <Route path="/Mobile5" element={<Mobile5/>}/>
                         <Route path="/Digital1" element={<Digital1/>}/>
                           <Route path="/Digital2" element={<Digital2/>}/>
                              <Route path="/Digital3" element={<Digital3/>}/>
                                  <Route path="/Digital4" element={<Digital4/>}/>
                                        <Route path="/Digital5" element={<Digital5/>}/>
                                            <Route path="/Digital6" element={<Digital6/>}/>
                                            <Route path="/Bdt1" element={<Bdt1/>}/>
                                        <Route path="/Bdt2" element={<Bdt2/>}/>
                                   <Route path="/Bdt3" element={<Bdt3/>}/>
                               <Route path="/Bdt4" element={<Bdt4/>}/>
                           <Route path="/Bdt5" element={<Bdt5/>}/>
                      <Route path="/Bdt6" element={<Bdt6/>}/>
                 <Route path="/Bdt7" element={<Bdt7/>}/>
            <Route path="/Bdt8" element={<Bdt8/>}/>
       <Route path="/Bdt9" element={<Bdt9/>}/>
     <Route path="/Bdt10" element={<Bdt10/>}/>
                <Route path="/Bdt11" element={<Bdt11/>}/>
                      <Route path="/Bdt12" element={<Bdt12/>}/>
                            <Route path="/Bdt13" element={<Bdt13/>}/>
                                  <Route path="/Bdt14" element={<Bdt14/>}/>
                                         <Route path="/Bdt15" element={<Bdt15/>}/>
                                              <Route path="/Bdt16" element={<Bdt16/>}/>
                                                    <Route path="/Bdt17" element={<Bdt17/>}/>
                                                          <Route path="/Bdt18" element={<Bdt18/>}/>
                                                                  <Route path="/Bdt19" element={<Bdt19/>}/>
                                                                         <Route path="/Bdt20" element={<Bdt20/>}/>
                                                                              <Route path="/Bdt21" element={<Bdt21/>}/>
                                                                              <Route path="/OurServicesPage" element={<OurServicesPage/>}/>


      

     </Routes>
   </div>
   </>
  )
}

export default App
                             