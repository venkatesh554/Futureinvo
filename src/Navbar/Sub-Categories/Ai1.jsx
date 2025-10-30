import React,{useState} from 'react';
import { ToastContainer, toast } from "react-toastify";

import '../Service-Pages/service12.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import aiPhoto8_1 from '../images/aiphoto2.png';
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
        
      <header className="main-content-999">
        <div className="header-content-999">
          <p className="breadcrumbs-999">Home › AI & Artificial Intelligence Solutions › AI Powered Chatbots(LeadGen, HR,Customer Support)</p>
          <h1>"AI Powered Chatbots(LeadGen, HR,Customer Support)"</h1>
          <p className="tagline-999">Our AI Powered Chatbots(LeadGen, HR,Customer Support) help businesses automate processes, enhance decision-making, and unlock new growth opportunities through intelligent innovation.</p>
        </div>
      </header>

      {/* Home Content Section */}
      <div className="home-content-999">
        <h1 style={{ fontSize: '45px' }}>
          AI Powered Chatbots(LeadGen, HR,Customer Support)
        </h1>
        <img className="right-image-999" src={aiPhoto8_1} alt="AI Illustration" />
        <p>
          At Future Invo Solution Pvt. Ltd., we develop AI-powered chatbots that revolutionize customer interactions, lead generation, HR processes, and customer support. In today’s fast-paced digital world, businesses need intelligent assistants that can engage users 24/7, provide instant responses, and drive conversions. Our chatbots leverage natural language processing (NLP), machine learning, and conversational AI to understand user intent, deliver personalized experiences, and automate routine tasks.
        </p>
        <p>
          Traditional customer support and lead generation methods are often slow, costly, and inconsistent. With our AI-powered chatbots, organizations can handle inquiries, qualify leads, assist with HR queries, and provide seamless support across multiple channels like websites, apps, and social media. For instance, a lead generation chatbot can capture prospects on your site, an HR chatbot can answer employee questions, and a customer support bot can resolve issues without human intervention. This not only improves efficiency but also enhances user satisfaction and boosts business growth.
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
                                                                          
                                                                                  {/* Toastify container */}
                                                                                  <ToastContainer position="top-center" autoClose={2000} />
          
            
          <div className="benefits-999">
            <h2>Benefits With Our AI Powered Chatbots(LeadGen, HR,Customer Support)</h2>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>24/7 Availability</h3>
                <p>Provide instant responses anytime, anywhere.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Lead Generation</h3>
                <p>Qualify and capture leads automatically.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Cost Efficiency</h3>
                <p>Reduce operational costs with automation.</p>
              </div>
            </div>
            <div className="benefit-item teal-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Personalized Interactions</h3>
                <p>Deliver tailored experiences based on user data.</p>
              </div>
            </div>
            <div className="benefit-item orange-999">
              <div style={{ textAlign: 'right' }}>
                <h3>Scalability</h3>
                <p>Handle multiple conversations simultaneously.</p>
              </div>
            </div>
          </div>
        
        </section>

      {/* Expertise Section */}
      <div className="chatbots-999">
        <h1>Our Expertise in AI "Artificial Intelligence" Powered Chatbots</h1>
        <div className="expertise-grid-999">
           <Link to="/Ai6">
                             <button className="expertise-item-999">Image & Video Intelligence <FontAwesomeIcon icon={faArrowRight} /> </button>
         
                   </Link>
                   <Link to="/Ai4">
                             <button className="expertise-item-999"> AI OCR & Document Intelligence <FontAwesomeIcon icon={faArrowRight} /> </button>
         
                   </Link>
                   <Link to="/Ai5">
                             <button className="expertise-item-999">Generative AI Solutions <FontAwesomeIcon icon={faArrowRight} /> </button>
         
                   </Link>
                   <Link to="/Ai3">
                             <button className="expertise-item-999"> AI in Healthcare <FontAwesomeIcon icon={faArrowRight} /> </button>
         
                   </Link>
                   <Link to="/Ai2">
                             <button className="expertise-item-999">AI in Finance <FontAwesomeIcon icon={faArrowRight} /> </button>
         
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
                Your trusted partner for cutting-edge AI Powered Chatbots(LeadGen, HR,Customer Support).
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
            <summary>How can chatbots help my business grow? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Chatbots save time, reduce staffing costs, and provide instant responses, ensuring better customer experiences and more leads.</div>
          </details>
        </div>


        <div className="faq-item2-999">
          <details>
            <summary>Can your chatbots integrate with my existing CRM or HR tools? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Yes. We build chatbots that seamlessly integrate with CRMs, HRMS, and third-party applications..</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Are these chatbots multilingual? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Absolutely. Our bots can communicate in multiple languages based on your target audience.</div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Do chatbots replace human agents? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">Not entirely. They handle repetitive queries so your staff can focus on complex and high-value tasks. </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>What Industries Does Future Invo IT Solutions Specialize In For AI-Powered Chatbot Solutions? <FontAwesomeIcon icon={faAnglesRight}/></summary>
            <div className="faq-answer2-999">We work across various industries, including healthcare, finance, retail, and manufacturing, providing tailored solutions to meet each sector's unique requirements.</div>
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
