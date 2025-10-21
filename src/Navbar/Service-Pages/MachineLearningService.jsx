import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import photo1 from "../images/logo.png";
import photo2 from "../images/aiphoto8-0.png";
import photo3 from "../images/bottomai.png";
import photo4 from "../images/networking.png";
import photo5 from "../images/briefcase.png";
import photo6 from "../images/clock.png";
import photo7 from "../images/calculator.png";
import photo8 from "../images/document.png";

import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";

import "../Service-Pages/service12.css";

function MachineLearningService() {
  return (
    <div className="Appp">
      {/* Hero Section */}
      <section className="main-content-999">
        <div className="header-content-999">
          <p className="breadcrumbs-999">
            Home › Machine Learning & Deep Learning
          </p>
          <h1>
            Machine Learning & Deep Learning
          </h1>
    
          <p className="tagline-999">
            Our Machine Learning & Deep Learning help businesses automate processes, enhance
            decision-making, and unlock new growth opportunities through
            intelligent innovation.
          </p>
        </div>
      </section>

      
      <section className="home-content-999">
        <img src={photo2} alt="AI Illustration" className="right-image-999" />
        <h1>Machine Learning & Deep Learning</h1>
        <p>
         At Futureinvo Solution Pvt. Ltd., we help businesses move beyond traditional automation by embedding intelligence into every process. Our Machine Learning & Deep Learning solutions enable organizations to analyze patterns, make predictions, and continuously improve outcomes — all powered by adaptive algorithms that evolve over time.
        </p>
        <p>
          Our expertise spans predictive & prescriptive models, natural language processing (NLP), computer vision, chatbots, and recommendation systems. These solutions are applied in industries like finance (fraud detection, credit scoring), healthcare (diagnostics, treatment optimization), manufacturing (predictive maintenance), and retail (personalized recommendations).
        </p>
        <p>
          What makes us different is our balance between cutting-edge innovation and practical usability. We build models that are explainable, scalable, and business-focused, ensuring that AI works as a real partner in decision-making. By turning raw data into intelligent predictions, we help businesses reduce costs, improve accuracy, and gain a sustainable competitive edge.
        </p>
      </section>

      
      <section className="container-999">
        <form className="form-group-999">
          <h3>Get A Quote For You</h3>
          <label htmlFor="name"> Name</label>
          <input id="name" type="text" placeholder="Your full name" />
          <label htmlFor="mobile"> Mobile</label>
          <input id="mobile" type="text" placeholder="Mobile" />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Your email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Message"></textarea>
          <button className="sbutton-999">Submit</button>
        </form>

        <div className="benefits-999">
          <h2>Benefits With Our Machine Learning & Deep Learning</h2>
          <ul>
            <li className="benefit-item orange-999">
              🔮 Decision Making - Gain data-driven insights that guide strategic decisions.
              
            </li>
            <li className="benefit-item teal-999">
              ⚙️ Complex Tasks - Reduce manual effort by automating repetitive.
            </li>
            <li className="benefit-item orange-999">
              📊 Improved Accuracy  - Minimize human error with predictive.
            </li>
            <li className="benefit-item teal-999">
               🚀 Scalability - Solutions that adapt as your data and business.
            </li>
            <li className="benefit-item orange-999">
              🔐 Cost Optimization - Identify inefficiencies and cut down.
            </li>
          </ul>
        </div>
      </section>

      {/* Expertise Section */}
      <div className="chatbots-999">
        <h1>Our Expertise in Machine Learning & Deep Learning</h1>
        <div className="expertise-grid-999">
          <button className="expertise-item-999">Forecasting & Time Series Analysis<FontAwesomeIcon icon={faArrowRight} /></button>
          <button className="expertise-item-999">Fraud Detection Systems<FontAwesomeIcon icon={faArrowRight} /></button>
          <button className="expertise-item-999">Recommendation Engines<FontAwesomeIcon icon={faArrowRight} /></button>
          
        </div>                                                                                                                                      
      </div>

      <div className="services-999">
                    <h1>Our Other Services & Solutions</h1>
                    <div className="service-button-999">
                      <button className="service-item-999">
                        IT Consulting <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                      <button className="service-item-999">
                        Web Development <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                      <button className="service-item-999">
                        Web Design <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                      <button className="service-item-999">
                        Mobile Applications <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                      <button className="service-item-999">
                        Digital Marketing Services <FontAwesomeIcon icon={faArrowRight} />
                        
                      </button>
                      <button className="service-item-999">
                        Data Science & Big Data Analytics <FontAwesomeIcon icon={faArrowRight} />
                        
                      </button>
                      {/* <button className="service-item-999">
                        Machine Learning & Deep Learning <FontAwesomeIcon icon={faArrowRight} />
                        
                      </button> */}
                      <button className="service-item-999">
                        Cloud Services & DevOps Automation <FontAwesomeIcon icon={faArrowRight} />
                        
                      </button>
                      <button className="service-item-999">
                        Artificial Intelligence <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                      <button className="service-item-999">
                        Business Tools & Development <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                      <button className="service-item-999">
                        Cyber Solutions <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                      <button className="service-item-999">
                        Emerging Tech <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                      <button className="service-item-999">
                        Full Stack Web & SaaS Development <FontAwesomeIcon icon={faArrowRight} />
                      </button>
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
            <input id="name" type="text" placeholder="Name" required />
            <input id="phone number" type="tel" placeholder="Phone Number" required />
            <input id="email" type="email" placeholder="Email" required />
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
              How will this service help my business?<FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
                   Our Machine Learning & Deep Learning solutions help you make smarter decisions, automate repetitive tasks, and uncover insights from your data so your business can grow faster and more efficiently.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>
              Will it save me money or time?<FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
              Yes. By automating processes, reducing errors, and improving efficiency, our solutions save both time and operational costs. This allows your team to focus on more important work.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>Will it bring more customers or revenue?<FontAwesomeIcon icon={faAnglesRight} /></summary>
            <div className="faq-answer2-999">
              Absolutely. With better data insights, personalized customer experiences, and improved forecasting, you can attract new customers, keep existing ones engaged, and open new revenue opportunities.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>
             How secure and reliable is it?<FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
              We prioritize security. All data is protected with strict privacy standards, secure pipelines, and monitoring. Our solutions are reliable, scalable, and built to handle sensitive business information safely.
            </div>
          </details>
        </div>

        <div className="faq-item2-999">
          <details>
            <summary>
             How quickly can I see results?<FontAwesomeIcon icon={faAnglesRight} />
            </summary>
            <div className="faq-answer2-999">
              It depends on the project size. Some improvements (like dashboards and reports) can be seen within weeks, while larger predictive models may take a few months. But we always aim to deliver quick wins early.
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

export default MachineLearningService;
