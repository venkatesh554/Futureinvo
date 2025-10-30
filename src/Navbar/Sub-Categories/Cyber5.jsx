import React,{useState} from 'react';
import { ToastContainer, toast } from "react-toastify";
import '../Service-Pages/service12.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import aiPhoto8_1 from '../images/aiphoto4-5.jpg';
import bottomAI from '../images/bottomai.png';
import photo4 from '../images/networking.png';
import photo5 from '../images/briefcase.png';
import photo6 from '../images/clock.png';
import photo7 from '../images/calculator.png';
import photo8 from '../images/document.png';
import { Link } from "react-router-dom";


function Machine1() {
   const [formData, setFormData] = useState({
                                            name: "",
                                            mobile: "",
                                            email: "",
                                            message: "",
                                          });
                                        
                                          // handle input change
                                          const handleChange = (e) => {
                                            const { name, value } = e.target;
                                            setFormData((prev) => ({
                                              ...prev,
                                              [name]: value,
                                            }));
                                          };
                                        
                                          // handle form submit
                                          const handleSubmit = (e) => {
                                            e.preventDefault();
                                        
                                            // validation
                                            if (
                                              !formData.name.trim() ||
                                              !formData.mobile.trim() ||
                                              !formData.email.trim() ||
                                              !formData.message.trim()
                                            ) {
                                              toast.error("Please fill the form first!", {
                                                position: "top-center",
                                                autoClose: 2000,
                                              });
                                              return;
                                            }
                                        
                                            // get existing data from localStorage
                                            const storedData = JSON.parse(localStorage.getItem("quoteData")) || [];
                                        
                                            // add new entry
                                            storedData.push(formData);
                                        
                                            // save back to localStorage
                                            localStorage.setItem("quoteData", JSON.stringify(storedData));
                                        
                                            // reset form
                                            setFormData({
                                              name: "",
                                              mobile: "",
                                              email: "",
                                              message: "",
                                            });
                                        
                                            // success message
                                            toast.success("Data saved successfully!", {
                                              position: "top-center",
                                              autoClose: 2000,
                                            });
                                          };
  return (
    <div className="Appp">
        
      {/* Main Content Header */}
      <header className="main-content-999">
        <div className="header-content-999">
          <p className="breadcrumbs-999">Home › Cybersecurity Solutions ›  Network & Cloud Security</p>
          <h1>“Network & Cloud Security”</h1>
          <p className="tagline-999">Our Network & Cloud Security help businesses automate processes, enhance decision-making, and unlock new growth opportunities through intelligent innovation.</p>
        </div>
      </header>

      {/* Home Content Section */}
      <div className="home-content-999">
        {/* Image Source: Use imported variable, must be self-closing */}
        <img className="right-image-999" src={aiPhoto8_1} alt="AI Illustration" />
        {/* Inline Style: Converted from CSS string to JS object */}
        <h1 style={{ fontSize: '45px' }}>
          Network & Cloud Security
        </h1>
        <p>
          In today's digital-first world, businesses rely heavily on inter-connected, remote, and cloud infrastructures to manage daily operations, customer interactions, and decision-making. But with this increasing dependency comes greater risk — from ransomware, phishing, insider threats, misconfigured cloud setups, and data breaches to advanced persistent threats (APT). A failure in these systems can lead to massive financial loss, legal issues, and reputational damage.
        </p>
        <p>
          By leveraging modern solutions like Zero Trust Architecture (ZTA), intrusion detection and prevention systems (IDS/IPS), cloud-native security platforms (CSPM, CWPP, CIEM), and secure access service edge (SASE), we ensure multi-layered defense for hybrid & cloud-first businesses.</p>
      </div>

      
        <section className="container-999">
          <form className="form-group-999" onSubmit={handleSubmit}>
                                                                                                   <h3>Get A Quote For You</h3>
                                                                                                                                                                                                                
                                                                                                        <label htmlFor="name">Name</label>
                                                                                                          <input
                                                                                                         type="text"
                                                                                                         name="name"
                                                                                                         placeholder="Your full name"
                                                                                                         value={formData.name}
                                                                                                         onChange={handleChange}
                                                                                                       />
                                                                                                                                                                                                                
                                                                                                      <label htmlFor="mobile">Mobile</label>
                                                                                                       <input
                                                                                                        type="text"
                                                                                                        name="mobile"
                                                                                                        placeholder="Mobile"
                                                                                                       value={formData.mobile}
                                                                                                       onChange={handleChange}
                                                                                                        />
                                                                                                                                                                                                                
                                                                                                   <label htmlFor="email">Email</label>
                                                                                                 <input
                                                                                                  type="email"
                                                                                                    name="email"
                                                                                                   placeholder="Your email"
                                                                                                  value={formData.email}
                                                                                                onChange={handleChange}
                                                                                                  />
                                                                                                                                                                                                                
                                                                                              <label htmlFor="message">Message</label>
                                                                                               <textarea
                                                                                                 name="message"
                                                                                                 placeholder="Message"
                                                                                                   value={formData.message}
                                                                                                   onChange={handleChange}
                                                                                                     ></textarea>
                                                                                                                                                                                                                
                                                                                               <button className="sbutton-999" type="submit">
                                                                                                  Submit
                                                                                                  </button>
                                                                                                 </form>
                                                                                                                                                                                                                
                                                                                             <ToastContainer position="top-center" autoClose={2000} />
          
            
          <div className="benefits-999">
            <h2>Benefits With Our Network & Cloud Security</h2>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Holistic Protection</h3>
                <p>Safeguards both on-premises infrastructure and modern cloud-native.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Threat Prevention</h3>
                <p>Outsourcing security instead of building expensive SOC teams.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Data Encryption</h3>
                <p>Leverage a pool of certified security professionals.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Audit Readiness</h3>
                <p>Rapid detection,investigation,and response minimize downtime.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Remote Workforce</h3>
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
                       
                               
                      <Link to="/Cyber1">
                             <button className="expertise-item-999">Data Privacy & Compliance<FontAwesomeIcon icon={faArrowRight} /></button>
                       </Link>       
                      <Link to="/Cyber2">
                          <button className="expertise-item-999">Endpoint & Application Security<FontAwesomeIcon icon={faArrowRight} /></button>
                                          
                          </Link>
                           <Link to="/Cyber3">
                                                <button className="expertise-item-999">Managed Security Services<FontAwesomeIcon icon={faArrowRight} /></button>
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
                Your trusted partner for cutting-edge Network & Cloud Security.
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
            <div className="form2-group-999">
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
            <summary>How is cloud security different from traditional IT security? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">In traditional IT, businesses control all aspects of infrastructure security. In the cloud, providers secure the underlying infrastructure, but customers are responsible for securing applications, data, and user operations. This requires a shared responsibility model with specialized tools and expertise.</div>
          </details>
        </div>


        <div className="faq-item2-999">
          <details>
            <summary>Can you protect multi-cloud and hybrid environments? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes, Futureinvo ensures security across AWS, Azure, and GCP. Our frameworks shield data using Zero Trust principles. We design security frameworks that provide consistent visibility, monitoring, and control across all environments.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>What types of threats do you protect against? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">We defend against cyber risks: ransomware, phishing, DDoS attacks, insider threats, misconfigurations, and zero-day exploits. Our layered defenses ensure protection of critical data and compliance for businesses.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Will stronger security slow down my systems? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">No. Our lightweight, cloud-optimized tools balance between maximum security & optimal system performance, reducing latency while protecting applications and data.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>How do you ensure compliance with regulations? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">We use best practices to enforce frameworks like GDPR, HIPAA, and SOC2. Our experts guide you through compliance processes to maintain security audits.</div>
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
