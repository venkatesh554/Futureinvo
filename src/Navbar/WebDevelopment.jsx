import React,{useState} from 'react'
import "./Training.css"
import one from "./trainingImages/Training-one.png"
import two from "./trainingImages/webdevone.png"
import three from "./trainingImages/webdev2.png"
import four from "./trainingImages/webdev3.png"
import { Link } from "react-router-dom";

import first from "./Training-box-images/firstt.png";
import second from "./Training-box-images/secondd.png"
import third from "./Training-box-images/third.png"
import fourth from "./Training-box-images/fourth.png"
import fifth from "./Training-box-images/fifth.png";
import sixth from "./Training-box-images/sixth.png";
import seventh from "./Training-box-images/seventh.png";
import eighth from "./Training-box-images/eighth.png";
import nineth from "./Training-box-images/nineth.png";

import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

import footericon from "../Navbar/navbar-images/icon.png"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";


import placementone from "./placement-support-images/placement-one.png";
import placementtwo from "./placement-support-images/placement-two.png";
import placementthree from "./placement-support-images/placement-three.png"
import placementfour from "./placement-support-images/placement-four.png";
import placementfive from "./placement-support-images/placement-five.png";
import placementsix from "./placement-support-images/placement-six.jpg"
import bgimg from "./navbar-images/bgimg.png"

