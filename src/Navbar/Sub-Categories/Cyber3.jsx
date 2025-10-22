import React from 'react';
import '../Service-Pages/service12.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import aiPhoto8_1 from '../images/aiphoto4-3.jpg';
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
          <p className="breadcrumbs-999">Home › Cybersecurity Solutions ›  Managed Security Services (MSSP)</p>
          <h1>Cybersecurity Solutions<br />“Managed Security Services (MSSP)”</h1>
          <p className="tagline-999">Our Managed Security Services (MSSP) help businesses automate processes, enhance decision-making, and unlock new growth opportunities through intelligent innovation.</p>
        </div>
      </header>

      {/* Home Content Section */}
      <div className="home-content-999">
        {/* Image Source: Use imported variable, must be self-closing */}
        <img className="right-image-999" src={aiPhoto8_1} alt="AI Illustration" />
        {/* Inline Style: Converted from CSS string to JS object */}
        <h1 style={{ fontSize: '45px' }}>
          Managed Security Services (MSSP)
        </h1>
        <p>
          Cyber threats are growing in both frequency and sophistication, making it increasingly difficult for businesses to maintain round-the-clock security. Futureinvo Solutions Pvt. Ltd. offers Managed Security Services (MSSP) that provide organizations with dedicated cybersecurity experts, advanced tools, and continuous monitoring to ensure protection against evolving threats.
        </p>
        <p>
          Real-time analytics, SIEM tools, and AI-driven defense mechanisms and build tailored compliance roadmaps that not only address privacy risks but also strengthen internal controls and align with regulatory frameworks. Our approach integrates privacy-by-design and security-by-design principles at every level of business operations.
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
            <h2>Benefits With Our Managed Security Services (MSSP)</h2>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>24/7 Security Monitoring</h3>
                <p>Around-the-clock survelliance and intrusion detection.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Security Operations</h3>
                <p>Outsourcing security instead of building expensive SOC teams.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Access to Skilled</h3>
                <p>Leverage a pool of certified security professionals.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Incident Response</h3>
                <p>Rapid detection,investigation,and response minimize downtime.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Proactive Threat</h3>
                <p>Leverage global threat intelligence feeds and predictive analytics.</p>
              </div>
            </div>
          </div>
        
        </section>

      {/* Expertise Section */}
      <div className="chatbots-999">
        <h1>Our Expertise in Cybersecurity Solutions</h1>
        <div className="expertise-grid-999">
            <Link to="/Cyber6">
                          <button className="expertise-item-999">Penetration Testing & Vulnerability Assessment<FontAwesomeIcon icon={faArrowRight} /></button>
                     
                     </Link>
                      <Link to="/Cyber5">
                      <button className="expertise-item-999">Network & Cloud Security<FontAwesomeIcon icon={faArrowRight} /></button>
                     
                       </Link>
         
                      <Link to="/Cyber1">
                          <button className="expertise-item-999">Data Privacy & Compliance<FontAwesomeIcon icon={faArrowRight} /></button>
                      </Link>       
                     <Link to="/Cyber2">
                         <button className="expertise-item-999">Endpoint & Application Security<FontAwesomeIcon icon={faArrowRight} /></button>
                    
                         </Link>
                      <Link to="/Cyber7">
                          <button className="expertise-item-999">Zero Trust Security Implementation<FontAwesomeIcon icon={faArrowRight} /></button>
                     </Link>
                   <Link to="/Cyber4">
                        <button className="expertise-item-999">SOC as a Service<FontAwesomeIcon icon={faArrowRight} /></button>
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
                Your trusted partner for cutting-edge Managed Security Services (MSSP).
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
            <summary>How is MSSP different from traditional IT support team? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Traditional IT support focuses on general IT issues, whereas MSSPs specialize in cybersecurity, offering continuous monitoring, advanced threat intelligence, and incident response.</div>
          </details>
        </div>


        <div className="faq-item2-999">
          <details>
            <summary>Will outsourcing security mean losing control? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">No, businesses retain full control and visibility, while MSSPs handle monitoring, reporting, and proactive defense.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Can MSSP services be customized for small businesses? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes, our services are scalable to meet the needs of startups, SMEs, and large enterprises.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Do MSSPs replace internal IT teams? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Not entirely. MSSPs complement existing IT teams by providing specialized cybersecurity expertise and tools.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>How quickly can threats be detected and mitigated? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">With real-time SIEM and 24/7 monitoring, threats can be identified within seconds and mitigated before they cause significant damage.</div>
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
