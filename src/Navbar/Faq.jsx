import React from 'react'
import "./Faq.css"
import bgimg from "./navbar-images/bgimg.png"
import footericon from "../Navbar/navbar-images/icon.png"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";


import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import onee from "./our-offering-images/onee.png"
import twoo from "./our-offering-images/twoo.png"
import threee from "./our-offering-images/threee.png"
import fourr from "./our-offering-images/fourr.png"
import fivee from "./our-offering-images/fivee.png"
import sixx from "./our-offering-images/sixx.png"


import user from "./why-choose/user.png"
import bag from "./why-choose/bag.png";
import time from "./why-choose/time.png";
import calculator from "./why-choose/calculator.png";
import notes from "./why-choose/notes.png"



import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

export default function Faq() {
  return (
    <div className="tt">

   
    <div className="driving-innovation-parent">
        <div className="driving-innovation-child">
            <h1>Driving Innovation Through<br></br>Tailored IT Solutions</h1>
            <p>AT Futureinvo IT Solutions, we specialize in delivering cutting-edge IT service designed to meet the unique needs of business across
                industries. From web development and digital marketing to ERP ,IT product development and consultancy, our expert team is commited 
                to helping you achieve success in the digital world
            </p>
        </div>
        <div className="bgimg">
          <img src={bgimg}/>
        </div>
        <div className="child22">

        </div>
        <div className="our-offering">
          <h2 id="h2">Our Offering</h2>
            <h2 id="h22">Pioneering and Advancing Technology Trends</h2>
            
            <div className="block55">
                  <div className="box-18">
                          <img src={onee} id="imgg18"/>
                            <p className="p00">Our IT Consultancy Offers Expert .tailored solutions to stratagically optimize your technology and drive businesss success</p>

                  </div>
                  <div className="box-19">
                    <img src={twoo}id="imgg19" />
                      <p className="p00">We build robust, scalable websites to your business needs ensuring a seamless and engaging user experience</p>


                  </div>
                  <div className="box-20">
                    <img src={threee} id="imgg20"/>
                          <p className="p00">Our Visually appeaing and user friendly designs capitative your audience enhancing overall engagement and satisfaction</p>


                  </div>
                  <div className="box-21">
                       <img src={fourr} id="imgg21"/>
                       <p className="p00">We develop Innovative mobile apps focused on delivering exceptional user experiences aligned with your business goals</p>
                  </div> 
                   <div className="box-22">
                    <img src={fivee}id="imgg22" />
                      <p className="p00">Our Digital Marketing Stratagies boost your online presence and connect you with your target audience effectively</p>

                  </div> 
                   <div className="box-23">
                    <img src={sixx} id="imgg23" />
                     <h3>For More <br></br>Services</h3>
                  </div> 
                    
                </div>
          </div>
            <div className="words-slider" id="dup1">
               <div className="slider">
               <h2>Digital Marketing *</h2>
               <h2>Web Development *</h2>
               <h2>App Development *</h2>
               <h2>Trainings *</h2>
               <h2>Application Development *</h2>
   
               <h2>Digital Marketing *</h2>
               <h2>Web Development *</h2>
               <h2>App Development *</h2>
               <h2>Trainings *</h2>
               <h2>Application Development *</h2>
               
             </div>
             <div className="block2" id="dup2-class">
            <i id="i1"></i>
            <h2 id="dup1" >Brand Trust Us</h2>
            <i id="i2"></i>
            <div className="names-scroll" id="dup2-class2">
              <em>Swgruha sweets</em>
              <em>Branic</em>
              <em>Aravind Realotrs</em>
              <em>Akshaya chits</em>
              <em>Flexi works</em>
              <em>Navajyothi</em>
              <em>And many more</em>

              <em>Swgruha sweets</em>
              <em>Branic</em>
              <em>Aravind Realotrs</em>
              <em>Akshaya chits</em>
              <em>Flexi works</em>
              <em>Navajyothi</em>
              <em>And many more</em>
            </div>
         </div>
       
           </div>
           <div className="block8" id="dup3">
            <h2 id="dup3-h2">Why Choose Us?</h2>
            <h2 id="dup3-h2">Your trusted partner for cutting -edge IT Solutions and digital transformation</h2>

            <div className="cards2" id="faq-cards">
              <div className="card1">
                <img src={user} id="userr-dup1"/>
                
                <h2>Extensive IT Expertise</h2>
                <p>Access to a team of skilled and certified professionals across technologies like  Node.js,React.js,AWS,Azure, and more</p>

              </div>
              <div className="card2">
                <img src={bag} id="bag-dup1" />
                 <h2>Flexible Engagement Models</h2>
                 <p>Contract, Hire on contact, contract-to-hire, full-time, or offshore/on-site as per your project needs</p>
              </div>
              <div className="card3">
                 <img src={time} id="time-dup1" />
                <h2>Quick Turnaround</h2>
                <p>Fast onboarding and rapid project delivery to keep your business ahead</p>

              </div>
              <div className="card4">
                 <img src={calculator} id="calculator-dup1" />
                <h2>Cross-Industry Experience</h2>
                <p>Proven Success across IT consulting, cloud services, digital marketing, and enterprise solutions</p>

              </div>
              <div className="card5">
                 <img src={notes} id="notes-dup1" />
                <h2>SLA-Driven Delivery</h2>
                <p>Dedicated account management transparent processes,and efficient digital solutions</p>

              </div>
            </div>
          </div>


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
          <div className="last-line" id="dup-last">
            <i>All Copyright 2025 by Futureinvo IT Solutions</i>
            <i id="ii">Terms & Conditions</i>
            <i>Privacy Policy</i>
          </div>
        
       
       
          
        
    </div>
     </div>
  )
}
