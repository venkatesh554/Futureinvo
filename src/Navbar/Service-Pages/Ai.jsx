import React,{useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import photo2 from "../images/aiphoto2.png";
import photo3 from "../images/bottomai.png";
import photo4 from "../images/networking.png";
import photo5 from "../images/briefcase.png";
import photo6 from "../images/clock.png";
import photo7 from "../images/calculator.png";
import photo8 from "../images/document.png";

import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "../Service-Pages/service12.css";

function Ai() {


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
      {/* Hero Section */}
      <section className="main-content-999">
        <div className="header-content-999">
          <p className="breadcrumbs-999">
          </p>
          <h1>
            AI & Artificial Intelligence Solutions <br/>"AI Powered Chatbots(LeadGen, HR,Customer Support)"
          </h1>
          <p className="tagline-999">
            Our AI Powered Chatbots(LeadGen, HR,Customer Support) help businesses automate processes, enhance
            decision-making, and unlock new growth opportunities through
            intelligent innovation.
          </p>
        </div>
      </section>

      
      <section className="home-content-999">
        
        <h1>AI Powered Chatbots(LeadGen, HR,Customer Support)</h1>
        <img src={photo2} alt="AI Illustration" className="right-image-999" />
        <p>
          At Future Invo Solution Pvt. Ltd., we develop AI-powered Image & Video intelligence solutions that enable businesses to extract actionable insights from visual data. In today’s digital era, images and videos are everywhere — from security footage and social media content to medical scans and manufacturing quality checks. But without AI, this massive pool of visual information often goes underutilized. By harnessing the power of visual, deep learning, and object detection modules, data is analyzed, classified, and interpreted in real time, giving businesses an actionable edge in accuracy and decision-making.
        </p>
        <p>
          Traditional methods of processing visuals are time-consuming, prone to human error, and unable to match the speed and growing volume of data. With our solutions, organizations can automate processes such as facial recognition, visual authentication, product identification, and motion tracking. For example, retailers can detect shoplifting threats through cameras, a hospital can automate diagnostics of medical scans, and a logistics company can monitor asset safety through predictive video analytics. The power of visual intelligence is not just efficiency, but also the ability to predict outcomes and prevent risks before they occur.
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
          <h2>Benefits With Our AI Powered Chatbots(LeadGen, HR,Customer Support)</h2>
          <ul>
            <li className="benefit-item orange-999">
              📊 Enable real time — Enable real-time facial recognition and object detection.
            </li>
            <li className="benefit-item teal-999">
              ⚙️ Quality control — Automate quality control in manufacturing.
            </li>
            <li className="benefit-item orange-999">
              🔮 shelf monitoring — Support healthcare diagnostics by analyzing medical data.
              data.
            </li>
            <li className="benefit-item teal-999">
              🔐 predictive analytics — Predictive Analytics Forecast trends & behaviors.
            </li>
            <li className="benefit-item orange-999">
              🚀 public safety — Provide video-based predictive analytics.
            </li>
          </ul>
        </div>
      </section>

     
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
          <Link to="/Ai1">
                    <button className="expertise-item-999"> AI Powered Chatbots <FontAwesomeIcon icon={faArrowRight} /> </button>

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
                <summary>How can chatbots help my business grow?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Chatbots save time, reduce staffing costs, and provide instant responses, ensuring better customer experiences and more leads.</div>
            </details>
         </div>  

          <div className="faq-item2-999">
            <details>
                <summary>Can your chatbots integrate with my existing CRM or HR tools?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Yes. We build chatbots that seamlessly integrate with CRMs, HRMS, and third-party applications..</div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary>Are these chatbots multilingual?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Absolutely. Our bots can communicate in multiple languages based on your target audience.</div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary>Do chatbots replace human agents?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Not entirely. They handle repetitive queries so your staff can focus on complex and high-value tasks. </div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary>What Industries Does Future Invo IT Solutions Specialize In For AI-Powered Chatbot Solutions?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">We work across various industries, including healthcare, finance, retail, and manufacturing, providing tailored solutions to meet each sector's unique requirements.</div>
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

export default Ai;
