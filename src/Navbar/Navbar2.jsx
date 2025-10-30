// // import React,{useState,useEffect} from 'react'
// // import { faBars } from "@fortawesome/free-solid-svg-icons";
// // import logo from "./navbar-images/icon.png";
// // import { Link } from 'react-router-dom';
// // import { faXmark } from '@fortawesome/free-solid-svg-icons';
// // import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import formlogo from "./navbar-images/icon.png"

// // import "./Navbar2.css"
// // export default function Navbar2() {
    
// //     const [showDropdown, setShowDropdown] = useState(false);
// //         const [showDropdown2, setShowDropdown2] = useState(false);
// //         const[modal,setModal]=useState(false);

// //      const toggleModal=()=>{
// //         setModal(!modal)
// //      }
// //      useEffect(()=>{
// //         if(modal){
// //            document.body.classList.add("active-modal")
// //         }
// //         else{
// //             document.body.classList.remove("active-modal")
// //         }
// //      },[modal])

// //   const toggleDropdown = () => {
// //     setShowDropdown(!showDropdown);
// //   };

// //    const toggleDropdown2 = () => {
// //     setShowDropdown2(!showDropdown2);
// //   };

  


// //     const [fix,setFix]=useState(false)

// //     const handleScroll=()=>{
// //         if(window.scrollY >=8000){
// //             setFix(true)
// //         }
// //         else{
// //             setFix(false)
// //         }
// //     }
// //     useEffect(()=>{
// //         window.addEventListener("scroll",handleScroll);
// //         return()=>window.removeEventListener("scroll",handleScroll)
// //     },[])
// //   return (
// //     <>
// //     <div className="sticker"></div>
// //      <div className={fix? 'navbarFixed':'Top-3'}>
// //        <img src={logo} />
// //        <ul>
// //         <li>
// //             <Link to="/" >Home</Link>
// //         </li>
        
// //         <li className="dropdown" onClick={toggleDropdown}>
// //          <span className="drop-text">About <FontAwesomeIcon icon={faAngleDown} /></span>
// //           {showDropdown && (
// //                  <ul className="dropdown-menu">
// //               <li>
// //               <Link to="/About">FAQ's </Link>
// //               </li>
// //               <li>
// //                 <Link to="/Faq">About </Link>
// //               </li>
// //            </ul>
// //   )}
// // </li>
// //          <li>
// //             <Link to="/Services" >Services <FontAwesomeIcon icon={faAngleDown} /></Link>
// //         </li>
// //          <li className="dropdown2" onClick={toggleDropdown2}>
// //             <span className="drop-text2">Trainings <FontAwesomeIcon icon={faAngleDown} /></span>
// //             {
// //                 showDropdown2 && (
// //                     <ul className="dropdown-menu2">
// //                         <li>
// //                             <Link to="/Trainings">AI Training</Link>
// //                         </li>
// //                         <li>
// //                             <Link to="/Datascience">Data Science</Link>
// //                         </li>

// //                     </ul>
// //                 )
// //             }
          
// //         </li>
// //          <li>
// //             <Link to="/Contact" >Contact</Link>
// //         </li>     
// //          {
// //             !modal && (
// //                  <FontAwesomeIcon icon={faBars} id="bar" onClick={toggleModal} />

// //             )
// //          }
// //          {
// //             modal && (
                     
// //                 <div className="pop-up">
// //           <FontAwesomeIcon icon={faXmark} id="xmark" onClick={toggleModal} />
// //           <img src={formlogo}/>
// //           <p>For inquiries and assistance , please fill out the contact form below. our team is here to help , and we look forward to hearing from you</p>
// //           <form>
// //             <label id="label1">Name <span> *</span>:</label><br></br>
// //             <input type="text" ></input><br></br>
// //             <label id="label2">E-Mail<span>*</span>:</label><br></br>
// //             <input type="email"></input><br></br>
// //             <label id="label3">Mobile No<span>*</span>:</label><br></br>
// //             <input type="number" ></input><br></br>
// //             <label id="label4">City<span>*</span>:</label><br></br>
// //             <input type="text" ></input><br></br>
// //              <label id="label5">Message<span>*</span></label><br></br>
// //             <input type="text" id="message-us"></input>
// //             <button id="nav-form-btn">Submit</button>

