import React from 'react';
import '../Service-Pages/service12.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import aiPhoto8_1 from '../images/aiimage2.3.png';
import bottomAI from '../images/bottomai.png';
import photo4 from '../images/networking.png';
import photo5 from '../images/briefcase.png';
import photo6 from '../images/clock.png';
import photo7 from '../images/calculator.png';
import photo8 from '../images/document.png';
import { Link } from "react-router-dom";


function Machine1() {
  return (
    <div className="Appp">
        
      {/* Main Content Header */}
      <header className="main-content-999">
        <div className="header-content-999">
          <p className="breadcrumbs-999">Home › Web Development › API Development & Integration</p>
          <h1> "API Development & Integration"</h1>
          <p className="tagline-999">Our API Development & Integration help businesses automate processes, enhance decision-making, and unlock new growth opportunities through intelligent innovation.</p>
        </div>
      </header>

      {/* Home Content Section */}
      <div className="home-content-999">
        {/* Inline Style: Converted from CSS string to JS object */}
        <h1 style={{ fontSize: '45px' }}>
          API Development & Integration
        </h1>
        {/* Image Source: Use imported variable, must be self-closing */}
        <img className="right-image-999" src={aiPhoto8_1} alt="AI Illustration" />
        <p>
          At Future Invo Solution Pvt. Ltd., we help businesses unlock the full potential of API development and integration. Our tailored solutions go beyond connecting systems—they transform how organizations streamline operations, enhance data flow, and drive business growth in today's interconnected world.
        </p>
        <p>
          API Development & Integration has the power to reshape industries by enabling seamless connectivity and efficient data exchange. With our expertise, businesses can leverage tailored APIs and integrations to optimize processes, enhance interoperability, predict trends, and improve efficiency. From secure, scalable APIs to advanced integrations and industry-specific solutions, we deliver reliable, customized services that meet every business need.
        </p>
        <p>
          What makes our API Development & Integration services stand out is the perfect balance of innovation and practicality. Every solution we build is secure, scalable, and designed to drive results. From healthcare and finance to retail and logistics, our integrations empower businesses to achieve sustainable growth and stay competitive in the digital ecosystem.
        </p>
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
            <h2>Benefits With Our API Development & Integration</h2>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Seamless Connectivity</h3>
                <p>Connect different applications and systems.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Improved Efficiency</h3>
                <p>Automates workflows and reduces manual processes.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Data Access</h3>
                <p>Real-time data sharing for informed decision-making.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Advanced Analytics</h3>
                <p>Track customer behaviour, sale trends and reliable.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Secure & Reliable</h3>
                <p>Robust security features routine tasks white your team.</p>
              </div>
            </div>
          </div>
        
        </section>

      {/* Expertise Section */}
      <div className="chatbots-999">
        <h1>Our Expertise in Web Development </h1>
        <div className="expertise-grid-999">

          <Link to="/Webdev1">
          <button className="expertise-item-999">
            Custom Website Development <FontAwesomeIcon icon={faArrowRight} />
          </button>
         </Link>
        <Link to="/Webdev2">
                  <button className="expertise-item-999">E-Commerence Platforms <FontAwesomeIcon icon={faArrowRight} /> </button>
        
        </Link>    
       
        <Link to="/Webdev4">
                  <button className="expertise-item-999">CMS Development(Wordpress, Drupal) <FontAwesomeIcon icon={faArrowRight} /> </button>
        
        </Link >
        <Link to="/Webdev5">
                  <button className="expertise-item-999">Progressive Web Apps(PWAs) <FontAwesomeIcon icon={faArrowRight} /> </button>
        
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
                Your trusted partner for cutting-edge API Development & Integration.
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
            <summary>How can API Development & Integration Solutions Befenit My Business? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">API Development & Integration solutions streamline operations, enhance customer engaement, and drive business growth. </div>
          </details>
        </div>


        <div className="faq-item2-999">
          <details>
            <summary>Do You Offer Remote or On-Site API Development & Integration Solutions? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">"We Offer both remote and on-site API Development & Integration services tailored to your business needs".</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>What Do API Development & Integration Solutions Involve? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Our API Development & Integration solutions involve designing responsive websites,buiding custom applications, and providing ongoing support for business growth.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Can Future Invo API Development & Integration services Assist With website Security? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes. Future Invo API Development & Integration Solutions provides expert Website security consulting to protect your business from threats and ensure secure operations.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>What Industries Does future invo specialize in for API Development & Integration services? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Future Invo IT Solutions specializes in API Development & Integration for healthcare,finance, logistics, and other industries seeking digital Transformation and optimized technology solutions</div>
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
