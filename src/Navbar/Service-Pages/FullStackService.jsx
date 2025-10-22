import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import photo1 from "../images/logo.png";
import photo2 from "../images/aiphoto7-0.png";
import photo3 from "../images/bottomai.png";
import photo4 from "../images/networking.png";
import photo5 from "../images/briefcase.png";
import photo6 from "../images/clock.png";
import photo7 from "../images/calculator.png";
import photo8 from "../images/document.png";
import { Link } from "react-router-dom";

import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";

import "../Service-Pages/service12.css";

function FullStackService() {
  return (
    <div className="Appp">
      {/* Hero Section */}
      <section className="main-content-999">
        <div className="header-content-999">
          <p className="breadcrumbs-999">
            Home › Full Stack Web & Saas Development
          </p>
          <h1>
            Full Stack Web & Saas Development
          </h1>
    
          <p className="tagline-999">
            Our Full Stack Web & Saas Development help businesses automate processes, enhance
            decision-making, and unlock new growth opportunities through
            intelligent innovation.
          </p>
        </div>
      </section>

      
      <section className="home-content-999">
        <img src={photo2} alt="AI Illustration" className="right-image-999" />
        <h1>Full Stack Web & Saas Development</h1>
        <p>
          At Future Invo Solutions Pvt. Ltd., we develop powerful, scalable and user-friendly technologies that redefine industries and unlock new opportunities. Our Emerging Tech are designed to help businesses collect, manage, and interpret massive amounts of ensuring semaless functionality across devices and platforms.
        </p>
        <p>
          We deliver ERP,CRM & LMS platforms, B2B/B2C portals and supply chain transparency organizations to forecast trends, measure performance, and uncover hidden opportunities.
        </p>
        <p>
          Our approach emphasizes user experience in blending innovation with usability. whether its implementing smart contracts for financial transparency,using IOT predictive maintaince in manufacutring, or deploying RPA for HR & finance automation, our solutions give organizations the tools to stay agile, efficient, and competitive in a rapidly evolving digital landscope.
        </p>
      </section>

      
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
          <h2>Benefits With Our Full Stack Web & Saas Development</h2>
          <ul>
            <li className="benefit-item orange-999">
              🔮 Scalable Solutions - Applications that grow as your business expands.
              
            </li>
            <li className="benefit-item teal-999">
              ⚙️ End-to-End Development - from frontend to backend,everything in one place.
            </li>
            <li className="benefit-item orange-999">
              📊 Custom Built  - Tailored ERP,CRM & LMS solutions designed workflows.
            </li>
            <li className="benefit-item teal-999">
               🚀 B2B & B2C Ready - Role based portals for customers, partners.
            </li>
            <li className="benefit-item orange-999">
              🔐 Cost Reduction - Agile development approach ensures product lanches.
            </li>
          </ul>
        </div>
      </section>

      {/* Expertise Section */}
      <div className="chatbots-999">
        <h1>Our Expertise in Full Stack Web & Saas Development</h1>
        <div className="expertise-grid-999">
<Link to="/FullStack1">          <button className="expertise-item-999">Secure Saas Platform (ERP, CRM, HRM)<FontAwesomeIcon icon={faArrowRight} /></button>

</Link>     
<Link to="/FullStack2">
     <button className="expertise-item-999">B2B/B2C Portals with Custom Forms<FontAwesomeIcon icon={faArrowRight} /></button>

</Link>         
<Link to="/FullStack3">
 <button className="expertise-item-999">API-First Backend (REST, GraphQL)<FontAwesomeIcon icon={faArrowRight} /></button></Link>
          
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

      {/* Contact Experts Section */}
      <section className="background-overlay-999">
        <div className="ai-image-container-999">
          <img src={photo3} alt="AI Expert" />
        </div>
        <div className="form-container-999">
          <h2>Talk To Our Experts</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="faq-container-999">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item2-999">
          <details>
            <summary>
              How Can My Business need Full Stack Web & Saas Development?<FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
                   Full Stack Web & Saas Development are increasing across all industries. Our solutions protect your sensitive data, ensure compliance, and keep your systems safe from costly breaches.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>
              How Full Stack Web & Saas Development important for businesses?<FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
              It helps companies understand customer behaviour, improve processes, reduce costs, predict future trends  we simulate Emerging Tech to find weak spots in your systems, then fix them before real hackers exploit them.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Can you customize ERP, CRM, or LMS platforms for our specific needs?<FontAwesomeIcon icon={faAnglesRight} /></summary>
            <div className="faq-answer2-999">
              Yes. we don't just provide - we design custom workflows, dashboards, and integrations based on your business requirements.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>
             Do you provide role based access and security features?<FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
              Absolutely. we build secure portals with multiple roles (admin, staff,customer,vendor, etc.) ensuring that each user only sees what they're supposed tos.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>
              Will it work with my existing systems?<FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
              Yes.Our API-First device monitoirng, and security patches to safeguard every connected device in your organization.
            </div>
          </details>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center-999">
        <p>© 2025 FutureInvo Solutions Pvt Ltd. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default FullStackService;
