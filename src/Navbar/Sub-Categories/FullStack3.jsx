import React from 'react';
import '../Service-Pages/service12.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


import aiPhoto8_1 from '../images/aiphoto7-3.jpg';
import bottomAI from '../images/bottomai.png';
import photo4 from '../images/networking.png';
import photo5 from '../images/briefcase.png';
import photo6 from '../images/clock.png';
import photo7 from '../images/calculator.png';
import photo8 from '../images/document.png';

function FullStack3() {
  return (
    <div className="Appp">
        
      {/* Main Content Header */}
      <header className="main-content-999">
        <div className="header-content-999">
          <p className="breadcrumbs-999">Home &gt; Full Stack Web &amp; Saas Development &gt; B2B/B2C Portals with Custom Roles</p>
          <h1>“B2B/B2C Portals with Custom Roles”</h1>
          <p className="tagline-999">Our B2B/B2C Portals with Custom Roles help businesses automate processes, enhance decision-making, and unlock new growth opportunities through intelligent innovation.</p>
        </div>
      </header>

      {/* Home Content Section */}
      <div className="home-content-999">
        {/* Image Source: Use imported variable, must be self-closing */}
        <img className="right-image-999" src={aiPhoto8_1} alt="B2B/B2C Portal" />
        {/* Inline Style: Converted from CSS string to JS object */}
        <h1 style={{ fontSize: '45px' }}>
          B2B/B2C Portals with Custom Roles
        </h1>
        <p>
          B2B/B2C portals are web-based platforms that facilitate interaction between a business and its customers or other businesses. These portals provide a centralized location for users to access information, place orders, track shipments, and manage their accounts. They are essential for modern businesses looking to improve efficiency, streamline processes, and enhance the customer experience.
        </p>
        <p>
          FutureWe helps you build modern, customizable, and secure B2B/B2C portals with custom roles and permissions that cater to your specific business needs and requirements. We leverage the latest technologies and best practices to ensure your portal is scalable, secure, and future-proof.
        </p>
      </div>

      
        <section className="container-999">
          <form className="form-group-999">
            <h2>Get A Quote For You</h2>

            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />

            <label htmlFor="mobile">Mobile</label>
            <input type="tel" id="mobile" placeholder="Enter your contact number" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Message for us" rows="4"></textarea>

            <button className="sbutton-999" type="submit">Submit</button>
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
          <button className="expertise-item-999">Scalable Saas Platform (ERP, CRM, HRM) <FontAwesomeIcon icon={faArrowRight} /></button>
          {/* <button className="expertise-item-999">B2B/B2C Portals with Custom Forms <FontAwesomeIcon icon={faArrowRight} /></button> */}
          <button className="expertise-item-999">API-First Backend (REST, GraphQL) <FontAwesomeIcon icon={faArrowRight} /></button>
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
                Your trusted partner for cutting-edge B2B/B2C Portals with Custom Roless.
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
            <summary>Do portals support multi-role access? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes, our portals are designed to provide custom roles and permissions for different user types.</div>
          </details>
        </div>


        <div className="faq-item2-999">
          <details>
            <summary>Do you provide architecture? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes, we provide architecture for your portal.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>What industries benefit most? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">E-commerce, logistics, manufacturing, and financial services benefit most.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Can the portal integrate with ERP/CRM? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes, we provide a seamless integration for an effective workflow.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>How secure is the system? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">We use the best security practices to ensure your data is protected.</div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default FullStack3;
