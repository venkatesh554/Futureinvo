import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import photo2 from "../images/aiimage2.png";
import photo3 from "../images/bottomai.png";
import photo4 from "../images/networking.png";
import photo5 from "../images/briefcase.png";
import photo6 from "../images/clock.png";
import photo7 from "../images/calculator.png";
import photo8 from "../images/document.png";
import "../Service-Pages/service12.css" ;
import { Link } from "react-router-dom";


function WebDevelopmentService() {
  return (
    <div className="Appp">
      {/* Hero Section */}
      <section className="main-content-999">
        <div className="header-content-999">
          <p className="breadcrumbs-999">Home › Web Development</p>
          <h1>Web Development</h1>
          <p className="tagline-999">
            Our Web Development services help businesses automate processes,
            enhance decision-making, and unlock new growth opportunities through
            intelligent innovation.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="home-content-999">
        <h1>Web Development</h1>
        <img src={photo2} alt="AI Illustration" className="right-image-999" />
        <p>
          At Future Invo Solution Pvt. Ltd., we help businesses harness the full
          potential of web development to thrive in today's digital-first world.
          Our web solutions go beyond just building websites—they transform how
          organizations engage with customers, deliver services, and achieve
          business growth.
        </p>
        <p>
          Web development has the potential to reshape industries by turning
          digital ideas into meaningful business outcomes. With our expertise,
          businesses can leverage custom websites and applications to optimize
          processes, enhance user experiences, predict trends, and improve
          overall efficiency. Whether it's building responsive websites,
          enabling smarter analytics, or creating industry-specific web
          solutions, we deliver services that are scalable, reliable, and
          tailored to each business's unique needs.
        </p>
        <p>
          What makes our web development services stand out is the balance
          between creativity and practicality. We ensure that every solution we
          deliver is user-friendly and impactful. From healthcare and finance to
          retail and logistics, our web solutions empower organizations to
          achieve sustainable growth and maintain a competitive edge online.
        </p>
      </section>

      {/* Quote Form & Benefits */}
      <section className="container-999">
        <form className="form-group-999">
          <h3>Get A Quote For You</h3>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Your full name" />

          <label htmlFor="mobile">Mobile</label>
          <input type="text" name="mobile" placeholder="Mobile" />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Your email" />

          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="Message"></textarea>

          <button className="sbutton-999" type="submit">Submit</button>
        </form>

        <div className="benefits-999">
          <h2>Benefits With Our Web Development</h2>
          <ul>
            <li className="benefit-item orange-999">
              📊 Web Solutions — Turn complex data into actionable insights
              across teams.
            </li>
            <li className="benefit-item teal-999">
              ⚙️ Digital Workflows — Maximize efficiency with smart web
              solutions.
            </li>
            <li className="benefit-item orange-999">
              🔮 Web Success — Use user behavior to drive smarter digital
              strategies.
            </li>
            <li className="benefit-item teal-999">
              🔐 Web Protection — Ensure secure and reliable web operations.
            </li>
            <li className="benefit-item orange-999">
              🚀 Web Performance — Let web solutions handle routine tasks while
              your team innovates.
            </li>
          </ul>
        </div>
      </section>

      {/* Expertise Section */}
      <div className="chatbots-999">
        <h1>Our Expertise in Web Development</h1>
        <div className="expertise-grid-999">
         <Link to="/Webdev1">
          <button className="expertise-item-999">
            Custom Website Development <FontAwesomeIcon icon={faArrowRight} />
          </button>
         </Link>
        <Link to="/Webdev2">
                  <button className="expertise-item-999">E-Commerence Platforms <FontAwesomeIcon icon={faArrowRight} /> </button>
        
        </Link>    
        <Link to="/Webdev3">
            <button className="expertise-item-999"> API Development & Integration  <FontAwesomeIcon icon={faArrowRight} /> </button>
        
        </Link>  
        <Link to="/Webdev4">
                  <button className="expertise-item-999">CMS Development(Wordpress, Drupal) <FontAwesomeIcon icon={faArrowRight} /> </button>
        
        </Link >
        <Link to="/Webdev5">
                  <button className="expertise-item-999">Progressive Web Apps(PWAs) <FontAwesomeIcon icon={faArrowRight} /> </button>
        
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
      {/* Why Choose Us Section */}
      <div className="why-choose-us-999">
        <h2>Why Choose Us?</h2>
        <p className="subheading-999">
          Your trusted partner for cutting-edge Web Development.
        </p>
        <div className="features-grid-999">
          <div className="feature-card extensive-999">
            <img src={photo4} alt="extensive" className="icon-999" />
            <h3>Extensive IT Expertise</h3>
            <p>
              Access to certified professionals across technologies like React,
              Node.js, AWS, Azure, and more.
            </p>
          </div>

          <div className="feature-card flexible-999">
            <img src={photo5} alt="flexible" className="icon-999" />
            <h3>Flexible Engagement Models</h3>
            <p>
              Contract, hire on contract, contract-to-hire, full-time, or
              offshore/on-site as per your project needs.
            </p>
          </div>

          <div className="feature-card quick-999">
            <img src={photo6} alt="quick" className="icon-999" />
            <h3>Quick Turnaround</h3>
            <p>
              Fast onboarding and delivery to keep your business ahead of the
              curve.
            </p>
          </div>

          <div className="feature-card cross-industry-999">
            <img src={photo7} alt="cross-industry" className="icon-999" />
            <h3>Cross Industry Experience</h3>
            <p>
              Proven success across IT consulting, cloud services, digital
              marketing, and enterprise solutions.
            </p>
          </div>

          <div className="feature-card sla-driven-999">
            <img src={photo8} alt="sla-driven" className="icon-999" />
            <h3>SLA-Driven Delivery</h3>
            <p>
              Transparent processes and reliable execution for every project.
            </p>
          </div>
        </div>
      </div>

      {/* Talk to Experts Section */}
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

      {/* FAQ Section */}
      <div className="faq-container-999">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item2-999">
          <details>
            <summary>
              How can IT-Driven Chatbot Solutions Benefit My Business?
              <FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
              IT-driven chatbot solutions streamline operations, enhance
              customer engagement, and drive business growth.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>
              Do You Offer Remote or On-Site Web Development Solutions?
              <FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
              We offer both remote and on-site web development services tailored
              to your business needs.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>
              What Do Web Development Solutions Involve?
              <FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
              Our web development solutions involve designing responsive
              websites, building custom applications, and providing ongoing
              support for business growth.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>
              Can Future Invo Web Development Services Assist With Website
              Security?
              <FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
              Yes. Future Invo IT Solutions provides expert website security
              consulting to protect your business from threats and ensure secure
              operations.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>
              What Industries Does Future Invo Specialize In For Web Development
              Services?
              <FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
              Future Invo IT Solutions specializes in web development for
              healthcare, finance, logistics, and other industries seeking
              digital transformation and optimized technology solutions.
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

export default WebDevelopmentService;
