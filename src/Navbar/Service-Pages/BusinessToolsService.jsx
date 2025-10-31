import React,{useState} from "react";
import { ToastContainer, toast } from "react-toastify";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import photo1 from "../images/logo.png";
import photo2 from "../images/aiphoto2-0.png";
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

function BusinessToolsService() {


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
            Home › Business Tools Development 
          </p>
          <h1>
            Business Tools Development
          </h1>
          <p className="tagline-999">
            Our Business Tools Development help businesses automate processes, enhance
            decision-making, and unlock new growth opportunities through
            intelligent innovation.
          </p>
        </div>
      </section>

      
      <section className="home-content-999">
        <img src={photo2} alt="AI Illustration" className="right-image-999" />
        <h1>Business Tools Development</h1>
        <p>
          At Future Invo Solutions Pvt. Ltd., we help businesses harness the
          true power of Artificial Intelligence to stay ahead in today's
          digital-first world. Our AI solutions are designed not just to
          automate tasks, but to transform the way organizations operate, make
          decisions, and deliver value to their customers.
        </p>
        <p>
          Business Tools Development has the potential to reshape industries by
          turning raw data into meaningful insights. With our expertise,
          businesses can leverage AI to optimize processes, enhance security,
          predict market trends, and improve overall efficiency. Whether it's
          automating routine operations, enabling smarter analytics, or building
          industry-specific Business applications, we provide solutions that are
          scalable, reliable, and tailored to unique business needs.
        </p>
        <p>
          What makes our AI offerings stand out is the balance between
          innovation and practicality. We ensure that every Business solution we
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
          <h2>Benefits With Our AI & Artificial Intelligence Solutions</h2>
          <ul>
            <li className="benefit-item orange-999">
              📊 Centralized Business Operations - Manage everything in one place.
              insights.
            </li>
            <li className="benefit-item teal-999">
              ⚙️ Time & Cost savings - Automate repetitive tasks.
            </li>
            <li className="benefit-item orange-999">
              🔮 Custom Build  - Tools tailored to your extract business.
            </li>
            <li className="benefit-item teal-999">
               🚀 Improved Productivity - Free up teams for strategic work.
            </li>
            <li className="benefit-item orange-999">
              🔐 Better Experience - client portals and CRM systems help deliver faster.
            </li>
          </ul>
        </div>
      </section>

      {/* Expertise Section */}
      <div className="chatbots-999">
        <h1>Our Expertise in AI "Artificial Intelligence" Powered Chatbots</h1>
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
                     Your trusted partner for cutting-edge IT solutions and digital
                     transformation.
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

      {/* FAQ Section */}
      <div className="faq-container-999">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item2-999">
          <details>
            <summary>
              How Can Business Tools Development Services Benefit My Business?<FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
              Our consultancy services optimize your technology resources,
              improve operational efficiency, and help your business keep space
              with evolving digital trends.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>
              Do You Offer Remote Or On-Site Business Tools Development Solutions?<FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
              We offer both remote and on-site consultancy options to best meet
              our clients' needs, depending on project requirements and
              preferences.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>What Does The Business Tools Development Solutions Involve?<FontAwesomeIcon icon={faAnglesRight} /></summary>
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
              Can Future Invo Business Tools Development Help With Cybersecurity Consulting?<FontAwesomeIcon icon={faAnglesRight} />
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

export default BusinessToolsService;
