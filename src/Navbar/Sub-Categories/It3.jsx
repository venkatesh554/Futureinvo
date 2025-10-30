import React,{useState} from 'react';
import { ToastContainer, toast } from "react-toastify";import '../Service-Pages/service12.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import aiPhoto8_1 from '../images/aiimage1.3.png';
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
          <p className="breadcrumbs-999">Home › IT Consulting › Technology Modernization</p>
          <h1> "Technology Modernization"</h1>
          <p className="tagline-999">Our Technology Modernization help businesses automate processes, enhance decision-making, and unlock new growth opportunities through intelligent innovation.</p>
        </div>
      </header>

      {/* Home Content Section */}
      <div className="home-content-999">
        {/* Inline Style: Converted from CSS string to JS object */}
        <h1 style={{ fontSize: '45px' }}>
          Technology Modernization
        </h1>
        {/* Image Source: Use imported variable, must be self-closing */}
        <img className="right-image-999" src={aiPhoto8_1} alt="AI Illustration" />
        <p>
          At Future Invo Solution Pvt. Ltd., we help organizations modernize their technology landscape to drive growth and innovation in a rapidly evolving digital environment. Our approach goes beyond system upgrades—it transforms how businesses make decisions, implement initiatives, and deliver lasting value to their customers.
        </p>
        <p>
          Technology modernization has the power to transform businesses by turning insights into modern, scalable IT solutions. With our expertise, organizations can upgrade systems to optimize operations, anticipate market trends, and support sustainable growth. From aligning technology initiatives with long-term objectives to implementing robust, adaptable solutions, we provide guidance that is precise, reliable, and tailored to each organization's unique needs.
        </p>
        <p>
          What sets our technology modernization services apart is the perfect blend of vision and practicality. We ensure every system upgrade and modernization initiative is actionable, scalable, and aligned with real-world business needs. Across industries—from healthcare and finance to retail and logistics—our guidance empowers organizations to achieve sustainable growth and maintain a competitive edge.
        </p>
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
            <h2>Benefits With Our Technology Modernization</h2>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Scalable Systems</h3>
                <p>Modernization IT Infrastructures with your business.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Operational efficiency</h3>
                <p>Reduce complexity and improve productivity</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>clear Frameworks</h3>
                <p>Upgraded systems enaable better decision-making.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Designing enterprise</h3>
                <p>Modren technologies keep organiazations ahead.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Sustainable Growth</h3>
                <p>Long-term strategies ensure technology investments.</p>
              </div>
            </div>
          </div>
        
        </section>

      {/* Expertise Section */}
      <div className="chatbots-999">
        <h1>Our Expertise in IT Consulting </h1>
        <div className="expertise-grid-999">
            <Link to="/It1" >
                    <button className="expertise-item-999">Strategy & Roadmap Consulting <FontAwesomeIcon icon={faArrowRight} /></button>

          </Link>
          <Link to="/It2">
                    <button className="expertise-item-999">Enterprise Architecture <FontAwesomeIcon icon={faArrowRight} /></button>

          </Link>
         
          <Link to="/It4">
                    <button className="expertise-item-999">IT Infrastructure Consult <FontAwesomeIcon icon={faArrowRight} /></button>

          </Link>
          <Link to="/It5">
                    <button className="expertise-item-999">Digital Transformation Advisor <FontAwesomeIcon icon={faArrowRight} /></button>

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
                Your trusted partner for cutting-edge Technology Modernization.
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
            <summary>How can IT-Driven chatbot Solutions Befenit My Business? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">IT-driven chatbot solutions streamline operations, enhance customer engaement, and drive business growth. </div>
          </details>
        </div>


        <div className="faq-item2-999">
          <details>
            <summary>Do You Offer Remote or On-Site Consulting Solutions? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">"We Offer both remote and on-site IT-powered chatbot solutions tailored to your business needs".</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>What Do IT Consulting Solutions Involve? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Our IT Consulting solutions involve assessing technology needs, optimizing processes, implementing scalable systems, and providing ongoing support for business growth.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Can Future Invo IT Solutions Assist With Cybersecurity Consulting? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes. Future Invo IT Solutions provides expert Cybersecurity consulting to protect your business from threats and ensure secure operations.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>What Industries Does future invo it solutions specialize? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Future Invo IT Solutions specializes in IT consulting for healthcare,finance, logistics, and other industries seeking digital Transformation and optimized technology solutions</div>
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
