import React,{useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import photo2 from "../images/aiphoto3-0.png";
import photo3 from "../images/bottomai.png";
import photo4 from "../images/networking.png";
import photo5 from "../images/briefcase.png";
import photo6 from "../images/clock.png";
import photo7 from "../images/calculator.png";
import photo8 from "../images/document.png";
import "../Service-Pages/service12.css"
import { Link } from "react-router-dom";

import { faArrowRight, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
let isDevelop = true;

function Csda() {

  
  const [formData, setFormData] = useState({
      name: "",
      mobile: "",
      email: "",
      message: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const { name, mobile, email, message } = formData;
  
      if (!name || !mobile || !email || !message) {
        toast.warn("Please fill out all fields before submitting!");
        return;
      }
  
      // Save to localStorage
      localStorage.setItem("quoteData", JSON.stringify(formData));
  
      toast.success("Form submitted successfully!");
  
      // Reset form
      setFormData({
        name: "",
        mobile: "",
        email: "",
        message: "",
      });
    };


  return (
    <div className="Appp">
     
      <section className="main-content-999">
        <div className="header-content-999">
          <p className="breadcrumbs-999">
            Home › Cloud Services & DevOps Automation
          </p>
          <h1>
            Cloud Services & DevOps Automation
          </h1>
          <p className="tagline-999">
            Our Cloud Services & DevOps Automation help businesses automate processes, enhance
            decision-making, and unlock new growth opportunities through
            intelligent innovation.
          </p>
        </div>
      </section>

      
      <section className="home-content-999">
        <img src={photo2} alt="AI Illustration" className="right-image-999" />
        <h1>Cloud Services & DevOps Automation</h1>
        <p>
          At Future Invo Solutions Pvt. Ltd., we enable businesses embrace the
          true power of Cloud Services & DevOps Automation to stay ahead in today's
          digital-first world. Our Cloud Services & DevOps Automation are designed not just to
          automate tasks, but to transform the way organizations operate, make
          decisions, and deliver value to their customers.
        </p>
        <p>
          Cloud Services & DevOps Automation has the potential to reshape industries by
          turning raw data into meaningful insights. With our expertise,
          leverage AI to optimize processes, enhance security,
          predict market trends, and improve overall efficiency. Whether it's
          automating routine operations, enabling smarter analytics, or building
          industry-specific Business applications, we provide solutions that are
          scalable, reliable, and tailored to unique business needs.
        </p>
        <p>
          Cloud Services & DevOps Automation offerings stand out is the balance between
          innovation and practicality. We ensure that every solution we
          deliver is grounded in real-world usability. From healthcare and
          finance to retail and logistics, our AI-driven solutions empower
          organizations to achieve sustainable growth and maintain a competitive
          edge.
        </p>
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
        
                {/* Toastify container */}
                <ToastContainer position="top-center" autoClose={2000} />

        <div className="benefits-999">
          <h2>Benefits With Our Cloud Services & DevOps Automation</h2>
          <ul>
            <li className="benefit-item orange-999">
              🔮 Faster Deployment - Automate software delivery with CI/CD .
              
            </li>
            <li className="benefit-item teal-999">
              ⚙️ Scalable Infrastruce - Easily scale up or down on demand.
            </li>
            <li className="benefit-item orange-999">
              📊 High Availability  - Ensure uptime with cloud-native.
            </li>
            <li className="benefit-item teal-999">
               🚀 Cost Optimization - Pay only for what you see with finOps.
            </li>
            <li className="benefit-item orange-999">
              🔐 Improved Security - Monitoring across AWS, Azure and GCP.
            </li>
          </ul>
        </div>
      </section>

      {/* Expertise Section */}
      <div className="chatbots-999">
        <h1>Our Expertise in Cloud Services & DevOps Automation</h1>
        <div className="expertise-grid-999">
          <Link to="/Cloud1">
                    <button className="expertise-item-999">AWS | Azure | GCP Architecture<FontAwesomeIcon icon={faArrowRight} /></button>

          </Link>
          <Link to="/Cloud3">
                    <button className="expertise-item-999">Dockerization & Kubernetes<FontAwesomeIcon icon={faArrowRight} /></button>

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
                    Your trusted partner for cutting-edge Cloud Services & DevOps Automation.
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

      
      <div className="faq-container-999">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item2-999">
          <details>
            <summary>
              How Can Cloud Services & DevOps Automation Services Benefit My Business?<FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
              Cloud Services & DevOps Automation services optimize your technology resources,
              improve operational efficiency, and help your business keep space
              with evolving digital trends.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>
              Do You Offer Remote Or On-Site Cloud Services & DevOps Automation?<FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
              We offer both remote and on-site Cloud Services & DevOps Automation options to best meet
              our clients' needs, depending on project requirements and
              preferences.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>What Does The Cloud Services & DevOps Automation Solutions Involve?<FontAwesomeIcon icon={faAnglesRight} /></summary>
            <div className="faq-answer2-999">
              We start with an in-depth assessment, followed by strategic
              planning, solution implementation, and ongoing support to ensure
              sustainable growth.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>
              Can Future Invo Cloud Services & DevOps Automation Help With Cybersecurity Consulting?<FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
              Yes, we provide cybersecurity consulting to help you identify
              risks, secure data, and protect your systems against threats.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>
              What Industries Does Future Invo Solutions Specialize In For
             Business Tools Development?<FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
              We work across various industries, including healthcare, finance,
              retail, and manufacturing, providing tailored solutions to meet
              each sector's unique requirements.
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

export default Csda;
