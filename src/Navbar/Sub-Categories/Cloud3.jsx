import React from 'react';
import '../Service-Pages/service12.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import aiPhoto8_1 from '../images/aiphoto3-3.jpg';
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
          <p className="breadcrumbs-999">Home › Cloud Services & DevOps Automation › Dockerization & Kubernetes</p>
          <h1>"Dockerization & Kubernetes"</h1>
          <p className="tagline-999">Our Dockerization & Kubernetes help businesses automate processes, enhance decision-making, and unlock new growth opportunities through intelligent innovation.</p>
        </div>
      </header>

      {/* Home Content Section */}
      <div className="home-content-999">
        {/* Image Source: Use imported variable, must be self-closing */}
        <img className="right-image-999" src={aiPhoto8_1} alt="AI Illustration" />
        {/* Inline Style: Converted from CSS string to JS object */}
        <h1 style={{ fontSize: '45px' }}>
          Dockerization & Kubernetes
        </h1>
        <p>
          We enable businesses to deploy, containerize, and orchestrate applications using Docker and Kubernetes, ensuring scalability, efficiency, and reliability. With containerization, businesses can package applications with all their dependencies, ensuring seamless portability across environments. Kubernetes takes this a step further by offering dynamic orchestration, high availability, and fault tolerance.
        </p>
        <p>
          By adopting Dockerization and Kubernetes, businesses can gain IT development speed, reduce costs, and scale services as demand fluctuates. We provide robust solutions for CI/CD (Continuous Integration/Continuous Deployment), hybrid cloud adoption, and microservices architecture.
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
            <h2>Benefits With Our Dockerization & Kubernetes</h2>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Containerized applications</h3>
                <p>Run consistently across environments.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Automated scaling</h3>
                <p>Kubernetes automatically apps & services based on workload.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Increases developer</h3>
                <p>Lift and shift, re-platform, based on business goals.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Multi-cloud</h3>
                <p>Preventing overspending during and after the move.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Performance boost</h3>
                <p>Leveraging cloud-native services and auto-scaling.</p>
              </div>
            </div>
          </div>
        
        </section>

      {/* Expertise Section */}
      <div className="chatbots-999">
        <h1>Our Expertise in Cloud Services & DevOps Automation</h1>
        <div className="expertise-grid-999">
         <Link to="/Cloud1">
                             <button className="expertise-item-999">AWS | Azure | GCP Architecture<FontAwesomeIcon icon={faArrowRight} /></button>
         
                   </Link>
                  
                   <Link to="/Cloud5">
                             <button className="expertise-item-999">Serverless (Lambda, Cloud Run)<FontAwesomeIcon icon={faArrowRight} /></button>
         
                   </Link>
                   <Link to="/Cloud2">
                             <button className="expertise-item-999">Cloud Migration Services<FontAwesomeIcon icon={faArrowRight} /></button>
         
                   </Link>
                   <Link to="/Cloud4">
                             <button className="expertise-item-999">FinOps (Cloud Cost Optimization)<FontAwesomeIcon icon={faArrowRight} /></button>
         
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
                Your trusted partner for cutting-edge Dockerization & Kubernetes.
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
            <summary>What is the main benefit of using Docker and Kubernetes? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">They make apps portable, scalable, and reliable across multiple environments.</div>
          </details>
        </div>


        <div className="faq-item2-999">
          <details>
            <summary>Is Kubernetes suitable only for large enterprises? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Not at all — both startups and enterprises benefit, as it scales according to business needs.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>How does it reduce costs? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Containers optimize infrastructure usage, while Kubernetes automates scaling to prevent waste.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Will this speed up my development process? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes, CI/CD integration ensures faster, error-free deployments for development teams.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Is containerization secure? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes, containerization allows image scanning and network policies ensuring strong security.</div>
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
