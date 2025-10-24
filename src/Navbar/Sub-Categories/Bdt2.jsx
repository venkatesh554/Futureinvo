import React from 'react';
import '../Service-Pages/service12.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import aiPhoto8_1 from '../images/aiimage5.2.png';
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
          <p className="breadcrumbs-999">
            Home › Business Tools Development › Broker & Agent CRM
          </p>
          <h1>
            "Broker & Agent CRM"
          </h1>
          <p className="tagline-999">
            Our Broker & Agent CRM help businesses automate processes, enhance
            decision-making, and unlock new growth opportunities through
            intelligent innovation.
          </p>
        </div>
      </header>

      {/* Home Content Section */}
      <section className="home-content-999">
        
        <h1>Broker & Agent CRM</h1>
        <img src={aiPhoto8_1} alt="AI Illustration" className="right-image-999" />
        <p>
          Effective customer relationship management is critical for brokers and agents to maintain leads, close deals faster, and strengthen client satisfaction. At Futureinvo Solutions Pvt. Ltd., we specialize in building Broker & Agent CRM solutions tailored for real estate, insurance, finance, and other brokerage-driven industries.
        </p>
        <p>
         Our Broker & Agent CRM helps teams manage client relationships, automate sales tracking, and streamline communication. From lead acquisition to contract closure, every stage is supported with intelligent workflows, data insights, and cross-platform integrations.
        </p>
        <p>By reducing manual workload and enabling faster responses, our CRM empowers agents to spend more time on client relationships and business growth instead of repetitive tasks. With centralized data, pipeline visibility, and marketing automation, brokers and agents gain a competitive advantage in managing operations.</p>
        <p>At Futureinvo, we design CRMs that scale with your business, adapt to evolving industry needs, and improve overall profitability.</p>
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
          <h2>Benefits With Our Broker & Agent CRM</h2>
          <div className="benefit-item orange-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Lead Management</h3>
              <p>Captures and manages leads in one platform,.</p>
            </div>
          </div>
          <div className="benefit-item teal-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Client Relationships</h3>
              <p>Provides agents with customer history & preferences to build.</p>
            </div>
          </div>
          <div className="benefit-item orange-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Sales Workflows</h3>
              <p>Automates repetitive tasks, enabling agents to focus.</p>
            </div>
          </div>
          <div className="benefit-item teal-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Pipeline Management</h3>
              <p>Helps brokers visualize leads, manage sales stages.</p>
            </div>
          </div>
          <div className="benefit-item orange-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Marketing Automation</h3>
              <p>Runs targeted campaigns, tracks engagement & generates leads.</p>
            </div>
          </div>
        </div>
      </section>

     
      <div className="chatbots-999">
        <h1>Our Expertise in Business Tools & Development</h1>
        <div className="expertise-grid-999">
     <Link to="/Bdt1">
                         <button className="expertise-item-999"> Accounting & Billing Systems <FontAwesomeIcon icon={faArrowRight} /> </button>
     
               </Link>
               <Link to="/Bdt2">
                         <button className="expertise-item-999">Broker & Agent CRM<FontAwesomeIcon icon={faArrowRight} /></button>
     
               </Link>
               <Link to="/Bdt3">
                         <button className="expertise-item-999">ChatOps & Collaboration Tools<FontAwesomeIcon icon={faArrowRight} /></button>
     
               </Link>
               <Link to="/Bdt4">
                         <button className="expertise-item-999"> Client Support Portals<FontAwesomeIcon icon={faArrowRight} /></button>
     
               </Link>
               <Link to="/Bdt5">
                         <button className="expertise-item-999">Custom ERP Modules<FontAwesomeIcon icon={faArrowRight} /> </button>
     
               </Link>
     <Link to="/Bdt6">
               <button className="expertise-item-999">E-commerce Integrations<FontAwesomeIcon icon={faArrowRight} /></button>
     
     </Link>
     <Link to="/Bdt7">
               <button className="expertise-item-999">Elearning Platforms (LMS)<FontAwesomeIcon icon={faArrowRight} /> </button>
     
     </Link>
     <Link to="/Bdt8">
               <button className="expertise-item-999">Expense Tracking & Budgeting Tools <FontAwesomeIcon icon={faArrowRight} /></button>
     
     </Link>
     <Link to="/Bdt9">
               <button className="expertise-item-999">Gamified Learning Modules<FontAwesomeIcon icon={faArrowRight} /></button>
     
     </Link>
     <Link to="/Bdt10">
               <button className="expertise-item-999">Industry-Specific Solutions<FontAwesomeIcon icon={faArrowRight} /></button>
     
     </Link>
     <Link to="/Bdt11">
               <button className="expertise-item-999"> CRM Development<FontAwesomeIcon icon={faArrowRight} /></button>
     
     </Link>
     <Link to="/Bdt12">
               <button className="expertise-item-999">Sales Automation & Lead Tracking<FontAwesomeIcon icon={faArrowRight} /></button>
     
     </Link>
     
     
     
     <Link to="/Bdt13">
               <button className="expertise-item-999">Corporate Training Solutions <FontAwesomeIcon icon={faArrowRight} /></button>
     
     </Link>
     <Link to="/Bdt14">
               <button className="expertise-item-999">Payroll & Attendance Automation (HRMS)<FontAwesomeIcon icon={faArrowRight} /></button>
     
     </Link>
     <Link to="/Bdt15">
               <button className="expertise-item-999">Performance Management Systems<FontAwesomeIcon icon={faArrowRight} /></button>
     
     </Link>
     <Link to="/Bdt16">
               <button className="expertise-item-999">Investment & Portfolio Management<FontAwesomeIcon icon={faArrowRight} /></button>
     
     </Link>
     <Link to="/Bdt17">
               <button className="expertise-item-999">POS (Point of Sale) Systems<FontAwesomeIcon icon={faArrowRight} /></button>
     
     </Link>
     <Link to="/Bdt18">
               <button className="expertise-item-999">Property Management Platforms<FontAwesomeIcon icon={faArrowRight} /></button>
     
     </Link>
     <Link to="/Bdt19">
               <button className="expertise-item-999"> Recruitment & Onboarding Tools<FontAwesomeIcon icon={faArrowRight} /></button>
     
     </Link>
     <Link to="/Bdt20">
               <button className="expertise-item-999">Rental & Lease Management<FontAwesomeIcon icon={faArrowRight} /></button>
     
     </Link>
     <Link to="/Bdt21">
               <button className="expertise-item-999">Workflow Automation (Custom Tools)<FontAwesomeIcon icon={faArrowRight} /></button>
     
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
          Your trusted partner for cutting-edge Broker & Agent CRM.
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

     
      <section className="background-overlay-999">
        <div className="ai-image-container-999">
          <img src={bottomAI} alt="AI Expert" />
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

      
      <div className="faq-container-999">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item2-999">
          <details>
                <summary> Can the CRM handle multiple agents and teams?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Yes. The platform supports multi-agent activities, team management, and tracking leads/projects across units.</div>
            </details>
         </div>  

          <div className="faq-item2-999">
            <details>
                <summary> How does it improve client communication?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Centralizes client data, tracks interactions, and automates updates through integrated email, SMS, and notifications.</div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary>Does it support 360-degree feedback?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Yes. It enables comprehensive evaluation from managers, peers, and clients, enhancing performance reviews.</div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary>Can it integrate with property management and accounting tools?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Absolutely. Integrations ensure smooth workflows between CRM, property, and finance systems.</div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary>Does it track agent performance and sales metrics?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Yes. The CRM includes performance insights, pipeline tracking, and sales dashboards for agents.</div>
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
