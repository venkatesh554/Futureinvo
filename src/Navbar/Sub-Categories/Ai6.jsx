import React from 'react';
import '../Service-Pages/service12.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import aiPhoto8_1 from '../images/aiphoto7.jpg';
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
          <p className="breadcrumbs-999">Home › AI & Artificial Intelligence Solutions › Image & Video Intelligence</p>
          <h1>"Image & Video Intelligence"</h1>
          <p className="tagline-999">Our Image & Video Intelligence help businesses automate processes, enhance decision-making, and unlock new growth opportunities through intelligent innovation.</p>
        </div>
      </header>

      {/* Home Content Section */}
      <div className="home-content-999">
        {/* Inline Style: Converted from CSS string to JS object */}
        <h1 style={{ fontSize: '45px' }}>
          Image & Video Intelligence
        </h1>
        {/* Image Source: Use imported variable, must be self-closing */}
        <img className="right-image-999" src={aiPhoto8_1} alt="AI Illustration" />
        <p>
          At Future Invo Solution Pvt. Ltd, we provide Image & Video Intelligence solutions that transform raw visual data into actionable insights. In today’s world, images and videos are everywhere — from CCTV footage and drones to social media and medical imaging. Manually analyzing this data is slow and error-prone. Our solutions use computer vision, deep learning, and object recognition to analyze, classify, and interpret visuals in real time, empowering businesses with intelligence to make informed decisions.
        </p>
        <p>Our solutions can automate facial recognition, anomaly detection, product identification, and motion tracking. For example, retailers can track shelf inventory, hospitals can analyze medical scans for early diagnosis, and manufacturers can inspect products for defects automatically. The technology allows organizations to spot problems early, and optimize operations at speed and scale humans cannot.</p>
        <p>Our systems are designed to improve over time. The more data they process, the smarter and more precise they become, helping organizations stay ahead. Image & Video Intelligence drives efficiency, safety, quality, and engagement, delivering measurable impact across industries.</p>
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
            <h2>Benefits With Our Image & Video Intelligence</h2>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Facial recognition</h3>
                <p>Object detection for security & asset monitoring.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Automate quality</h3>
                <p>Control in manufacturing to reduce defects.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Medical imaging</h3>
                <p>Imaging for faster and more accurate diagnoses.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Monitor retail</h3>
                <p>Monitor retail shelves to optimize stock.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Customer reactions</h3>
                <p>Assess customer reactions in marketing campaigns.</p>
              </div>
            </div>
          </div>
        
        </section>

      {/* Expertise Section */}
      <div className="chatbots-999">
        <h1>Our Expertise in AI "Artificial Intelligence" Powered Chatbots</h1>
        <div className="expertise-grid-999">
          <button className="expertise-item-999">AI Powered Chatbots  <FontAwesomeIcon icon={faArrowRight} /></button>
            
          <Link to="/Ai5">
                    <button className="expertise-item-999"> AI OCR & Document Intelligence <FontAwesomeIcon icon={faArrowRight} /> </button>

          </Link>
          <Link to="/Ai4">
                    <button className="expertise-item-999">Generative AI Solutions <FontAwesomeIcon icon={faArrowRight} /> </button>

          </Link>
          <Link to="/Ai3">
                    <button className="expertise-item-999"> AI in Healthcare <FontAwesomeIcon icon={faArrowRight} /> </button>

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
                Your trusted partner for cutting-edge Image & Video Intelligence.
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
            <summary>Which industries benefit most? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Healthcare, retail, manufacturing, logistics, security, agriculture, marketing, and media.</div>
          </details>
        </div>


        <div className="faq-item2-999">
          <details>
            <summary>How accurate are AI image and video systems? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">High accuracy with deep learning models; improves over time.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Can it work with existing cameras? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes, fully compatible with CCTV, drones, and other hardware.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Is the data secure? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes, all data is encrypted and compliant with GDPR/HIPAA.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>What is the cost? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Cost depends on complexity and scale; tailored quotes available.</div>
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
