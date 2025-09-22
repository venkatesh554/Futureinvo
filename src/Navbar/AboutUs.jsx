import React from 'react'
import "./about.css"
import footericon from "../Navbar/navbar-images/icon.png"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import bgimg from "./navbar-images/bgimg.png"


import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import user from "./why-choose/user.png"
import bag from "./why-choose/bag.png";
import time from "./why-choose/time.png";
import calculator from "./why-choose/calculator.png";
import notes from "./why-choose/notes.png"


export default function AboutUs() {
  return (
    <div className="tt">
      <div className="faq">
        <div className="dup-from-faq">
            <h1>FAQs</h1>
            
          </div>
           <div className="block7" id="sevenn">
            <h2 id="business"> What's on your mind? Just ask us!</h2><br></br>
            <div className="paras" id="parass">
              <p>What type of IT consulting services Do You Offer? <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>What is Your Approach To Web Design <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>Do You Develop Apps For Both Android And  ios <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>What Training Programs Does Future Invo Sol Offer? <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>What Digital Marketing Service Do You Provide? <FontAwesomeIcon icon={faAnglesDown}id="ic" /></p>
            <p>How can i Enroll In A Training Program At Future Invo Solutions? <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>What Technologies Do You Use For Web Development? <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p className="eight">How Is Future Invo Solutions Different From Other Coaching Centers? <FontAwesomeIcon icon={faAnglesDown} id="ic"  /></p>
            <p className="eight">Are There Any Internship Opportunities Avaliable During The Digital Marketing Course <FontAwesomeIcon icon={faAnglesDown} id="ic"  /></p>
            </div>
          </div>
          <div className="bgimgcopy">
            <img src={bgimg}/>
          </div>

          <div className="chooseus">
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
          </div>
           <div className="footerr">

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
           <div className="lastt">
             <div className="last-line" id="dup-last">
            <i>All Copyright 2025 by Futureinvo IT Solutions</i>
            <i id="ii">Terms & Conditions</i>
            <i>Privacy Policy</i>
          </div>
        
           </div>
          
      
    </div>
    
    
    </div>

  )
}
