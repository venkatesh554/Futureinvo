import React from 'react'
import "./Faq.css"
import bgimg from "./navbar-images/bgimg.png"
import footericon from "../Navbar/navbar-images/icon.png"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import img3 from "../block1-images/imgg33.jpg"
import img4 from "../block1-images/imgg44.jpg"
import { Link } from "react-router-dom";

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
                to helping you achieve success in the digital world.
            </p>
        </div>
        <div className="bgimg">
          <img src={bgimg}/>
        </div>
        
        <div className="child22">
          <div className="block1">
                    <div className="content-leftt1">
                      <img src={img3}/>
                      <img src={img4} id="img4"/>
                    </div>
                    <div className="content-rightt1">
                       <h2 id="h21">ABOUT Futureinvo IT Solutions</h2>
                       <h2 id="h22">Achieving Business Success<br></br>Through Ultramodern <span>Technology</span></h2>
                       <p id="ss">Futureinvo IT Solutions is Dedicated to transforming innovative ideas into impactful
                          technological solutions. Our team of experts combines industry knowledge with
                        advanced technology to help business navigate the complexities of the digital
                        landscape. We focus on understanding our client's unique challenges and delivering 
                        customized stratagies that drive measurable success.<br></br>
                        Founded in 2021, FutureInvo Solutions began its journey as a partnership
                         firm with a bold vision to redefine digital transformation through innovation,
                          intelligence, and integrity. In our continuous pursuit of excellence, we have 
                          now evolved into FutureInvo Solutions Pvt. Ltd., officially registered under 
                          the Ministry of Corporate Affairs (MCA), Government of India.
                          <br></br>
                          What started as a small tech venture has grown into a dynamic IT 
                          organization powered by a talented team of 98 professionals and a
                           strong record of delivering excellence across 32+ successful client projects in multiple domains.
                          

                        </p>
                        <div className="right-subs">
                                  
                                   </div>
                          </div>
          
                     
                    </div> 
        </div>


         <div className="word-slider-about">
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
       
           </div>
           </div>
       <div className="off">
         <div className="our-offering" id="offer">
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

           <div className="chooseus-about">
            <div className="block8" id="dup3">
            <h2 className="dup3-h2">Why Choose Us?</h2>
            <h2 className="dup3-h2" id="block8-h2-p">Your trusted partner for cutting -edge IT Solutions and digital transformation</h2>

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


               

           <div className="faq-footer" id="faq-footer-dup">
             <div className="line1">
              <img src={footericon}/>
              <p>Join us to gain industry insights and hands-on experience for success in the digital world</p>
              <div className="icn">
                              <a href="https://www.facebook.com/people/Future-Invo-Solutions/61580202340169/?rdid=LstbBpV1YxqmLsX3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19agqq2zMh%2F" ><FontAwesomeIcon icon={faFacebookF}/></a>
                             <a href="https://www.linkedin.com/in/futureinvosolutions/?originalSubdomain=in"> <FontAwesomeIcon icon={faLinkedin}  id="ic-links"/></a>
                             <a href="https://www.instagram.com/futureinvosolutions/?igsh=YmZ6anF1dmQ3aDhr#"><FontAwesomeIcon icon={faInstagram} id="ic-links"/></a>
                            </div>
              <div className="links">
                <div className="links1">
                  <h3>Quick Links</h3>
<Link to="/">                <FontAwesomeIcon icon={faAngleRight} />Future Invo IT Solutions

</Link>    
         <Link to="/OurServicesPage">  <FontAwesomeIcon icon={faAngleRight} />Our Services</Link>
               <Link to="/Faq"> <FontAwesomeIcon icon={faAngleRight} />FAQ'S
               </Link>
               <Link to="/Contact"> <FontAwesomeIcon icon={faAngleRight} />Contact Us</Link>
               <Link to="/Trainings"> <FontAwesomeIcon icon={faAngleRight} />Careers</Link>
              </div>
               <div className="links1">
                  <h3>IT Services</h3>
                                  <Link to="/ItConsulting"><FontAwesomeIcon icon={faAngleRight} /> IT Solutions</Link>

                <Link to="/ItConsulting"><FontAwesomeIcon icon={faAngleRight} /> IT Solutions</Link>
              <Link to="/WebDevelopmentService"> <FontAwesomeIcon icon={faAngleRight} />Web Development</Link>
                <Link to="/MobileApplications"><FontAwesomeIcon icon={faAngleRight} />App Development</Link>
               <Link to="/Trainings">
                <FontAwesomeIcon icon={faAngleRight} />Trainings
               </Link>
              </div>
               <div className="links1">
                  <h3>Contact Us</h3>
<a href="#"><FontAwesomeIcon icon={faLocationDot} />13th floor, Manjera Trinity corporate,<br></br>
Kphb phase 3, beside lulu mall,<br></br>Hyderabad</a>               <a href="#"><FontAwesomeIcon icon={faEnvelope} />info@futureinvo.com</a>
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
