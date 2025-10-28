

import React,{useState} from "react";
import { ToastContainer, toast } from "react-toastify";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import photo2 from "../images/aiimage3.png";
import photo3 from "../images/bottomai.png";
import photo4 from "../images/networking.png";
import photo5 from "../images/briefcase.png";
import photo6 from "../images/clock.png";
import photo7 from "../images/calculator.png";
import photo8 from "../images/document.png";

import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";

import "../Service-Pages/service12.css";
import { Link } from "react-router-dom";


function WebDesign() {



    const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted!');
    // Reset form
    setFormData({
      name: '',
      mobile: '',
      email: '',
      message: ''
    });
  };



  return (
    <div className="Appp">
      {/* Hero Section */}
      <section className="main-content-999">
        <div className="header-content-999">
          <p className="breadcrumbs-999">
            Home › Web Design
          </p>
          <h1>
            Web Design
          </h1>
          <p className="tagline-999">
            Our Web Design help businesses automate processes, enhance
            decision-making, and unlock new growth opportunities through
            intelligent innovation.
          </p>
        </div>
      </section>

      
      <section className="home-content-999">
        
        <h1>Web Design</h1>
        <img src={photo2} alt="AI Illustration" className="right-image-999" />
        <p>
          At Future Invo Solution Pvt. Ltd., we help businesses harness the full potential of web development to thrive in today's digital-first world. Our web solutions go beyond just building websites—they transform how organizations engage with customers, deliver services, and achieve business growth.
        </p>
        <p>
          Web design has the potential to reshape industries by turning digital ideas into meaningful business outcomes. With our expertise, businesses can leverage custom websites and applications to optimize processes, enhance user experiences, predict trends, and improve overall efficiency. Whether it's building responsive websites, enabling smarter analytics, or creating industry-specific web solutions, we deliver services that are scalable, reliable, and tailored to each business's unique needs.
        </p>
        <p>
          What makes our web design services stand out is the balance between creativity and practicality. We ensure that every solution we deliver is user-friendly and impactful. From healthcare and finance to retail and logistics, our web solutions empower organizations to achieve sustainable growth and maintain a competitive edge online.
        </p>
      </section>

      
      <section className="container-999">
        {/* <form className="form-group-999">
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
        </form> */}
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
          <h2>Benefits With Our Web Design</h2>
          <ul>
            <li className="benefit-item orange-999">
              📊 Web Solutions — Turn complex data to actionable insights across teams.
            </li>
            <li className="benefit-item teal-999">
              ⚙️ Digital Workflows — Maximize efficiency with smart web solutions.
            </li>
            <li className="benefit-item orange-999">
              🔮 Web Sucess — User behaviour to drive smarter digital strategies.
            </li>
            <li className="benefit-item teal-999">
              🔐 Web Protection — Ensure secure and reliable web operations.
            </li>
            <li className="benefit-item orange-999">
              🚀 Web Performance — Web solutions handle routine tasks white your team.
            </li>
          </ul>
        </div>
      </section>

     
      <div className="chatbots-999">
        <h1>Our Expertise in Web Design </h1>
        <div className="expertise-grid-999">

<Link to="/Webdesign1">
          <button className="expertise-item-999">UI/UX Design  <FontAwesomeIcon icon={faArrowRight} /></button>

</Link>  
<Link to="/Webdesign2">
        <button className="expertise-item-999">Responsive Design <FontAwesomeIcon icon={faArrowRight} /> </button>

</Link>
<Link to="/Webdesign3">
          <button className="expertise-item-999"> Landing Page Design  <FontAwesomeIcon icon={faArrowRight} /> </button>

</Link>
<Link to="/Webdesign4">
          <button className="expertise-item-999">Graphic & Branding Design <FontAwesomeIcon icon={faArrowRight} /> </button>

</Link>
<Link to="/Webdesign5">
          <button className="expertise-item-999">Wireframing & prototyping <FontAwesomeIcon icon={faArrowRight} /> </button>
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
          Your trusted partner for cutting-edge Web Design.
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
                <summary>How can IT-Driven Chatbot Solutions Benefit My Business?<FontAwesomeIcon icon={faAnglesRight} /> </summary>
                <div className="faq-answer2-999">IT-driven chatbot solutions streamline operations, enhance customer engagement, and drive business growth. </div>
            </details>
         </div>  

          <div className="faq-item2-999">
            <details>
                <summary>Do You Offer Remote or On-Site Web Development Solutions?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">We offer both remote and on-site Web Development services tailored to your business needs.</div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary>What Do Web Development Solutions Involve?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Our web development solutions involve designing responsive websites, building custom applications, and providing ongoing support for business growth.</div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary>Can Future Invo Web Development Services Assist With Website Security?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Yes. Future Invo IT Solutions provides expert website security consulting to protect your business from threats and ensure secure operations.</div>
            </details>
         </div>

          <div className="faq-item2-999">
            <details>
                <summary>What Industries Does Future Invo Specialize In For Web Development Services?<FontAwesomeIcon icon={faAnglesRight} /></summary>
                <div className="faq-answer2-999">Future Invo IT Solutions specializes in web development for healthcare, finance, logistics, and other industries seeking digital transformation and optimized technology solutions.</div>
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

export default WebDesign;