// //           </form>
// //         </div>
// //             )
// //          }

// //        </ul>

// //      </div></>
// //   )
// // }












// import React, { useState, useEffect } from "react";
// import { faBars, faXmark, faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import logo from "./navbar-images/icon.png";
// import formlogo from "./navbar-images/icon.png";

// import "./Navbar2.css";

// export default function Navbar2() {
//   const [modal, setModal] = useState(false);
//   const [fix, setFix] = useState(false);

//   const toggleModal = () => setModal(!modal);

//   useEffect(() => {
//     if (modal) document.body.classList.add("active-modal");
//     else document.body.classList.remove("active-modal");
//   }, [modal]);

//   const handleScroll = () => {
//     if (window.scrollY >= 8000) setFix(true);
//     else setFix(false);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <div className="sticker"></div>
//       <div className={fix ? "navbarFixed" : "Top-3"}>
//         <img src={logo} alt="Logo" />
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>

//           {/* About Dropdown */}
//           <li className="dropdown">
//             <span className="drop-text">
//               About <FontAwesomeIcon icon={faAngleDown} />
//             </span>
//             <ul className="dropdown-menu">
//               <li>
//                 <Link to="/About">FAQ's</Link>
//               </li>
//               <li>
//                 <Link to="/Faq" id="data-hover">About</Link>
//               </li>
//             </ul>
//           </li>

//           {/* Services Dropdown */}
//           <li className="dropdown">
//             <span className="drop-text">
//               Services <FontAwesomeIcon icon={faAngleDown} />
//             </span>
//             <ul className="dropdown-menu">
//               <li>
//                 <Link to="/Service1">Service 1</Link>
//               </li>
//               <li>
//                 <Link to="/Service2" id="data-hover">Service 2</Link>
//               </li>
//             </ul>
//           </li>

//           <li className="dropdown">
//             <span className="drop-text">
//               Trainings <FontAwesomeIcon icon={faAngleDown} />
//             </span>
//             <ul className="dropdown-menu">
//               <li>
//                 <Link to="/Trainings">AI Training</Link>
//               </li>
//               <li>
//                 <Link to="/Datascience" id="data-hover">Data Science</Link>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <Link to="/Contact">Contact</Link>
//           </li>

//           {!modal && <FontAwesomeIcon icon={faBars} id="bar" onClick={toggleModal} />}

//           {modal && (
//             <div className="pop-up">
//               <FontAwesomeIcon icon={faXmark} id="xmark" onClick={toggleModal} />
//               <img src={formlogo} alt="form logo" />
//               <p>
//                 For inquiries and assistance, please fill out the contact form below. Our team
//                 is here to help and we look forward to hearing from you
//               </p>
//               <form>
//                 <label id="label1">Name <span>*</span>:</label><br />
//                 <input type="text" /><br />
//                 <label id="label2">E-Mail <span>*</span>:</label><br />
//                 <input type="email" /><br />
//                 <label id="label3">Mobile No <span>*</span>:</label><br />
//                 <input type="number" /><br />
//                 <label id="label4">City <span>*</span>:</label><br />
//                 <input type="text" /><br />
//                 <label id="label5">Message <span>*</span></label><br />
//                 <input type="text" id="message-us" />
//                 <button id="nav-form-btn">Submit</button>
//               </form>
//             </div>
//           )}
//         </ul>
//       </div>
//     </>
//   );
// }
















































// // import React,{useState,useEffect} from 'react'
// // import { faBars } from "@fortawesome/free-solid-svg-icons";
// // import logo from "./navbar-images/icon.png";
// // import { Link } from 'react-router-dom';
// // import { faXmark } from '@fortawesome/free-solid-svg-icons';
// // import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import formlogo from "./navbar-images/icon.png"

// // import "./Navbar2.css"
// // export default function Navbar2() {
    
