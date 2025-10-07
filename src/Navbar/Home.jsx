import React from 'react'
import "./cssfiles/Home.css"
import img1 from "../firstpage-images/img1.png"
import img2 from "../firstpage-images/img2.png"

import img3 from "../block1-images/img3.jpg"
import img4 from "../block1-images/img4.jpeg"
import img5 from "../block1-images/img5.png";
import img6 from "../block1-images/img6.png"


import it from "../saervice-images/it.png"
import digital from "../saervice-images/digital.png"
import web from "../saervice-images/web.png"
import app from "../saervice-images/app.png"
import develop from "../saervice-images/develop.png"

import friends from "../saervice-images/friends.jpg";
import man from "../saervice-images/man.png";
import footericon from "../Navbar/navbar-images/icon.png"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";


import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import user from "./why-choose/user.png"
import bag from "./why-choose/bag.png";
import time from "./why-choose/time.png";
import calculator from "./why-choose/calculator.png";
import notes from "./why-choose/notes.png"


export default function Home() {
  return (
    <div className="parent">
      <div className="child">
            <p id="p1"><button id="b1"></button>BEST IT SOLUTION PROVIDER</p>
           <h1>Futureinvo Solutions - Shaping Your<br></br>Digital Future with Ai & IT Excellence</h1>
           <p id="p2">At Futureinoy Solutions, we empower businesses to grow and succeed in the digital world through smart, Al-driven IT solutions. Whether it's building intelligent websites, designing stunning user interfaces, creating powerful mobile apps or delivering impactful digital marketing and training—we do it all with innovation at the core. 
              Our mission is to turn your ideas into real, results-driven digital experiences.</p><br></br>
            <p id="p2">We help future-proof your business and drive meaningful transformation. With a team of experienced professionals, 
                we're here to guide your journey every step of the way-making your digital goals not just possible, but unstoppable
          </p>
            <button>Explore More <FontAwesomeIcon icon={faArrowRight} id="iicon"/></button>
      </div>


      <div className="right-content">
         <img src={img2} id="img2"/>
        <img src={img1} id="img2-1"/>
      </div>

      <div className="words-slider">
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

           <div className="block1">
                <div className="content-leftt1">
                    <img src={img3}/>
                    <img src={img4} id="img4"/>
                 </div>

                <div className="content-rightt1">
                      <h2 id="h21">ABOUT Futureinvo IT Solutions</h2>
                       <h2 id="h22">Empowering Business Growth<br></br>Through Innovative <span>Technology</span></h2>
                          <p id="ss">Futureinvo IT Solutions is an IT company based in Hyderabad, specializing in web
                            development, Web design, mobile application development, digital marketing services
                            and trainings. As a subsidiary of knowledge,we are commited to delivering
                            innovative and effective digital solutions tailored to meet the needs of our clients.Our 
                            team of experts is dedicated to helping businesses succeed in the digital landscape
                            through high quality services and personalized support.</p>
                     <div className="right-subs">
                             <div className="right-sub1">
                                 <img src={img5}/>
                                   <p id="heads">Vision</p>
                                  <p>Innovationg Futures<br></br>Through Technology</p>
                              </div>

                              <div className="right-sub2">
                                  <img src={img6}/>
                                  <p id="heads">Mission</p>
                                  <p>Empowering with<br></br>Digital Solutions</p>
                               </div>
                       </div>
                 </div>
 
             </div>


       <div className="block2">
            <i id="i1"></i>
            <h2 >Brand Trust Us</h2>
            <i id="i2"></i>
            <div className="names-scroll">
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
         <div className="block3">
          <h2 id="h2"><span>IT Services & Solutions</span></h2>
            <h2 id="h22">Our Services</h2>
                         
            <div className="block5">
                  <div className="box-18">
                    <img src={it}/>
                          <h3>IT Consulting</h3>
                            <p className="p00">Our IT Consultancy Offers Expert .tailored solutions to stratagically optimize your technology and drive businesss success</p>

                          <button> View More <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div>
                  <div className="box-19">
                    <img src={develop}/>
                     <h3>Web Development</h3>
                      <p className="p00">We build robust, scalable websites to your business needs ensuring a seamless and engaging user experience</p>


                     <button>View More <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div>
                  <div className="box-20">
                    <img src={web}/>
                    <h3>Web Design</h3>
                          <p className="p00">Our Visually appeaing and user friendly designs capitative your audience enhancing overall engagement and satisfaction</p>

                      <button>View More <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div>
                  <div className="box-21">
                    <img src={app}/>
                     <h3>App Development</h3>
                       <p className="p00">We develop Innovative mobile apps focused on delivering exceptional user experiences aligned with your business goals</p>
                      <button>View More <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div> 
                   <div className="box-22">
                    <img src={digital}/>
                     <h3>Digital Marketing Service</h3>
                      <p className="p00">Our Digital Marketing Stratagies boost your online presence and connect you with your target audience effectively</p>

                      <button>View More <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div> 
                   <div className="box-23">
                     <h3>For More <br></br>Services</h3>
                      <button>Click Here <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div> 
                    
                </div>
          </div>

           <div className="block8">
            <h2>Why Choose Us?</h2>
            <h2 id="block8-h2-p">Your trusted partner for cutting -edge IT Solutions and digital transformation</h2>

            <div className="cards2">
              <div className="card1">
                <img src={user} id="userr"/>
                <h2>Extensive IT Expertise</h2>
                <p>Access to a team of skilled and certified professionals across technologies like  Node.js,React.js,AWS,Azure, and more</p>

              </div>
              <div className="card2">
                <img src={bag} id="bag" />
                 <h2>Flexible Engagement Models</h2>
                 <p>Contract, Hire on contact, contract-to-hire, full-time, or offshore/on-site as per your project needs</p>
              </div>
              <div className="card3">
                <img src={time} id="time" />
                <h2>Quick Turnaround</h2>
                <p>Fast onboarding and rapid project delivery to keep your business ahead</p>

              </div>
              <div className="card4">
                <img src={calculator} id="calculator" />
                <h2>Cross-Industry Experience</h2>
                <p>Proven Success across IT consulting, cloud services, digital marketing, and enterprise solutions</p>

              </div>
              <div className="card5">
                <img src={notes} id="notes" />
                <h2>SLA-Driven Delivery</h2>
                <p>Dedicated account management transparent processes,and efficient digital solutions</p>

              </div>
            </div>
          </div>




          <div className="block6">
            <div className="bg1">
                <h3 id="testinomial">Testimonials</h3>
                <h2>What's Clients Say</h2>
                <p>Future Invo IT Solutions Transformed our digital presence. their team understood our needs and delivered beyond expectations. Truely professional and reliable.</p>
                <h3 id="name">Rajesh Kumar</h3>
                <p id="founder">Founder, TechWave Solutions</p>
            </div>
            <div className="bg1">
               <h3 id="testinomial">Testimonials</h3>
                <h2>What's Clients Say</h2>
                <p>Working with Future Invo was a game-changer. their solutions increased our operational efficiency and boosted customer engagement significantly.</p>
                <h3 id="name">Sneha Reddy</h3>
                <p id="founder">CEO, GreenLeaf Enterprises</p>

            </div>
          </div>

            <div className="block9">
            <h2>Talk To Our Experts</h2>
            <form>
              <label>Name:</label>
              <input type="text"></input>
              <label>Phone:</label>
              <input type="number"></input>
              <label>Email:</label>
              <input type="email" ></input>
              <submit id="submitt">Submit</submit>
             </form>
            <img src={man}/>
             
          </div>
          <div className="block7">
            <h2 id="keep">Keep Ypur FAQ'S</h2>
            <h2 id="business"> Keep Your Business Safe & <br></br>Ensure High Avaliability</h2><br></br>
            <div className="paras">
              <p>What type of IT consulting services Do You Offer? <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>What is Your Approach To Web Design <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>Do You Develop Apps For Both Android And  ios <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>What Training Programs Does Future Invo Sol Offer? <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>What Digital Marketing Service Do You Provide? <FontAwesomeIcon icon={faAnglesDown}id="ic" /></p>
            <p>How can i Enroll In A Training Program At Future Invo Solutions? <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>What Technologies Do You Use For Web Development? <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p className="eight">How Is Future Invo Solutions Different From Other Coaching Centers? <FontAwesomeIcon icon={faAnglesDown} id="ic"  /></p>
            <p className="eight">Are There Any Internship Opportunities Avaliable During The Digital Marketing Course <FontAwesomeIcon icon={faAnglesDown} id="ic"  /></p>
             <p className="eight">Does Future Invo Provides services remotely, on-site,or both? <FontAwesomeIcon icon={faAnglesDown} id="ic"  /></p>
            </div>
          </div>

          <div className="footer">
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
          <div className="last-line">
            <i>All Copyright 2025 by Futureinvo IT Solutions</i>
            <i id="ii">Terms & Conditions</i>
            <i>Privacy Policy</i>
          </div>
        
         

          
</div>
 
    

    
  )
}
