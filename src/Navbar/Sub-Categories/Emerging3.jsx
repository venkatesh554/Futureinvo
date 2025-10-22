import React from 'react';
import '../Service-Pages/service12.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import aiPhoto8_1 from '../images/aiphoto6-3.jpg';
import bottomAI from '../images/bottomai.png';
import photo4 from '../images/networking.png';
import photo5 from '../images/briefcase.png';
import photo6 from '../images/clock.png';
import photo7 from '../images/calculator.png';
import photo8 from '../images/document.png';
import { Link } from "react-router-dom";

function Emerging3() {
  return (
    <div className="Appp">
        
      {/* Main Content Header */}
      <header className="main-content-999">
        <div className="header-content-999">
          <p className="breadcrumbs-999">Home › Emerging Tech › RPA (Robotic Process Automation)</p>
          <h1>“RPA (Robotic Process Automation)t”</h1>
          <p className="tagline-999">Our RPA (Robotic Process Automation) helps businesses automate processes, enhance decision-making, and unlock new growth opportunities through intelligent innovation.</p>
        </div>
      </header>

      {/* Home Content Section */}
      <div className="home-content-999">
        {/* Image Source: Use imported variable, must be self-closing */}
        <img className="right-image-999" src={aiPhoto8_1} alt="IoT Development" />
        {/* Inline Style: Converted from CSS string to JS object */}
        <h1 style={{ fontSize: '45px' }}>
          RPA (Robotic Process Automation)
        </h1>
        <p>
          In today's fast-paced business landscape, repetitive manual tasks drain productivity and increase operational costs. Robotic Process Automation (RPA) is the answer to this challenge. At FutureInvo Solutions Pvt. Ltd., we develop RPA solutions that automate rule-based processes, enabling businesses to improve efficiency, reduce errors, and scale operations.
        </p>
        <p>Our approach to RPA is to simplify workflows and optimize human resources. With RPA, organizations ensure that automation is seamless, scalable, and aligned with business goals.</p>
        <p>
         By deploying RPA, businesses can minimize costs, boost efficiency, and maintain compliance with industry standards. This allows organizations to adapt, remain competitive, and make data-driven decisions - bringing businesses closer to the future of hyperautomation.
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
            <h2>Benefits With Our Machine Learning & Deep Learning</h2>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Increased Productivity</h3>
                <p>Automates repetitive tasks that guide decisions.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Cost Efficiency</h3>
                <p>Reduce manual effort by automating repetitive.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Improved Accuracy</h3>
                <p>Minimize human error with predictive.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Regulatory Compliance</h3>
                <p>Automated audit trails ensure transparency.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Intelligent Automation</h3>
                <p>When combined with AI, RPA enables smarter workflows.</p>
              </div>
            </div>
          </div>
        
        </section>

      {/* Expertise Section */}
      <div className="chatbots-999">
        <h1>Our Expertise in Emerging Tech</h1>
        <div className="expertise-grid-999">
<Link to="/Emerging1">
          <button className="expertise-item-999">Blockchain Solutions <FontAwesomeIcon icon={faArrowRight} /></button>

</Link>          
<Link to="/Emerging2">
<button className="expertise-item-999">IoT Development <FontAwesomeIcon icon={faArrowRight} /></button>
</Link>
          {/* <button className="expertise-item-999">RPA (Robotic Process Automation) <FontAwesomeIcon icon={faArrowRight} /></button> */}
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
            <summary>What processes can be automated using RPA? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Tasks like data entry, billing, payroll, HR processes, reporting, and compliance management are ideal for RPA.</div>
          </details>
        </div>


        <div className="faq-item2-999">
          <details>
            <summary>How is RPA different from traditional automation? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Traditional automation requires coding and system changes, while RPA uses bots that mimic human actions without altering core systems.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Do employees need to learn coding to use RPA? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">No. RPA platforms provide low-code or no-code interfaces, making them easy to use.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Can RPA integrate with my existing ERP or CRM system? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes. RPA bots can seamlessly connect with SAP, Oracle, Salesforce, Zoho, and other enterprise systems.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Is RPA secure? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes. With authentication, role-based access, and monitoring, RPA deployments are secure and compliant.</div>
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

export default Emerging3;
