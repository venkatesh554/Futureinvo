import React from 'react'
import "./contact.css"
import footericon from "../Navbar/navbar-images/icon.png"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";


import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import calling from "./contact-images/calling.jpg"
import locationn from "./contact-images/locationn.jpg"

export default function Contact() {
  return (
    <div>
       <div className="tt">
        <div className="faq">
        <div className="dup-from-faq">
            <h1>Contact Us</h1>
            
          </div>  
         <div className="contacting-form">
           <div className="contact-us-form">
            <div className="leftside-form">
             <div className="firsthead">
               <div className="firstline">
                 <FontAwesomeIcon icon={faPhone} id="formcall" />   <p>Call US</p><br></br>
                  <h2>+91 7981107131</h2>
              </div>
              <div className="secondline">
                
                 <FontAwesomeIcon icon={faEnvelope} id="formmail" />  <p>Make a Quote</p><br></br>
                  <h2>info@futureinvo.com</h2>
              </div>
              <div className="thirdline">
                  <FontAwesomeIcon icon={faLocationDot} id="formlocation" /> <p>Location</p><br></br>
                  <h2>Capital Park, Hitech City,<br></br> Hyderabad</h2>
              </div>
              <div className="underlinee">
                <p id="lineone">-</p>
                <p id="linetwo">-</p>
                <p id="linethree">-</p>


              </div>
              <img src={calling} id="calling" />
             </div>
            </div>

            
            <div className="rightside-form-contact">
               <h2>What's on your mind ? Just ask us!</h2>
               <p>
                For inquiries or  assistance, please fill out the contact form below. Our team is here to help,and we look forward to hearing from you!
               </p>
               <form>
                <label>Your Name <span id="star">*</span>:</label><br></br>
                <input type="text"></input><br></br>

                <label>Email Address <span id="star">*</span>:</label><br></br>
                <input type="email"></input><br></br>

                 <label>Mobile Number <span id="star">*</span>:</label><br></br>
                 <input type="number"></input><br></br>

                 <label>City <span id="star">*</span >:</label><br></br>
                 <input type="text"></input><br></br>

                 <label>Occupation <span id="star">*</span>:</label><br></br>
                 <input type="text"></input><br></br>

                 <label>Message <span id="star">*</span>:</label><br></br>
                 <input type="text" id="comments-box"></input><br></br>
                 <button  className="subb">Submit</button>


               </form>
              
            </div>
            
         </div>
          </div>
          <div className="footer-contact-2">
             <div className="footerr" id="footer-contact-2">
            <div className="footer" id="footer-dup">
                       <div className="line1">
                        <img src={footericon}/>
                        <p>Join us to gain industry insights and hands-on experience for success in the digital world</p>
                        <div className="icn">
                           <FontAwesomeIcon icon={faFacebookF}/>
                           <FontAwesomeIcon icon={faLinkedin}  id="ic-links"/>
                           <FontAwesomeIcon icon={faInstagram} id="ic-links"/>
                        </div>
                        <div className="links">
                          <div className="links1">
                            <h3>Quick Links</h3>
                          <a href="#"> <FontAwesomeIcon icon={faAngleRight} />Future Invo IT Solutions</a>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} />Our Services</a>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} />FAQ'S</a>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} />Contact Us</a>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} />Careers</a>
                        </div>
                         <div className="links1">
                            <h3>IT Services</h3>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} /> IT Solutions</a>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} />IT Consulting</a>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} />Web Development</a>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} />App Development</a>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} />Trainings</a>
                        </div>
                         <div className="links1">
                            <h3>Contact Us</h3>
                          <a href="#"><FontAwesomeIcon icon={faLocationDot} />Capital Park,Hightech City,<br></br>Hyderabad</a>
                          <a href="#"><FontAwesomeIcon icon={faEnvelope} />info@futureinvo.com</a>
                          <a href="#"><FontAwesomeIcon icon={faPhone} />91+ 7981107131</a>
                        
                        </div>
                        </div>
          
                        
                       </div>
                       
                    </div>

           </div>
          <div className="footer-line-contact">
             <div className="lastt" id="last-contact">
             <div className="last-line" id="dup-last">
                     <i>All Copyright 2025 by Futureinvo IT Solutions</i>
                         <i id="ii">Terms & Conditions</i>
                           <i>Privacy Policy</i>
          </div>
          </div>
        
           </div>
          </div>
          
      
    </div>
    
    
    </div>


    </div>
  )
}
