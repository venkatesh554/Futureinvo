import React from 'react';
import '../Service-Pages/service12.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import aiPhoto8_1 from '../images/aiphoto8-2.jpg';
import bottomAI from '../images/bottomai.png';
import photo4 from '../images/networking.png';
import photo5 from '../images/briefcase.png';
import photo6 from '../images/clock.png';
import photo7 from '../images/calculator.png';
import photo8 from '../images/document.png';
import { Link } from "react-router-dom";


function Machine2() {
  return (
    <div className="Appp">
        
      {/* Main Content Header */}
      <header className="main-content-999">
        <div className="header-content-999">
          <p className="breadcrumbs-999">Home › Machine Learning & Deep Learning › Fraud Detection Systems</p>
          <h1>“Fraud Detection Systems”</h1>
          <p className="tagline-999">Our Fraud Detection Systems help businesses automate processes, enhance decision-making, and unlock new growth opportunities through intelligent innovation.</p>
        </div>
      </header>

      {/* Home Content Section */}
      <div className="home-content-999">
        {/* Image Source: Use imported variable, must be self-closing */}
        <img className="right-image-999" src={aiPhoto8_1} alt="AI Illustration" />
        {/* Inline Style: Converted from CSS string to JS object */}
        <h1 style={{ fontSize: '45px' }}>
          Fraud Detection Systems
        </h1>
        <p>
         Our Fraud Detection Systems leverage machine learning and deep learning models to identify suspicious activities and prevent financial or operational losses. Using pattern recognition, anomaly detection, and predictive analytics, we detect fraudulent transactions, cybersecurity threats, and operational inconsistencies before they impact the business.
        </p>
        <p>
          The systems are designed for industries like banking, insurance, e-commerce, and fintech, where fraud is high. Real-time monitoring and alerts allow organizations to act immediately, mitigating losses and ensuring compliance. Deep learning algorithms analyze large volumes of transactional and behavioral data to detect subtle anomalies that traditional rule-based systems may miss.
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
            
          {/* <div className="benefits-999">
            <h2>Benefits With Our Fraud Detection Systems</h2>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Realtime detection</h3>
                <p>Realtime detection of fraudulent activities.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Across banking</h3>
                <p>Across banking, insurance, e-commerce, and fintech.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>False positives</h3>
                <p>False positives while maximizing detection accuracy.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Optimizes operational</h3>
                <p>Solutions that adapt as your data and business.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Cost Optimization</h3>
                <p>Workflows through automated monitoring.</p>
              </div>
            </div>
          </div>
        
 */}







        <div className="benefits-999">
            <h2>Benefits With Our Fraud Detection Systems</h2>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Realtime detection</h3>
                <p>Realtime detection of fraudulent activities.</p>
              </div>
            </div>
             <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Across banking</h3>
                <p>Across banking, insurance, e-commerce, and fintech.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>False positives</h3>
                <p>False positives while maximizing detection accuracy.</p>
              </div>
            </div>
             <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Optimizes operational</h3>
                <p>Solutions that adapt as your data and business.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Cost Optimization</h3>
                <p>Workflows through automated monitoring.</p>
              </div>
            </div>
          </div>
        
        </section>


        

      {/* Expertise Section */}
      <div className="chatbots-999">
        <h1>Our Expertise in Machine Learning & Deep Learning</h1>
        <div className="expertise-grid-999">
<Link to="/Machine1">
          <button className="expertise-item-999">Forecasting & Time Series Analysis<FontAwesomeIcon icon={faArrowRight} /></button>

</Link>         
<Link to="/Machine3">
          <button className="expertise-item-999">Recommendation Engines<FontAwesomeIcon icon={faArrowRight} /></button>
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
                Your trusted partner for cutting-edge Fraud Detection Systems.
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
            <summary>Can the system detect fraud in real time? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes, designed for immediate monitoring and alerts.</div>
          </details>
        </div>


        <div className="faq-item2-999">
          <details>
            <summary>Which industries benefit the most? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Banking, insurance, e-commerce, fintech, and financial services.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>How accurate is fraud detection? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Accuracy improves continuously using AI and deep learning algorithms.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Does it integrate with enterprise software? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes, seamless integration with ERP, CRM, and payment systems.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>How does it reduce false positives? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Advanced ML algorithms differentiate genuine anomalies from normal activity.</div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default Machine2;