// //     const [showDropdown, setShowDropdown] = useState(false);
// //         const [showDropdown2, setShowDropdown2] = useState(false);
// //         const[modal,setModal]=useState(false);

// //      const toggleModal=()=>{
// //         setModal(!modal)
// //      }
// //      useEffect(()=>{
// //         if(modal){
// //            document.body.classList.add("active-modal")
// //         }
// //         else{
// //             document.body.classList.remove("active-modal")
// //         }
// //      },[modal])

// //   const toggleDropdown = () => {
// //     setShowDropdown(!showDropdown);
// //   };

// //    const toggleDropdown2 = () => {
// //     setShowDropdown2(!showDropdown2);
// //   };

  


// //     const [fix,setFix]=useState(false)

// //     const handleScroll=()=>{
// //         if(window.scrollY >=8000){
// //             setFix(true)
// //         }
// //         else{
// //             setFix(false)
// //         }
// //     }
// //     useEffect(()=>{
// //         window.addEventListener("scroll",handleScroll);
// //         return()=>window.removeEventListener("scroll",handleScroll)
// //     },[])
// //   return (
// //     <>
// //     <div className="sticker"></div>
// //      <div className={fix? 'navbarFixed':'Top-3'}>
// //        <img src={logo} />
// //        <ul>
// //         <li>
// //             <Link to="/" >Home</Link>
// //         </li>
        
// //         <li className="dropdown" onClick={toggleDropdown}>
// //          <span className="drop-text">About <FontAwesomeIcon icon={faAngleDown} /></span>
// //           {showDropdown && (
// //                  <ul className="dropdown-menu">
// //               <li>
// //               <Link to="/About">FAQ's </Link>
// //               </li>
// //               <li>
// //                 <Link to="/Faq">About </Link>
// //               </li>
// //            </ul>
// //   )}
// // </li>
// //          <li>
// //             <Link to="/Services" >Services <FontAwesomeIcon icon={faAngleDown} /></Link>
// //         </li>
// //          <li className="dropdown2" onClick={toggleDropdown2}>
// //             <span className="drop-text2">Trainings <FontAwesomeIcon icon={faAngleDown} /></span>
// //             {
// //                 showDropdown2 && (
// //                     <ul className="dropdown-menu2">
// //                         <li>
// //                             <Link to="/Trainings">AI Training</Link>
// //                         </li>
// //                         <li>
// //                             <Link to="/Datascience">Data Science</Link>
// //                         </li>

// //                     </ul>
// //                 )
// //             }
          
// //         </li>
// //          <li>
// //             <Link to="/Contact" >Contact</Link>
// //         </li>     
// //          {
// //             !modal && (
// //                  <FontAwesomeIcon icon={faBars} id="bar" onClick={toggleModal} />

// //             )
// //          }
// //          {
// //             modal && (
                     
// //                 <div className="pop-up">
// //           <FontAwesomeIcon icon={faXmark} id="xmark" onClick={toggleModal} />
// //           <img src={formlogo}/>
// //           <p>For inquiries and assistance , please fill out the contact form below. our team is here to help , and we look forward to hearing from you</p>
// //           <form>
// //             <label id="label1">Name <span> *</span>:</label><br></br>
// //             <input type="text" ></input><br></br>
// //             <label id="label2">E-Mail<span>*</span>:</label><br></br>
// //             <input type="email"></input><br></br>
// //             <label id="label3">Mobile No<span>*</span>:</label><br></br>
// //             <input type="number" ></input><br></br>
// //             <label id="label4">City<span>*</span>:</label><br></br>
// //             <input type="text" ></input><br></br>
// //              <label id="label5">Message<span>*</span></label><br></br>
// //             <input type="text" id="message-us"></input>
// //             <button id="nav-form-btn">Submit</button>

// //           </form>
// //         </div>
// //             )
// //          }

// //        </ul>

// //      </div></>
// //   )
// // }












// import React, { useState, useEffect } from "react";
// import { faBars, faXmark, faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import logo from "./navbar-images/icon.png";
// import formlogo from "./navbar-images/icon.png";

// import "./Navbar2.css";

