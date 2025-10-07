// import React,{useState,useEffect} from 'react'
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import logo from "./navbar-images/icon.png";
// import { Link } from 'react-router-dom';
// import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import formlogo from "./navbar-images/icon.png"

// import "./Navbar2.css"
// export default function Navbar2() {
    
//     const [showDropdown, setShowDropdown] = useState(false);
//         const [showDropdown2, setShowDropdown2] = useState(false);
//         const[modal,setModal]=useState(false);

//      const toggleModal=()=>{
//         setModal(!modal)
//      }
//      useEffect(()=>{
//         if(modal){
//            document.body.classList.add("active-modal")
//         }
//         else{
//             document.body.classList.remove("active-modal")
//         }
//      },[modal])

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//    const toggleDropdown2 = () => {
//     setShowDropdown2(!showDropdown2);
//   };

  


//     const [fix,setFix]=useState(false)

//     const handleScroll=()=>{
//         if(window.scrollY >=8000){
//             setFix(true)
//         }
//         else{
//             setFix(false)
//         }
//     }
//     useEffect(()=>{
//         window.addEventListener("scroll",handleScroll);
//         return()=>window.removeEventListener("scroll",handleScroll)
//     },[])
//   return (
//     <>
//     <div className="sticker"></div>
//      <div className={fix? 'navbarFixed':'Top-3'}>
//        <img src={logo} />
//        <ul>
//         <li>
//             <Link to="/" >Home</Link>
//         </li>
        
//         <li className="dropdown" onClick={toggleDropdown}>
//          <span className="drop-text">About <FontAwesomeIcon icon={faAngleDown} /></span>
//           {showDropdown && (
//                  <ul className="dropdown-menu">
//               <li>
//               <Link to="/About">FAQ's </Link>
//               </li>
//               <li>
//                 <Link to="/Faq">About </Link>
//               </li>
//            </ul>
//   )}
// </li>
//          <li>
//             <Link to="/Services" >Services <FontAwesomeIcon icon={faAngleDown} /></Link>
//         </li>
//          <li className="dropdown2" onClick={toggleDropdown2}>
//             <span className="drop-text2">Trainings <FontAwesomeIcon icon={faAngleDown} /></span>
//             {
//                 showDropdown2 && (
//                     <ul className="dropdown-menu2">
//                         <li>
//                             <Link to="/Trainings">AI Training</Link>
//                         </li>
//                         <li>
//                             <Link to="/Datascience">Data Science</Link>
//                         </li>

//                     </ul>
//                 )
//             }
          
//         </li>
//          <li>
//             <Link to="/Contact" >Contact</Link>
//         </li>     
//          {
//             !modal && (
//                  <FontAwesomeIcon icon={faBars} id="bar" onClick={toggleModal} />

//             )
//          }
//          {
//             modal && (
                     
//                 <div className="pop-up">
//           <FontAwesomeIcon icon={faXmark} id="xmark" onClick={toggleModal} />
//           <img src={formlogo}/>
//           <p>For inquiries and assistance , please fill out the contact form below. our team is here to help , and we look forward to hearing from you</p>
//           <form>
//             <label id="label1">Name <span> *</span>:</label><br></br>
//             <input type="text" ></input><br></br>
//             <label id="label2">E-Mail<span>*</span>:</label><br></br>
//             <input type="email"></input><br></br>
//             <label id="label3">Mobile No<span>*</span>:</label><br></br>
//             <input type="number" ></input><br></br>
//             <label id="label4">City<span>*</span>:</label><br></br>
//             <input type="text" ></input><br></br>
//              <label id="label5">Message<span>*</span></label><br></br>
//             <input type="text" id="message-us"></input>
//             <button id="nav-form-btn">Submit</button>

//           </form>
//         </div>
//             )
//          }

//        </ul>

//      </div></>
//   )
// }












import React, { useState, useEffect } from "react";
import { faBars, faXmark, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "./navbar-images/icon.png";
import formlogo from "./navbar-images/icon.png";

import "./Navbar2.css";

export default function Navbar2() {
  const [modal, setModal] = useState(false);
  const [fix, setFix] = useState(false);

  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    if (modal) document.body.classList.add("active-modal");
    else document.body.classList.remove("active-modal");
  }, [modal]);

  const handleScroll = () => {
    if (window.scrollY >= 8000) setFix(true);
    else setFix(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="sticker"></div>
      <div className={fix ? "navbarFixed" : "Top-3"}>
        <img src={logo} alt="Logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* About Dropdown */}
          <li className="dropdown">
            <span className="drop-text">
              About <FontAwesomeIcon icon={faAngleDown} />
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/About">FAQ's</Link>
              </li>
              <li>
                <Link to="/Faq" id="data-hover">About</Link>
              </li>
            </ul>
          </li>

          {/* Services Dropdown */}
          <li className="dropdown">
            <span className="drop-text">
              Services <FontAwesomeIcon icon={faAngleDown} />
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/Service1">Service 1</Link>
              </li>
              <li>
                <Link to="/Service2" id="data-hover">Service 2</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <span className="drop-text">
              Trainings <FontAwesomeIcon icon={faAngleDown} />
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/Trainings">AI Training</Link>
              </li>
              <li>
                <Link to="/Datascience" id="data-hover">Data Science</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/Contact">Contact</Link>
          </li>

          {!modal && <FontAwesomeIcon icon={faBars} id="bar" onClick={toggleModal} />}

          {modal && (
            <div className="pop-up">
              <FontAwesomeIcon icon={faXmark} id="xmark" onClick={toggleModal} />
              <img src={formlogo} alt="form logo" />
              <p>
                For inquiries and assistance, please fill out the contact form below. Our team
                is here to help and we look forward to hearing from you
              </p>
              <form>
                <label id="label1">Name <span>*</span>:</label><br />
                <input type="text" /><br />
                <label id="label2">E-Mail <span>*</span>:</label><br />
                <input type="email" /><br />
                <label id="label3">Mobile No <span>*</span>:</label><br />
                <input type="number" /><br />
                <label id="label4">City <span>*</span>:</label><br />
                <input type="text" /><br />
                <label id="label5">Message <span>*</span></label><br />
                <input type="text" id="message-us" />
                <button id="nav-form-btn">Submit</button>
              </form>
            </div>
          )}
        </ul>
      </div>
    </>
  );
}
