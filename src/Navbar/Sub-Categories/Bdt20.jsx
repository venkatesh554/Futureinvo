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
            Home › Business Tools Development › Rental & Lease Management
          </p>
          <h1>
           "Rental & Lease Management"
          </h1>
          <p className="tagline-999">
            Our Rental & Lease Management help businesses automate processes, enhance
            decision-making, and unlock new growth opportunities through
            intelligent innovation.
          </p>
        </div>
      </header>

      {/* Home Content Section */}
      <section className="home-content-999">
        
        <h1>Rental & Lease Management</h1>
        <img src={aiPhoto8_1} alt="AI Illustration" className="right-image-999" />
        <p>
          Managing rentals, leases, and property-related transactions can be challenging without the right tools. At Future Invo Solutions, we build powerful Rental & Lease Management platforms that help businesses and property owners streamline operations, manage tenants, and ensure compliance.
        </p>
        <p>Our solutions automate lease agreements, rent collection, invoicing, tenant communication, and renewal reminders. With built-in analytics, businesses gain complete visibility into occupancy rates, payment histories, and property performance.</p>
        <p>Whether you manage residential properties, commercial real estate, or large-scale leasing businesses, our Rental & Lease Management solutions are tailored to meet your operational needs and enhance customer experience.</p>
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
          <h2>Benefits With Our Rental & Lease Management</h2>
          <div className="benefit-item orange-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Rental Processes</h3>
              <p>Manage multiple properties, leases, tenants.</p>
            </div>
          </div>
          <div className="benefit-item teal-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Rent & Billing</h3>
              <p>Streamline collection, invoicing, and financial.</p>
            </div>
          </div>
          <div className="benefit-item orange-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Tenant Communication</h3>
              <p>Enhances communication with tenants.</p>
            </div>
          </div>
          <div className="benefit-item teal-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Analytics & Insights</h3>
              <p>Delivers real-time reports on occupancy.</p>
            </div>
          </div>
          <div className="benefit-item orange-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Scalable</h3>
              <p>Suitable for single property owners, real estate.</p>
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
          Your trusted partner for cutting-edge Rental & Lease Management.
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
                <summary>Can your system manage both residential and commercial properties?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Yes. Our solutions are flexible enough to handle residential, commercial, and mixed-use properties.</div>
            </details>
         </div>  

          <div className="faq-item2-999">
            <details>
                <summary>How is rent collected and tracked?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Integrated payment gateways ensure secure rent collection, with automated receipts and real-time tracking.</div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary> Does the system send renewal reminders?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Yes. Automatic reminders are sent to tenants and property managers before lease expiry.</div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary>Can it integrate with accounting systems?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Absolutely. Our platform integrates seamlessly with leading accounting and billing tools.</div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary>Is the solution cloud-enabled?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Yes. You can manage properties and leases anytime, anywhere with cloud accessibility.</div>
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
