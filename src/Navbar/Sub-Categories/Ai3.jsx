import React from 'react';
import '../Service-Pages/service12.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import aiPhoto8_1 from '../images/aiphoto4.jpg';
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
          <p className="breadcrumbs-999">Home › AI & Artificial Intelligence Solutions › AI in Healthcare</p>
          <h1>"AI in Healthcare"</h1>
          <p className="tagline-999">Our AI in Healthcare help businesses automate processes, enhance decision-making, and unlock new growth opportunities through intelligent innovation.</p>
        </div>
      </header>

      <div className="home-content-999">
        <h1 style={{ fontSize: '45px' }}>
          AI in Healthcare
        </h1>
        {/* Image Source: Use imported variable, must be self-closing */}
        <img className="right-image-999" src={aiPhoto8_1} alt="AI Illustration" />
        <p>
          At Future Invo Solution Pvt. Ltd., our AI in Healthcare solutions are designed to revolutionize patient care, diagnostics, and operational efficiency. By leveraging AI algorithms for imaging, diagnostics, patient monitoring, and predictive analytics, healthcare providers can make faster, more accurate decisions, improve outcomes, and reduce costs. AI helps detect anomalies in medical images, predict disease progression, and provide personalized treatment recommendations.
        </p>
        <p>
          Telemedicine is enhanced with AI-powered virtual assistants, chatbots, and triage systems, allowing patients to receive care remotely while healthcare teams focus on critical cases. Predictive analytics optimize hospital resource management, optimizing staff scheduling, bed allocation, and overall hospital operations.
        </p>
        <p>With Future Invo's AI Healthcare solutions, organizations gain a data-driven approach to patient care, enabling preventive medicine delivery, enhancing care and operational performance, ultimately improving both patient outcomes and healthcare provider efficiency.</p>
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
            <h2>Benefits With Our AI in Healthcare</h2>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>AI-assistent</h3>
                <p>Diagnostics for faster & more accurate detection.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Personalized Treatment</h3>
                <p>Recommendations using predictive analytics.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Telemedicine AI</h3>
                <p>Telemedicine AI for remote consultations & triage.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Optimized Hospital</h3>
                <p>Optimized hospital resource management & scheduling.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Scalable Solution</h3>
                <p>Solutions for clinics, hospitals, and large healthcare.</p>
              </div>
            </div>
          </div>
        
        </section>

      {/* Expertise Section */}
      <div className="chatbots-999">
        <h1>Our Expertise in AI "Artificial Intelligence" Powered Chatbots</h1>
        <div className="expertise-grid-999">
           <Link to="/Ai6">
                             <button className="expertise-item-999">Image & Video Intelligence <FontAwesomeIcon icon={faArrowRight} /> </button>
         
                   </Link>
                   <Link to="/Ai4">
                             <button className="expertise-item-999"> AI OCR & Document Intelligence <FontAwesomeIcon icon={faArrowRight} /> </button>
         
                   </Link>
                   <Link to="/Ai5">
                             <button className="expertise-item-999">Generative AI Solutions <FontAwesomeIcon icon={faArrowRight} /> </button>
         
                   </Link>
                  
                   <Link to="/Ai2">
                             <button className="expertise-item-999">AI in Finance <FontAwesomeIcon icon={faArrowRight} /> </button>
         
                   </Link>
                   <Link to="/Ai1">
                             <button className="expertise-item-999"> AI Powered Chatbots <FontAwesomeIcon icon={faArrowRight} /> </button>
         
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
                Your trusted partner for cutting-edge AI in Healthcare.
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
            <summary>Can AI really detect diseases faster than humans? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes, AI assists radiologists and clinicians by analyzing data with high speed and precision.</div>
          </details>
        </div>


        <div className="faq-item2-999">
          <details>
            <summary>Is patient data secure? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Absolutely, all data is encrypted and HIPAA-compliant.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Can this integrate with existing hospital systems? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes, AI integrates seamlessly with EHR, HIS, and telemedicine platforms.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Which healthcare areas benefit most? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Diagnostics, patient monitoring, telemedicine, hospital operations.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>How long does deployment take? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Typically 6-10 weeks depending on hospital size and integration needs.</div>
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
