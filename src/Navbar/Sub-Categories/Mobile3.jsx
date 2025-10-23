import React from 'react';
import '../Service-Pages/service12.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import aiPhoto8_1 from '../images/aiimage4.3.png';
import bottomAI from '../images/bottomai.png';
import photo4 from '../images/networking.png';
import photo5 from '../images/briefcase.png';
import photo6 from '../images/clock.png';
import photo7 from '../images/calculator.png';
import photo8 from '../images/document.png';

function Machine1() {
  return (
    <div className="Appp">
        
      {/* Main Content Header */}
      <header className="main-content-999">
        <div className="header-content-999">
          <p className="breadcrumbs-999">Home › Mobile Applications › Cross Platform</p>
          <h1>"Cross Platform"</h1>
          <p className="tagline-999">Our Cross Platform help businesses automate processes, enhance decision-making, and unlock new growth opportunities through intelligent innovation.</p>
        </div>
      </header>

      {/* Home Content Section */}
      <div className="home-content-999">
        {/* Inline Style: Converted from CSS string to JS object */}
        <h1 style={{ fontSize: '45px' }}>
          Cross Platform
        </h1>
        {/* Image Source: Use imported variable, must be self-closing */}
        <img className="right-image-999" src={aiPhoto8_1} alt="AI Illustration" />
        <p>
          At Future Invo Solution Pvt. Ltd., we help businesses harness the full potential of Cross Platform. Our solutions go beyond coding—they create seamless, intuitive experiences that enhance customer engagement, optimize processes, and drive measurable results in today's mobile-first world.
        </p>
        <p>Cross Platform has the power to transform industries by enabling businesses to reach millions of users on mobile devices. With our expertise, organizations can leverage feature-rich apps to improve customer experiences, streamline operations, predict trends, and drive revenue. From e-commerce and finance to healthcare and logistics, we deliver scalable, secure, and customized Android applications tailored to your business goals.</p>
        <p>What makes our Cross Platform stand out is the perfect balance between innovation and practicality. Every app we build is user-friendly, high-performing, and feature-rich. From healthcare and finance to retail and logistics, our solutions empower businesses to engage users effectively, achieve sustainable growth, and maintain a competitive edge.</p>
      </div>

      
        <section className="container-999">
          <form className="form-group-999">
            <h3>Get A Quote For You</h3>
          <label htmlFor="name"> Name</label>
          <input type="text" placeholder="Your full name" />
          <label htmlFor="mobile"> Mobile</label>
          <input type="text" placeholder="Mobile" />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Your email" />
          <label htmlFor="message">Message</label>
          <textarea placeholder="Message"></textarea>
          <button className="sbutton-999">Submit</button>
        </form>
            
          <div className="benefits-999">
            <h2>Benefits With Our Cross Platform</h2>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>For Apple Users</h3>
                <p>Reach millions of iphone & ipad users globally.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Customer & Scalable</h3>
                <p>Apps tailored to business requirements & growth.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>User Engagement</h3>
                <p>Intuitive design & seamless performance boost.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Secure & Reliable</h3>
                <p>Builtin security features protect user data.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Apple Ecosystem</h3>
                <p>Leverage device features like Face ID, Siri & sensors.</p>
              </div>
            </div>
          </div>
        
        </section>

      {/* Expertise Section */}
      <div className="chatbots-999">
        <h1>Our Expertise in Mobile Applications</h1>
        <div className="expertise-grid-999">
           <Link to="Mobile1">
                             <button className="expertise-item-999">Android Development   <FontAwesomeIcon icon={faArrowRight} /></button>
         
                   </Link>
                   <Link to="/Mobile2">
                             <button className="expertise-item-999">IOS Development <FontAwesomeIcon icon={faArrowRight} /> </button>
         
                   </Link>
                 
                   <Link to="/Mobile4">
                             <button className="expertise-item-999">AI Integrated Apps(Voice/Camera) <FontAwesomeIcon icon={faArrowRight} /> </button> 
         
                   </Link>
                   <Link to="/Mobile5">
                             <button className="expertise-item-999"> Push Notification System <FontAwesomeIcon icon={faArrowRight} /> </button>
         
                   </Link>
                     
            
        </div>
      </div>

        <div className="services-999">
                                                              <h1>Our Other Services & Solutions</h1>
                                                              <div className="service-button-999">
                                                               <Link to="/ItConsulting">
                                                                <button className="service-item-999">
                                                                  IT Consulting <FontAwesomeIcon icon={faArrowRight} />
                                                                </button>
                                                               </Link>
                                                              <Link to="/WebDevelopmentService">
                                                                <button className="service-item-999">
                                                                  Web Development <FontAwesomeIcon icon={faArrowRight} />
                                                                </button></Link>
                                                                <Link to="/WebDesign">
                                                                <button className="service-item-999">
                                                                  Web Design <FontAwesomeIcon icon={faArrowRight} />
                                                                </button></Link>
                                                               <Link to="/MobileApplications">
                                                                <button className="service-item-999">
                                                                  Mobile Applications <FontAwesomeIcon icon={faArrowRight} />
                                                                </button></Link>
                                                               <Link to="/DigitalMarket">
                                                                <button className="service-item-999">
                                                                  Digital Marketing Services <FontAwesomeIcon icon={faArrowRight} />
                                                                  
                                                                </button></Link>
                                                                <Link to="/DataScienceService">
                                                                <button className="service-item-999">
                                                                  Data Science & Big Data Analytics <FontAwesomeIcon icon={faArrowRight} />
                                                                  
                                                                </button></Link>
                                                                {/* <button className="service-item-999">
                                                                  Machine Learning & Deep Learning <FontAwesomeIcon icon={faArrowRight} />
                                                                  
                                                                </button> */}
                                                               <Link to="/Csda">
                                                                <button className="service-item-999">
                                                                  Cloud Services & DevOps Automation <FontAwesomeIcon icon={faArrowRight} />
                                                                  
                                                                </button></Link>
                                                               <Link to="/Ai">
                                                                <button className="service-item-999">
                                                                  Artificial Intelligence <FontAwesomeIcon icon={faArrowRight} />
                                                                </button></Link>
                                                              
                                                               <Link to="/CyberSecurity">
                                                                <button className="service-item-999">
                                                                  Cyber Solutions <FontAwesomeIcon icon={faArrowRight} />
                                                                </button></Link>
                                                               <Link to="/Emerging">
                                                                <button className="service-item-999">
                                                                  Emerging Tech <FontAwesomeIcon icon={faArrowRight} />
                                                                </button></Link>
                                                                <Link to="/FullStackService">
                                                                <button className="service-item-999">
                                                                  Full Stack Web & SaaS Development <FontAwesomeIcon icon={faArrowRight} />
                                                                </button>
                                                                </Link>
                                                              </div>
                                                            </div>
     

      <div className="why-choose-us-999">
              <h2>Why Choose Us?</h2>
              <p className="subheading-999">
                Your trusted partner for cutting-edge Cross Platform.
              </p>
              <div className="features-grid-999 ">
                <div className="feature-card extensive-999">
                  <img src={photo4} alt="extensive" className="icon-999" />
                  <h3>Extensive IT Expertise</h3>
                  <p>
                    Access to certified professionals across technologies like React,
                    Node.js, AWS, Azure, and more.
                  </p>
                </div><div className="feature-card flexible-999">
                  <img src={photo5} alt="extensive" className="icon-999" />
                  <h3>Flexible Engagement Models</h3>
                  <p>
                    Contract, Hire on contract, contract-to-hire, full-time, or offshore/on-site as per your project needs.
                  </p>
                </div>
                <div className="feature-card quick-999">
                  <img src={photo6} alt="extensive" className="icon-999" />
                  <h3>Quick Turnaround</h3>
                  <p>
                    Fast onboarding and delivery to keep your business ahead of the
                    curve.
                  </p>
                </div>
                <div className="feature-card cross-industry-999">
                  <img src={photo7} alt="extensive" className="icon-999" />
                  <h3>Cross Industry Experience</h3>
                  <p>
                    Proven success across IT consulting, cloud services, digital marketing, and enterprise solutions.
                  </p>
                </div>
                <div className="feature-card sla-driven-999">
                  <img src={photo8} alt="extensive" className="icon-999" />
                  <h3>SLA-Driven Delivery</h3>
                  <p>
                    Transparent processes and reliable execution for every project.
                  </p>
                </div>
              </div>
            </div>

      {/* Talk To Experts Section */}
      <section className="background-overlay-999">
        <div className="ai-image-container-999">
          {/* Image Source: Use imported variable, must be self-closing */}
          <img src={bottomAI} alt="AI Expert" />
        </div>
        <div className="form-container-999">
          <h2>Talk To Our Experts</h2>
          <form>
            <div className="form2-group-999">
              {/* Input is self-closing */}
              <input type="text" id="name2" name="name" placeholder="Name" required />
            </div>
            <div className="form2-group-999">
              {/* Input is self-closing */}
              <input type="tel" id="phone2" name="phone" placeholder="Phone Number" required />
            </div>
            <div className="form2-group-999">
              {/* Input is self-closing. Note: 're' at the end of required was fixed to 'required' */}
              <input type="email" id="email2" name="email" placeholder="Email" required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="faq-container-999">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item2-999">
          <details>
            <summary>Do you provide Cross Platform services remotely, on-site, or both? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">We provide Cross Platform services both remotely & on-site,based on client needs & project requirements and client preference.</div>
          </details>
        </div>


        <div className="faq-item2-999">
          <details>
            <summary>What do Cross Platform app development solutions involve? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Cross Platform app development solutions involve designing, building, testing, and deploying custom mobile applications optimized for performance, security, and user experience.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Can Future Invo assist with performance optimization and device integration for cross-platform apps? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes, We ensure robust security measures in all Andriod apps to protect sensitive data and maintain app integrity.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Which industries does Future Invo specialize in Cross Platform app development? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">We specialize in healthcare, finance, retail,logistics, education, and technology your business from threats and ensure secure operations.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>How can Cross Platform app development benefit my business? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Cross Platform app development benefit your business by : Accesssing a wide user base across smartphone and tablets.</div>
          </details>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2025 FutureInvo Solutions Pvt Ltd. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Machine1;