// export default function Navbar2() {
//   const [modal, setModal] = useState(false);
//   const [fix, setFix] = useState(false);

//   const toggleModal = () => setModal(!modal);

//   useEffect(() => {
//     if (modal) document.body.classList.add("active-modal");
//     else document.body.classList.remove("active-modal");
//   }, [modal]);

//   const handleScroll = () => {
//     if (window.scrollY >= 8000) setFix(true);
//     else setFix(false);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <div className="sticker"></div>
//       <div className={fix ? "navbarFixed" : "Top-3"}>
//         <img src={logo} alt="Logo" />
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>

//           <li className="dropdown">
//             <span className="drop-text">
//               About <FontAwesomeIcon icon={faAngleDown} />
//             </span>
//             <ul className="dropdown-menu">
//               <li>
//                 <Link to="/About">FAQ's</Link>
//               </li>
//               <li>
//                 <Link to="/Faq" id="data-hover">About</Link>
//               </li>
//             </ul>
//           </li>

//           <li className="dropdown">
//             <span className="drop-text">
//               Services <FontAwesomeIcon icon={faAngleDown} />
//             </span>
//             <ul className="dropdown-menu">
//               <li>
//                 <Link to="/Service1">Service 1</Link>
//               </li>
//               <li>
//                 <Link to="/Service2" id="data-hover">Service 2</Link>
//               </li>
//             </ul>
//           </li>

//           <li className="dropdown">
//             <span className="drop-text">
//               Trainings <FontAwesomeIcon icon={faAngleDown} />
//             </span>
//             <ul className="dropdown-menu">
//               <li>
//                 <Link to="/Trainings">AI Training</Link>
//               </li>
//               <li>
//                 <Link to="/Datascience" id="data-hover">Data Science</Link>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <Link to="/Contact">Contact</Link>
//           </li>

//           {!modal && <FontAwesomeIcon icon={faBars} id="bar" onClick={toggleModal} />}

//           {modal && (
//             <div className="pop-up">
//               <FontAwesomeIcon icon={faXmark} id="xmark" onClick={toggleModal} />
//               <img src={formlogo} alt="form logo" />
//               <p>
//                 For inquiries and assistance, please fill out the contact form below. Our team
//                 is here to help and we look forward to hearing from you
//               </p>
//               <form>
//                 <label id="label1">Name <span>*</span>:</label><br />
//                 <input type="text" /><br />
//                 <label id="label2">E-Mail <span>*</span>:</label><br />
//                 <input type="email" /><br />
//                 <label id="label3">Mobile No <span>*</span>:</label><br />
//                 <input type="number" /><br />
//                 <label id="label4">City <span>*</span>:</label><br />
//                 <input type="text" /><br />
//                 <label id="label5">Message <span>*</span></label><br />
//                 <input type="text" id="message-us" />
//                 <button id="nav-form-btn">Submit</button>
//               </form>
//             </div>
//           )}
//         </ul>
//       </div>
//     </>
//   );
// }






