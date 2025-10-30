import React,{useState} from 'react';
import { ToastContainer, toast } from "react-toastify";
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
      <section className="main-content-999">
        <div className="header-content-999">
          <p className="breadcrumbs-999">
            Home › Digital Marketing Service › Search Engine Marketing
          </p>
          <h1>
            "Search Engine Marketing"
          </h1>
          <p className="tagline-999">
            Our Search Engine Marketing help businesses automate processes, enhance
            decision-making, and unlock new growth opportunities through
            intelligent innovation.
          </p>
        </div>
      </section>

      {/* Home Content Section */}
      <section className="home-content-999">
        
        <h1>Search Engine Marketing</h1>
        <img src={aiPhoto8_1} alt="AI Illustration" className="right-image-999" />
        <p>
          At Future Invo Solution Pvt. Ltd., we help businesses harness the full potential of Search Engine Marketing to thrive in today's digital-first world. Our apps go beyond functionality—they transform how organizations engage with users, deliver services, and drive business growth.
        </p>
        <p>Search Engine Marketing have the power to reshape industries by turning creative ideas into engaging digital experiences. With our expertise, businesses can leverage intuitive and visually appealing apps to enhance user engagement, streamline interactions, anticipate user needs, and improve overall effectiveness. Whether it's developing responsive app layouts, designing user-friendly interfaces, or creating industry-specific mobile solutions, we deliver applications that are scalable, reliable, and tailored to each business's unique needs.</p>
         <p>What makes our Search Engine Marketing stand out is the balance between creativity and practicality. We ensure every app we deliver is visually engaging, intuitive, and impactful. From healthcare and finance to retail and logistics, our mobile solutions empower organizations to achieve sustainable growth and maintain a competitive edge in the digital space.</p>
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
          <h2>Benefits With Our Search Engine Marketing</h2>
          <div className="benefit-item orange-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Immediate Visibility</h3>
              <p>Increase visibility on google, bing & other search engines.</p>
            </div>
          </div>
          <div className="benefit-item teal-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Targeted Advertising</h3>
              <p>Reach the right audience based on keyword, locations.</p>
            </div>
          </div>
          <div className="benefit-item orange-999">
            <div style={{ textAlign: 'right' }}>
              <h3>High ROI</h3>
              <p>Paid campaigns optimized to deliver maximum returns.</p>
            </div>
          </div>
          <div className="benefit-item teal-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Measurable Results</h3>
              <p>Track clicks, conversions & campaign Performance.</p>
            </div>
          </div>
          <div className="benefit-item orange-999">
            <div style={{ textAlign: 'right' }}>
              <h3>Flexible Budgeting</h3>
              <p>Adjust ad spend based on campaign Performance & goals.</p>
            </div>
          </div>
        </div>
      </section>

     
      <div className="chatbots-999">
        <h1>Our Expertise in Digital Marketing Service</h1>
        <div className="expertise-grid-999">
          <Link  to="/Digital1">
                             <button className="expertise-item-999">Search Engine Optimization(SEO) <FontAwesomeIcon icon={faArrowRight} /> </button>
         
                   </Link>
                   
                   <Link to="/Digital3">
                             <button className="expertise-item-999"> Social Media Optimization(SMO) <FontAwesomeIcon icon={faArrowRight} /> </button>
         
                   </Link>
                   <Link to="/Digital4">
                             <button className="expertise-item-999">Pay-Per-Click(PPC) <FontAwesomeIcon icon={faArrowRight} /> </button> 
         
                   </Link>
                   <Link to="/Digital5">
                             <button className="expertise-item-999">Email Marketing <FontAwesomeIcon icon={faArrowRight} /> </button>
         
                   </Link>
                   <Link to="/Digital6">
                             <button className="expertise-item-999"> Content Marketing  <FontAwesomeIcon icon={faArrowRight} /> </button>
         
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
          Your trusted partner for cutting-edge Search Engine Optimization.
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
                <summary>Do you provide SEM services, om-site, or both?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">We provide SEM services both remotely and on-site, depending on client needs and project requirements. </div>
            </details>
         </div>  

          <div className="faq-item2-999">
            <details>
                <summary>What do SEM solutions involve?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">SEM solutions involve optimizing website content, structure, and technical aspects to improve search engine ranking, attract organic tarffic, and enhance us.</div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary>Can future invo assist with keyword research and ad optimization?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">yes, we specialize in comprehensive SEM strategies, including on-page optimization, off-page link building, content strategy, and technical SEO audits.</div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary>Which industries does Futute invo specialize in for SEM services?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">We serve e-commrence, finance, healthcare, logisitcs,education, and technology, delivery SEO solutions tailored to each industry's audience and goals.</div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary>How can SEM benefit my business?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">SEM benefit your business by : Improving search engine rankings to increase visibility.</div>
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
