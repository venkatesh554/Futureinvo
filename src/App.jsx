import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./Navbar/Home";
import About from "./Navbar/AboutUs"
import Navbar from "./Navbar/navbar"
import Services from "./Navbar/Services";
import Trainings from "./Navbar/Trainings";
import Contact from "./Navbar/Contact"
import Navbar2 from "./Navbar/Navbar2"
import Faq from "./Navbar/Faq"
import DataScience from './Navbar/dataScience';
import "./App.css"
function App() { 
  return (
    <>
   <div className="app">
    <Navbar/>
    <Navbar2/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Trainings" element={<Trainings/>}/>
      <Route path="/Contact" element={<Contact/>}/>  
      <Route path="/Faq" element={<Faq/>}/> 
      <Route path="/dataScience" element={<DataScience/>}/>
     </Routes>
   </div>
   </>
  )
}

export default App
                             