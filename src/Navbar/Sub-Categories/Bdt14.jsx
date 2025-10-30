import React,{useState} from 'react';
import { ToastContainer, toast } from "react-toastify";import '../Service-Pages/service12.css';
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
          <p className="breadcrumbs-999">
            Home › Business Tools Development › Payroll & Attendance Automation (HRMS)
          </p>
          <h1>
            Business Tools Development<br/> "Payroll & Attendance Automation (HRMS)"
          </h1>
          <p className="tagline-999">
            Our Payroll & Attendance Automation (HRMS) help businesses automate processes, enhance
            decision-making, and unlock new growth opportunities through
            intelligent innovation.
          </p>
        </div>
      </header>

      {/* Home Content Section */}
      <section className="home-content-999">
        
        <h1>Payroll & Attendance Automation (HRMS)</h1>
        <img src={aiPhoto8_1} alt="AI Illustration" className="right-image-999" />
        <p>
          Managing payroll and attendance is critical yet time-consuming for organizations of all sizes. At Future Invo Solutions, we develop payroll & attendance automation solutions that streamline HR processes, enhance transparency, and reduce manual errors.
        </p>
        <p>Our HRMS solutions provide features such as automated salary calculations, tax compliance, attendance tracking, shift scheduling, and employee self-service portals. Businesses benefit from real-time insights, error-free payroll, and improved employee satisfaction.</p>
           <p>By automating processes like salary disbursement, leave management, and shift scheduling, our HRMS ensures compliance with labor laws and reduces operational costs. Whether you are an SME, large enterprise, or HR outsourcing firm, our customizable HRMS empowers you with efficiency, accuracy, and control.</p>
      </section>

      
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
          <h2>Benefits With Our Payroll & Attendance Automation</h2>
          <div className="benefit-item orange-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Accurate Payroll</h3>
              <p>Eliminate errors with automated salary, tax.</p>
            </div>
          </div>
          <div className="benefit-item teal-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Efficient Attendance</h3>
              <p>Track employee shifts, leaves, and overtime.</p>
            </div>
          </div>
          <div className="benefit-item orange-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Self-Service</h3>
              <p>Empower employees to access payslips, apply for leave.</p>
            </div>
          </div>
          <div className="benefit-item teal-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Cost Savings</h3>
              <p>Minimize manual processes, paperwork & human errors.</p>
            </div>
          </div>
          <div className="benefit-item orange-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Seamless Integrations</h3>
              <p>Integrated with HR, HRMS, and payroll systems.</p>
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
          Your trusted partner for cutting-edge Payroll & Attendance Automation (HRMS).
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
                <summary>How does automation improve payroll accuracy?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">By eliminating manual calculations, the system automatically considers salaries, deductions, compliance, and overtime, reducing errors and delays.</div>
            </details>
         </div>  

          <div className="faq-item2-999">
            <details>
                <summary>Can employees access their payroll and attendance records?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Yes, employees can view their payslips, track shifts, leave balances, and attendance history.</div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary>Is the system compliant with labor laws?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Absolutely. Our solutions ensure tax, labor, and statutory compliance, generating audit-ready reports.</div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary>Can the system handle different shifts and flexible hours?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Yes. It supports complex shifts, flexible schedules, and employee-specific payroll calculations.</div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary>Can this integrate with other business systems?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Yes, it integrates with HRMS, accounting, and ERP platforms for complete automation.</div>
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
