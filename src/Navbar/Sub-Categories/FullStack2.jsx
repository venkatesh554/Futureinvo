import React from 'react';
import '../Service-Pages/service12.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import aiPhoto8_1 from '../images/aiphoto7-2.jpg';
import bottomAI from '../images/bottomai.png';
import photo4 from '../images/networking.png';
import photo5 from '../images/briefcase.png';
import photo6 from '../images/clock.png';
import photo7 from '../images/calculator.png';
import photo8 from '../images/document.png';

function FullStack2() {
  return (
    <div className="Appp">
        
      {/* Main Content Header */}
      <header className="main-content-999">
        <div className="header-content-999">
          <p className="breadcrumbs-999">Home › Full Stack Web & SaaS Development › Scalable SaaS Platforms (ERP, CRM, LMS)</p>
          <h1>“Scalable SaaS Platforms (ERP, CRM, LMS)”</h1>
          <p className="tagline-999">Our Scalable SaaS Platforms (ERP, CRM, LMS) empower businesses to streamline operations, enhance productivity, and scale seamlessly through modern cloud-based solutions.</p>
        </div>
      </header>

      {/* Home Content Section */}
      <div className="home-content-999">
        {/* Image Source: Use imported variable, must be self-closing */}
        <img className="right-image-999" src={aiPhoto8_1} alt="SaaS Illustration" />
        {/* Inline Style: Converted from CSS string to JS object */}
        <h1 style={{ fontSize: '45px' }}>
          Scalable SaaS Platforms (ERP, CRM, LMS)
        </h1>
        <p>
          SaaS platforms like ERP, CRM, and LMS enable organizations to operate efficiently with minimal infrastructure management. Our scalable SaaS solutions provide flexibility, customization, and data security for enterprises of all sizes.
        </p>
        <p>
          We develop SaaS platforms that adapt to your business needs—whether it’s automating workflows, managing clients, or delivering e-learning experiences. Each system is designed for scalability, ensuring smooth performance as your business grows.
        </p>
      </div>

      
        <section className="container-999">
          <form className="form-group-999">
            <h3>Get A Quote For You</h3>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your full name" />
          <label htmlFor="mobile">Mobile</label>
          <input type="text" id="mobile" placeholder="Mobile" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Message"></textarea>
          <button className="sbutton-999">Submit</button>
        </form>
            
          <div className="benefits-999">
            <h2>Benefits With Our Scalable SaaS Platforms</h2>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Cloud Scalability</h3>
                <p>Grow your business without worrying about server limitations.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Customizable Modules</h3>
                <p>Tailor ERP, CRM, or LMS features to suit your unique needs.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Data Security</h3>
                <p>Enterprise-level encryption ensures your data is safe.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Seamless Integration</h3>
                <p>Connect with other apps and APIs effortlessly.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Cost Efficiency</h3>
                <p>Reduce IT overhead with a subscription-based model.</p>
              </div>
            </div>
          </div>
        
        </section>

      {/* Expertise Section */}
      <div className="chatbots-999">
        <h1>Our Expertise in Full Stack Web & SaaS Development</h1>
        <div className="expertise-grid-999">
          {/* <button className="expertise-item-999">Scalable SaaS Platforms (ERP, CRM, LMS) <FontAwesomeIcon icon={faArrowRight} /></button> */}
          <button className="expertise-item-999">API-First Backend (REST, GraphQL) <FontAwesomeIcon icon={faArrowRight} /></button>
          <button className="expertise-item-999">B2B/B2C Portals with Custom Forms <FontAwesomeIcon icon={faArrowRight} /></button>
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
                Your trusted partner for cutting-edge Scalable SaaS Platforms (ERP, CRM, LMS).
              </p>
              <div className="features-grid-999 ">
                <div className="feature-card-999 extensive-999">
                  <img src={photo4} alt="extensive" className="icon-999" />
                  <h3>Extensive IT Expertise</h3>
                  <p>
                    Access to certified professionals across technologies like React,
                    Node.js, AWS, Azure, and more.
                  </p>
                </div><div className="feature-card-999 flexible-999">
                  <img src={photo5} alt="extensive" className="icon-999" />
                  <h3>Flexible Engagement Models</h3>
                  <p>
                    Contract, Hire on contract, contract-to-hire, full-time, or offshore/on-site as per your project needs.
                  </p>
                </div>
                <div className="feature-card-999 quick-999">
                  <img src={photo6} alt="extensive" className="icon-999" />
                  <h3>Quick Turnaround</h3>
                  <p>
                    Fast onboarding and delivery to keep your business ahead of the
                    curve.
                  </p>
                </div>
                <div className="feature-card-999 cross-industry-999">
                  <img src={photo7} alt="extensive" className="icon-999" />
                  <h3>Cross Industry Experience</h3>
                  <p>
                    Proven success across IT consulting, cloud services, digital marketing, and enterprise solutions.
                  </p>
                </div>
                <div className="feature-card-999 sla-driven-999">
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
          <img src={bottomAI} alt="SaaS Expert" />
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
            <summary>What is a SaaS platform? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">A SaaS (Software as a Service) platform delivers software via the internet, removing the need for local installation.</div>
          </details>
        </div>


        <div className="faq-item2-999">
          <details>
            <summary>Can SaaS platforms be customized? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes, we tailor ERP, CRM, and LMS solutions to your business requirements.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Is my data secure? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">We implement robust security measures like encryption and access control.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Can SaaS solutions scale with my business? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Absolutely! Our platforms are built for high scalability and performance.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Do you offer integration with other tools? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes, we ensure seamless integration with third-party tools and APIs.</div>
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

export default FullStack2;
