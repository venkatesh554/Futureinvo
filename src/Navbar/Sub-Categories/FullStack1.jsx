import React from 'react';
import '../Service-Pages/service12.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import aiPhoto8_1 from '../images/aiphoto7-1.jpg';
import bottomAI from '../images/bottomai.png';
import photo4 from '../images/networking.png';
import photo5 from '../images/briefcase.png';
import photo6 from '../images/clock.png';
import photo7 from '../images/calculator.png';
import photo8 from '../images/document.png';

function FullStack1() {
  return (
    <div className="Appp">
        
      {/* Main Content Header */}
      <header className="main-content-999">
        <div className="header-content-999">
          <p className="breadcrumbs-999">Home › Full Stack Web & Saas Development › API-First Backend (REST, GraphQL)</p>
          <h1> "API-First Backend (REST, GraphQL)"</h1>
          <p className="tagline-999">Our API-First Backend (REST, GraphQL) help businesses automate processes, enhance decision-making, and unlock new growth opportunities through intelligent innovation.</p>
        </div>
      </header>

      {/* Home Content Section */}
      <div className="home-content-999">
        {/* Image Source: Use imported variable, must be self-closing */}
        <img className="right-image-999" src={aiPhoto8_1} alt="AI Illustration" />
        {/* Inline Style: Converted from CSS string to JS object */}
        <h1 style={{ fontSize: '45px' }}>
          API-First Backend (REST, GraphQL)
        </h1>
        <p>
          An API-first approach to backend development simply means that the API will be treated as a "first-class citizen" in your development process. This means that the development of the API is started before any other component of the application, such as the front-end or the database. The API will be the basis of all interactions, making your applications more flexible and future-proof.
        </p>
        <p>
          API-first backend development is the future of application development. It will help you build modern, scalable, and secure applications that can interact with any device, platform, or technology. The API-first approach will allow your application to be used by other applications and services, creating a network effect that will greatly increase its value and reach.
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
            <h2>Benefits With Our API-First Backend (REST, GraphQL)</h2>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>API Design</h3>
                <p>We design and build APIs that are easy to use & secure.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Scalable Backend</h3>
                <p>Our backends can handle high and large amount of data.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Robust Security</h3>
                <p>We implement robust security mechanisms to protect.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Faster Time</h3>
                <p>API-first approach will enable faster development.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Future-Proof</h3>
                <p>Our API-first backends are designed to be flexible.</p>
              </div>
            </div>
          </div>
        
        </section>

      {/* Expertise Section */}
      <div className="chatbots-999">
        <h1>Our Expertise in Full Stack Web & Saas Development</h1>
        <div className="expertise-grid-999">
<Link to="/FullStack2">
          <button className="expertise-item-999">Scalable Saas Platform (ERP, CRM, HRM)<FontAwesomeIcon icon={faArrowRight} /></button>

</Link>   
<Link to="/FullStack3">
       <button className="expertise-item-999">B2B/B2C Portals with Custom Forms<FontAwesomeIcon icon={faArrowRight} /></button>

</Link>          {/* <button className="expertise-item-999">API-First Backend (REST, GraphQL)<FontAwesomeIcon icon={faArrowRight} /></button> */}
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
                Your trusted partner for cutting-edge IT solutions and digital
                transformation.
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
            <summary>Why API-first instead of traditional backend? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">It will enable you to build modern, scalable, and secure applications.</div>
          </details>
        </div>


        <div className="faq-item2-999">
          <details>
            <summary>What is the difference between REST and GraphQL? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">REST is a set of constraints, while GraphQL is a query language.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Can it integrate with third-party tools? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes, we provide seamless integration with third-party services and APIs.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Is it secure? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">We use the best authentication and encryption practices.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>How scalable is it? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">It is designed to be highly scalable to meet your growth needs.</div>
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

export default FullStack1;