import React, { useState, useEffect } from "react";
import { faBars, faXmark, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "./navbar-images/icon.png";
import logo2 from "./navbar-images/logo2.png";

import formlogo from "./navbar-images/icon.png";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";




import "./Navbar2.css";

export default function Navbar2() {
  const [modal, setModal] = useState(false);
  const [fix, setFix] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleModal = () => setModal(!modal);

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

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









  







  
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    });
    

    const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  
    const handleSubmit = (e) => {
      e.preventDefault();
  
     if (
  !formData.name ||
  !formData.email ||
  !formData.phone ||
  !formData.city ||
  !formData.message
) {
  alert("⚠️ Please fill in all fields before submitting!");
  return;
}

  
      localStorage.setItem("contactFormData", JSON.stringify(formData));
      alert("✅ Your data has been saved successfully!");
  
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
      });
    };
  
  

  return (
    <>
      <div className="sticker"></div>
      <div className={fix ? "navbarFixed" : "Top-3"}>
        <img src={logo2} alt="Logo"  id="logo-dup"/>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li className="dropdown">
            <span className="drop-text">
              About <FontAwesomeIcon icon={faAngleDown} />
            </span>
            <ul className="dropdown-menu">
             
              <li>
                <Link to="/Faq" >About</Link>
              </li>
               <li>
                <Link to="/About" id="data-hover-about">FAQ's</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <span className="drop-text">
              Services <FontAwesomeIcon icon={faAngleDown} />
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/ItConsulting">IT Consulting</Link>
              </li>
              <li>
                <Link to="/WebDevelopmentService" id="data-hover">Web Development</Link>
              </li>
              <li>
                <Link to="/WebDesign" id="data-hover-2">Web Design</Link>
              </li>
              <li>
                <Link to="/MobileApplications" id="data-hover-3">Mobile Applications</Link>
              </li>
              <li>
                <Link to="/DigitalMarket" id="data-hover-4">Digital Marketing Services</Link>
              </li>
               <li>
                <Link to="/Ai" id="data-hover-5">Artificial intelligence </Link>
              </li>
               <li>
                <Link to="/BusinessToolsService" id="data-hover-6">Business tools development </Link>
              </li>
               <li>
                <Link to="/Csda" id="data-hover-7">Cloud services & devops automation </Link>
              </li>
               <li>
                <Link to="/CyberSecurity" id="data-hover-8">Cybersecurity solutions </Link>
              </li>
               <li>
                <Link to="/DataScienceService" id="data-hover-9">Data science & big data</Link>
              </li>
               <li>
                <Link to="/Emerging" id="data-hover-10">Emerging tech</Link>
              </li>
               <li>
                <Link to="/FullStackService" id="data-hover-11">Full stack web & saas development </Link>
              </li>
               <li>
                <Link to="/MachineLearningService" id="data-hover-12">Machine learning & deep learning</Link>
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
               <li>
                <Link to="/WebDevelopment" id="data-hover-2">WebDevelopment</Link>
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
              <img src={formlogo} id="form-logo" />
              
              <div className="mobile-nav-menu">
                <div className="mobile-nav-item">
                  <Link to="/" onClick={toggleModal}>Home</Link>
                </div>
                
                <div className="mobile-nav-item mobile-dropdown">
                  <div 
                    className="mobile-dropdown-toggle"
                    onClick={() => toggleMobileDropdown('about')}
                  >
                    About <FontAwesomeIcon icon={mobileDropdown === 'about' ? faAngleUp : faAngleDown} />
                  </div>
                  <div className={`mobile-dropdown-menu ${mobileDropdown === 'about' ? 'active' : ''}`}>
                    <div className="mobile-dropdown-item">
                      <Link to="/About" onClick={toggleModal}>FAQ's</Link>
                    </div>
                    <div className="mobile-dropdown-item">
                      <Link to="/Faq" onClick={toggleModal}>About</Link>
                    </div>
                  </div>
                </div>

                <div className="mobile-nav-item mobile-dropdown">
                  <div 
                    className="mobile-dropdown-toggle"
                    onClick={() => toggleMobileDropdown('services')}
                  >
                    Services <FontAwesomeIcon icon={mobileDropdown === 'services' ? faAngleUp : faAngleDown} />
                  </div>
                  <div className={`mobile-dropdown-menu ${mobileDropdown === 'services' ? 'active' : ''}`}>
                    <div className="mobile-dropdown-item">
                      <Link to="/ItConsulting" onClick={toggleModal}>IT Consulting</Link>
                    </div>
                    <div className="mobile-dropdown-item">
                      <Link to="/WebDevelopmentService" onClick={toggleModal}>Web Development</Link>
                    </div>
                     <div className="mobile-dropdown-item">
                      <Link to="/WebDesign" onClick={toggleModal}>Web Design</Link>
                    </div>
                     <div className="mobile-dropdown-item">
                      <Link to="/MobileApplications" onClick={toggleModal}>Mobile Applications</Link>
                    </div>
                     <div className="mobile-dropdown-item">
                      <Link to="/DigitalMarket" onClick={toggleModal}>Digital Marketing</Link>
                    </div>
                     <div className="mobile-dropdown-item">
                      <Link to="/Ai" onClick={toggleModal}>Artifitial Intelligence</Link>
                    </div>
                     <div className="mobile-dropdown-item">
                      <Link to="/BusinessToolsService" onClick={toggleModal}>Business Tools Development</Link>
                    </div>
                     <div className="mobile-dropdown-item">
                      <Link to="/Csda" onClick={toggleModal}>Cloud Services</Link>
                    </div>
                    
                    
                     <div className="mobile-dropdown-item">
                      <Link to="/CyberSecurity" onClick={toggleModal}>Cybersecurity solutions  </Link>
                    </div>
                    
                     <div className="mobile-dropdown-item">
                      <Link to="/DataScienceService" onClick={toggleModal}>Data science & big data </Link>
                    </div>
                     <div className="mobile-dropdown-item">
                      <Link to="/Emerging" onClick={toggleModal}>Emerging tech  </Link>
                    </div>
                     <div className="mobile-dropdown-item">
                      <Link to="/FullStackService" onClick={toggleModal}>Full stack web & saas development   </Link>
                    </div>
                     <div className="mobile-dropdown-item">
                      <Link to="/MachineLearningService" onClick={toggleModal}>Machine learning & deep learning   </Link>
                    </div>
                    
                    
                  </div>
                </div>

                <div className="mobile-nav-item mobile-dropdown">
                  <div 
                    className="mobile-dropdown-toggle"
                    onClick={() => toggleMobileDropdown('trainings')}
                  >
                    Trainings <FontAwesomeIcon icon={mobileDropdown === 'trainings' ? faAngleUp : faAngleDown} />
                  </div>
                  <div className={`mobile-dropdown-menu ${mobileDropdown === 'trainings' ? 'active' : ''}`}>
                    <div className="mobile-dropdown-item">
                      <Link to="/Trainings" onClick={toggleModal}>AI Training</Link>
                    </div>
                    <div className="mobile-dropdown-item">
                      <Link to="/Datascience" onClick={toggleModal}>Data Science</Link>
                    </div>
                     <div className="mobile-dropdown-item">
                      <Link to="/WebDevelopment" onClick={toggleModal}>WebDevelopment</Link>
                    </div>
                  </div>
                </div>

                <div className="mobile-nav-item">
                  <Link to="/Contact" onClick={toggleModal}>Contact</Link>
                </div>
              </div>

              <p>
                For inquiries and assistance, please fill out the contact form below. Our team
                is here to help and we look forward to hearing from you
              </p>

              
             <form  onSubmit={handleSubmit}>
  <div>
    <label id="label1">Name <span>*</span>:</label>
    <input type="text"  
         name="name"
          value={formData.name}
          onChange={handleChange} />
    <label id="label2">Mobile No <span>*</span>:</label>
    <input type="email" 
       name="email"
       value={formData.email}
       onChange={handleChange} />
  </div>
  <div>
    <label id="label3">E-Mail <span>*</span>:</label>
    <input type="number" 
       name="phone"
       value={formData.phone}
       onChange={handleChange} 
        maxLength="10"
          pattern="[0-9]{10}"/>
    <label id="label4">City <span>*</span>:</label>
    <input type="text"
    name="city"
    value={formData.city} 
    onChange={handleChange}/>
  </div>
  {/* Message */}
  <label id="label5">Message <span>*</span></label>
  <input type="text" id="message-us" 
   name="message"
      value={formData.message}
      onChange={handleChange} />
  <button id="nav-form-btn">Submit</button>


         <div className="futureinvo-contact">
                     <i><FontAwesomeIcon icon={faEnvelope} id="icon"/>info@futureinvo.com_</i>
                     <i> <FontAwesomeIcon icon={faPhoneVolume} id="icon" />+91 7981107131</i>

             <p> <FontAwesomeIcon icon={faFacebookF} id="ic-links"/>
              <FontAwesomeIcon icon={faLinkedin} id="ic-links"/>
             <FontAwesomeIcon icon={faInstagram} id="ic-links"/></p>
                     
         
         </div>

</form>

            </div>
          )}
        </ul>
      </div>
    </>
  );
}