export default function WebDevelopment() {

  
   
  return (
    <div className="tt">

   
    <div className="driving-innovation-parent">
        <div className="driving-innovation-child">
            <h1>Next-Gen Web<br></br>Developer with AI</h1>
            <p>Our AI Enhanced Digital Marketing Course trains you to use advanced AI tools and modern development practices to build efficeint, scalable, and user
                friendly websites. Learn to create responsive designs, automate repetitive coding tasks, and optimize website performance with AI-driven tools. This course guides 
                you in making data-driven development decisions, implementing best coding practices, and crafting web experiences that engage users. Step into the future of Web Development,
                creating intelligent, high-performing websites that stand out in today's competitive digital landscape.           </p>
        </div> 
        <div className="bgimg">
          <img src={bgimg} />
        </div>
        
       <div className="bgcolor1">
         <div className="digital-change">
          <h1>Be the Web Developer Pro@ 6 Months!</h1>
          <p>Ready to conquer the world of Web Development! Our best Web Development course in Hyderabad is a comprehensive journey designed to equip you with advanced coding, design, and development skills that set you apart in this competitive field. Over 6 months of in-depth training, you'll explore cutting-edge web development technologies
             while gaining expert insights from industry professionals. Following this, a 3-month internship 
             allows you to apply your learning in real-world projects, ensuring you are job-ready, Whether
              you're a student or a working professional, this program provides the ultimate blend of theoretical mastery and practical experience for a successful career.
          </p>
        </div>
         <div className="component2">
           <img src={one} id="t-one"/>
             <img src={two} id="t-two"/>

       </div>
       </div>
       
      <div className="bgcolor2">
        

     <div className="component3">
     <div className="circle">
       <h2 id="circle1">06 Months Course</h2>
     </div>
        <h2 id="digi">Data</h2>    
        <img src={three} id="web-2" />
       <h2 id="mark">Analyst</h2> 
       <div className="bgg"></div>
           <h2 id="course-high">Course Highlights</h2>
       <div className="right-boxx">
       
        <div className="squre1">
          <img src={first}/>
          <p>Learn with Best IT Company</p>
        </div>
        <div className="squre1">
           <img src={second} id="second" />
          <p>3 Months Internship Certification</p>
        </div>
        <div className="squre1">
           <img src={third} id="third" />
          <p>100% Practical Oriented Training</p>
        </div>
        <div className="squre1">
           <img src={fourth}id="fourth" />
          <p>Website with your name valid for one year</p>
        </div>
        <div className="squre1">
           <img src={fifth} id="fifth"/>
          <p>Case Study Based Assessments</p>
        </div>
        <div className="squre1">
           <img src={sixth} id="sixth" />
          <p>5 Exclusive job interview</p>
        </div>
        <div className="squre1">
           <img src={seventh}id="seventh" />
          <p>Module level certification</p>
        </div>
        <div className="squre1">
           <img src={eighth} id="eighth" />
          <p>Assistance in Google & Meta Certification</p>
        </div>
         <div className="squre1">
           <img src={nineth}id="nineth" />
          <p>23 Advanced Tools</p>
        </div>
       </div>
     </div>
      </div>


           <div className="curriculum">
            <h2>What Our Innovative Curriculum Covers?</h2>
            <h3>What You Learn is What You Get!</h3>
           </div>
        <div className="curriculum-boxes">
         <div className="div1">
          <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Introduction to Web Development</h2>
          <p>Explore the core principles of web development and their relevance in today's digital landscape. Learn how to structure 
            websites, create responsive designs, and build user-friendly interfaces.
          </p>
         </div>
          <div className="div1">
            <FontAwesomeIcon icon={faVolumeHigh} id="volume" />

           <h2>Introduction to Web Development</h2>
          <p>Get an overview of web development fundamentals, including front-end and backend technologies.Learn how to build responsive, user friendly websites and applications
            that deliver seamless experiences.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Web Development Overview</h2>
          <p>Understand the key elements of Web Development, from front-end design to back-end functionality. Learn how website structure and performance impact user experience and overall effectiveness
            performance impacts user experience and conversions.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Feature Research</h2>
          <p>Master the art of researching and selecting the right website feature and components.Learn how to plan and optimize site structure ,design elements, and functionality
            for the best user experience.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Website Optimization </h2>
          <p>Discover the role of website optimization in driving performance and user engagement.Learn strategies to improve site speed , responsiveness, and overall visibility on the web.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Front-End Optimization</h2>
          <p>Learn the importance of optimizing
front-end elements like layout, design,
and interactive components. Discover
best practices to improve website
performance, usability, and user
experience.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Back-End Optimization</h2>
          <p>Explore how to enhance website performance through back-end optimization,
             server management, and database efficiency. Learn strategies to improve site reliability, speed, and overall user experience.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Interactive Web Features</h2>
          <p>Dive into the world of interactive web features, including forms, buttons, 
            and dynamic elements. Learn to design and optimize these components for maximum user engagement and seamless experience.</p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Backend Development</h2>
          <p>Understand how to optimize website architecture, server performance, and code efficiency.
             Learn how to resolve common technical issues that can impact website speed, reliability, and user experience.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>responsive Design</h2>
          <p>Learn to optimize your website for different devices and screen sizes to provide the best user experience.
             Discover techniques for responsive design, adaptive layouts, and accessibility to reach a wider audience.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Website Development Workflow</h2>
          <p>Learn to optimize your website for different devices and screen sizes to provide the best user experience. 
            Discover techniques for responsive design, adaptive layouts, and accessibility to reach a wider audience.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Site Performance Tuning </h2>
          <p>Learn how to optimize websites and web applications for peak performance. 
            Explore techniques to improve loading speed, responsiveness, and user interaction to deliver a seamless experience.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Cross-Platform Web Development</h2>
          <p>Master the skills to design, develop, and optimize websites and web applications.
             Learn about coding best practices, responsive design, performance tuning, and user experience optimization.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Web Projects</h2>
          <p>Master the skills to create, manage, and optimize websites and web applications.
             Learn about responsive design, interactive features, performance optimization, and deployment best practices.</p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Alternative Web Platforms</h2>
          <p>Explore developing and optimizing websites for alternative platforms and environments. 
            Learn to implement cross-browser compatibility, integrate third-party tools, and ensure seamless performance across all platforms.</p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Website Analytics and Monitoring</h2>
          <p>Learn to track and analyze website performance and user interactions. 
            Discover how to use monitoring tools to manage site metrics, optimize features, and implement event tracking for improved user experience.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Web Development: An Introduction</h2>
          <p>Explore the basics of web development, from planning and design to implementation.
             Learn how to create websites that are functional, user-friendly, and optimized for performance.</p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Workflow Automation</h2>
          <p>Learn to automate development workflows, including code deployment, testing, and updates, to save time and improve efficiency. 
            Explore tools and strategies for effective project and task management.</p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Development Workflow Strategy</h2>
          <p>Understand how to create an effective web development strategy and analyze project outcomes.
             Learn to assess key performance metrics and optimize your approach for better website performance and user experience.</p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Web Engagement Modules</h2>
          <p>Discover how to implement real-time communication features on websites, such as chatbots and messaging systems.
             Learn techniques for personalized user interactions and automated responses.</p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Project & Skills Showcase</h2>
          <p>Learn how to create a professional web developer portfolio that showcases your projects and skills. Understand the importance of building</p>
         </div>
        </div>
       
      <div className="bgcolor3">
         <div className="component4">
        <h2>Placement Support</h2>
        <p>Get assured job oppotunities from top companies with our pre-placement training program</p>

        <div className="inside-component">
                 <div className="div2">
                    <img src={placementone} id="career"/>
                         <p>Career Guidance</p>
                </div>
               <div className="div2">
                      <img src={placementtwo} id="guest"/>
                           <p>Guest Lectures</p>
                 </div>
                <div className="div2">
                      <img src={placementthree} id="resume"/>
                             <p>Resume Building</p>
                 </div>
                 <div className="div2">
                         <img src={placementfour} id="mock"/>
                             <p>Mock Interviews</p>
                  </div>
                 <div className="div2">
                      <img src={placementfive}/>
                            <p>Job Ready Skill <br></br>Training</p>
                   </div>
                 <div className="div2">
                         <img src={placementsix}/>
                     <p>Trained By a Digital<br></br> Marketing Agency</p>
                   </div>
            </div>
                   <div className="bgg" id="bgg2"></div>

       </div>
      </div>

       <div className="right-side-component">
        <div className="p"></div>
        <img src={four} id="web-3"/>
       </div>


      <div className="bgcolor4">
         <div className="get-started">
        <h2>Get Started</h2>
        <div className="left-side-para">
          <p>Ready to elevate your digital marketing skills? Get in touch with us today! Fill out them form to access our detailed course
            package, including pricing, curriculum, and flexible learning options. Whether you're looking to kickstart your career or 
            advance your current skill set, out expert team is here to guide you every step of the way.

          </p>
          <ul>
            <li>
              Flexible Learning Schedules
            </li>
            <li>
              Personalized Career Guidance
            </li>
            <li>
              Lifetime loan Access to Course Materials
            </li>
           
          </ul>
          <div className="down-para">
            <h2>Don't Miss Out</h2>
          <p>
            Take the first step towards your Web Development journey now! join thousands of students and successful working professionals 
            who have transformed their careers with our best Web Development Program in Hyderabad. With live projects, case studies blended
            learning program , expert guidance, and flexible learning schedules we ensure you stay ahead in the fast-evolving world of  Web Development

          </p>
          </div>
        </div>
       </div>
       
       <div className="rightside-form" id="training-form">
                      <h2 id="apply">Apply For Upcomming batches</h2>
                     
                      <form onSubmit={handleSubmit}>
    <label>
      Your Name <span id="star">*</span>:
    </label>
    <br />
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange} 
    />
    <br />

    <label>
      Email Address <span id="star">*</span>:
    </label>
    <br />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
    />
    <br />

    <label>
      Mobile Number <span id="star">*</span>:
    </label>
    <br />
    <input
      type="number"
      name="mobile"
      value={formData.mobile}
      onChange={handleChange}
    />
    <br />

    <label>
      City <span id="star">*</span>:
    </label>
    <br />
    <input
      type="text"
      name="city"
      value={formData.city}
      onChange={handleChange}
    />
    <br />

    <label>
      Occupation <span id="star">*</span>:
    </label>
    <br />
    <input
      type="text"
      name="occupation"
      value={formData.occupation}
      onChange={handleChange}
    />
    <br />

    <label>
      Message <span id="star">*</span>:
    </label>
    <br />
    <input
      type="text"
      id="comments-box"
      name="message"
      value={formData.message}
      onChange={handleChange}
    />
    <br />
                      
        <button id="onsubmit" >Submit</button>
       
                      </form>
                       
                      
                   </div>
      </div>


                  <div className="training-footer">
                     <div className="footerr" id="footer-contact">
                               <div className="footer" id="footer-dup">
                                          <div className="line1">
                                           <img src={footericon}/>
                                           <p>Join us to gain industry insights and hands-on experience for success in the digital world</p>
                                            <div className="icn">
                                                                                  <a href="https://www.facebook.com/people/Future-Invo-Solutions/61580202340169/?rdid=LstbBpV1YxqmLsX3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19agqq2zMh%2F#" ><FontAwesomeIcon icon={faFacebookF}/></a>
                                                                                 <a href="https://www.linkedin.com/in/futureinvosolutions/?originalSubdomain=in#"> <FontAwesomeIcon icon={faLinkedin}  id="ic-links"/></a>
                                                                                 <a href="https://www.instagram.com/futureinvosolutions/?igsh=YmZ6anF1dmQ3aDhr#"><FontAwesomeIcon icon={faInstagram} id="ic-links"/></a>
                                                                                </div>
                                            <div className="links">
                <div className="links1">
                  <h3>Quick Links</h3>
<Link to="/">                <FontAwesomeIcon icon={faAngleRight} />Future Invo IT Solutions

</Link>    
         <Link to="/ItConsulting">  <FontAwesomeIcon icon={faAngleRight} />Our Services</Link>
               <Link to="/About"> <FontAwesomeIcon icon={faAngleRight} />FAQ'S
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
Kphb phase 3, beside lulu mall,<br></br>Hyderabad</a>                                             <a href="#"><FontAwesomeIcon icon={faEnvelope} />info@futureinvo.com</a>
                                             <a href="#"><FontAwesomeIcon icon={faPhone} />91+ 7981107131</a>
                                           
                                           </div>
                                           </div>
                             
                                           
                                          </div>
                                          
                                       </div>
                   
                              </div>
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
  )
}
