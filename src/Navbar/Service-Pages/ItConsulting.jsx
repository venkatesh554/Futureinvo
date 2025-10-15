import React from 'react'
import "./ItConsulting.css"
import logoo from "../ServiceImages/logo.png"
import aiImage1 from "../ServiceImages/aiimage.png"
import { faAngleRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ItConsulting() {
  return (
    <div>

      <div className="responsive">
        {/* <div className="top-bar-1">
          <div className="left-1">
            <span>
              <i className="fa-solid fa-phone-volume"></i>+91 7981107131
            </span>
            <span>
              <i className="fa-regular fa-envelope"></i> info@futureinvo.com
            </span>
          </div>
          <div className="right-1">
            follow us:
            <a href="https://www.linkedin.com/company/future-invo-solutions/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/futureinvosolutions">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div> */}

        {/* <nav className="navbar-1">
          <div className="logo-container-1">
            <a href="#" className="logo-1">
                <img src={logoo}/>
            </a>
          </div>
          <div className="nav-right-1">
            <ul className="nav-links-1" id="navlinks-1">
              <b><li><a href="#">Home</a></li></b>
              <b><li><a href="#">About</a></li></b>
              <b><li><a href="#">Services</a></li></b>
              <b><li><a href="#">Trainings</a></li></b>
              <b><li><a href="#">Projects</a></li></b>
              <b><li><a href="#">Blog</a></li></b>
              <b><li><a href="#">Contact</a></li></b>
            </ul>
            <a href="#" className="nav-toggle-bar">
              <i className="fa-solid fa-bars"></i>
              <div></div>
              <div></div>
              <div></div>
            </a>
          </div>
        </nav> */}

        <header className="main-content-1">
          <div className="header-content-1">
            {/* <p className="breadcrumbs-1">Home &gt; IT Consulting &gt; Enterprise Architecture</p> */}
            <h1>“IT Consulting”<br /> "Enterprise Architecture"</h1>
            <p className="tagline-1">Our Enterprise Architecture help businesses automate processes, enhance decision-making, and unlock new growth opportunities through intelligent innovation.</p>
          </div>
        </header>

        <div className="home-content-1">
          <img className="right-image-1" src={aiImage1} />
          <h1 style={{ fontSize: '45px' }}>Enterprise Architecture</h1>
          <p>At Future Invo Solution Pvt. Ltd., we help organizations design scalable enterprise architectures that drive growth and innovation in a rapidly evolving digital landscape. Our approach goes beyond system design—it transforms how businesses make decisions, align initiatives, and deliver lasting value to their customers.</p>
          <p>Enterprising architecture has the power to transform businesses by turning insights into scalable system designs. With our expertise, organizations can build architectures that optimize operations, anticipate market trends, and support sustainable growth. From aligning technology initiatives with long-term objectives to implementing robust, adaptable solutions, we provide guidance that is precise, reliable, and tailored to each business's unique needs.</p>
          <p>What sets our enterprise architecture services apart is the perfect blend of vision and practicality. We ensure every system design and framework we create is actionable, scalable, and aligned with real-world business needs. Across industries—from healthcare and finance to retail and logistics—our guidance empowers organizations to achieve sustainable growth and maintain a competitive edge.</p>
        </div>

        <form>
          <div className="container-1">
            <div className="form-group-1">
              <h2> Get A Quote For You</h2>

              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Enter your name" required /><br />

              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Enter your email" required /><br />

              <label htmlFor="mobile">Mobile</label>
              <input type="tel" placeholder="Enter your contact number" required /><br />

              <label htmlFor="Message">Message</label>
              <textarea id="text" placeholder="Message for us" rows="4"></textarea><br />

              <button className="sbutton" type="submit">Submit</button>
            </div>

            <div className="benefits-container">
              <h2>Benefits With Our Enterprise Architecture</h2>

              <div className="benefit-item orange">
                <div style={{ textAlign: 'right' }}>
                  <h3>Aligning systems</h3><br /><br />
                  <p>Modernization IT Infrastructures grow with your business needs.</p>
                </div>
              </div>

              <div className="benefit-item teal">
                <div style={{ textAlign: 'right' }}>
                  <h3>Optimizing systems</h3><br /><br />
                  <p>Streamline processes reduce complexity and improve productivity.</p>
                </div>
              </div>

              <div className="benefit-item orange">
                <div style={{ textAlign: 'right' }}>
                  <h3>Designing clear Frameworks</h3><br /><br />
                  <p>Upgraded systems enable better decision-making through real-time analytics.</p>
                </div>
              </div>

              <div className="benefit-item teal">
                <div style={{ textAlign: 'right' }}>
                  <h3>Designing enterprise architecture</h3><br /><br />
                  <p>Modern technologies keep organizations ahead in rapidly evolving markets.</p>
                </div>
              </div>

              <div className="benefit-item orange">
                <div style={{ textAlign: 'right' }}>
                  <h3>Optimizing processes</h3><br /><br />
                  <p>Long-term strategies ensure technology investments deliver lasting value.</p>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="chatbots">
          <h1>Our Expertise in Enterprise Architecture</h1>
          <div className="expertise-grid">
            <button className="expertise-item">Strategy & Roadmap Consulting <FontAwesomeIcon icon={faArrowRight} /></button>
            <button className="expertise-item">Enterprise Architecture <FontAwesomeIcon icon={faArrowRight} /></button>
            <button className="expertise-item">Technology Modernization <FontAwesomeIcon icon={faArrowRight} /></button>
            <button className="expertise-item">IT Infrastructure Consult <FontAwesomeIcon icon={faArrowRight} /></button>
            <button className="expertise-item">Digital Transformation Advisor <FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>

        <div className="services-1">
          <h1>Our other Services & Solutions</h1>
          <div className="service-button"> 
            <button className="service-item">Web Development <FontAwesomeIcon icon={faArrowRight} /></button>
            <button className="service-item">Web Design <FontAwesomeIcon icon={faArrowRight} /></button>
            <button className="service-item">Mobile Applications <FontAwesomeIcon icon={faArrowRight} /></button>
            <button className="service-item">Digital Marketing Services <FontAwesomeIcon icon={faArrowRight} /></button>
            <button className="service-item">AI & Artificial Intelligence Solutions <FontAwesomeIcon icon={faArrowRight} /></button>
            <button className="service-item">Data Science & Big Data Analytics <FontAwesomeIcon icon={faArrowRight} /></button>
            <button className="service-item">Machine Learning & Deep Learning <FontAwesomeIcon icon={faArrowRight} /></button>
            <button className="service-item">Full Stack Web & SaaS Development <FontAwesomeIcon icon={faArrowRight} /></button>
            <button className="service-item">Cloud Services & DevOps Automation <FontAwesomeIcon icon={faArrowRight} /></button>
            <button className="service-item">Cybersecurity Solutions <FontAwesomeIcon icon={faArrowRight} /></button>
            <button className="service-item">Business Tools Development <FontAwesomeIcon icon={faArrowRight} /></button>
            <button className="service-item">Emerging Tech <FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>

        <div className="why-choose-us-001">
          <h2>Why Choose Us?</h2>
          <p className="subheading">Your trusted partner for cutting-edge Enterprise Architecture</p>

          <div className="features-grid">
            <div className="feature-card extensive">
              <div className="icon-1">
                <i className="fas fa-network-wired"></i>
              </div>
              <h3>Extensive<br />IT Expertise</h3>
              <p>Access to a team of skilled and certified professionals across technologies like Node.js, React.js, AWS, Azure, and more.</p>
            </div>

            <div className="feature-card flexible">
              <div className="icon-1">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Flexible<br />Engagement Models</h3>
              <p>Contract, hire on contract, contract-to-hire, full-time, or offshore/on-site as per your project needs.</p>
            </div>

            <div className="feature-card quick">
              <div className="icon-1">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Quick<br />Turnaround</h3>
              <p>Fast onboarding and rapid project delivery to keep your business ahead.</p>
            </div>

            <div className="feature-card cross-industry">
              <div className="icon-1">
                <i className="fas fa-th-large"></i>
              </div>
              <h3>Cross-<br />Industry Experience</h3>
              <p>Proven success across IT consulting, cloud services, digital marketing, and enterprise solutions.</p>
            </div>

            <div className="feature-card sla-driven">
              <div className="icon-1">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>SLA-<br />Driven Delivery</h3>
              <p>Dedicated account management, transparent processes, and efficient digital solutions.</p>
            </div>
          </div>
        </div>

        <section className="background-overlay">
          <div className="ai-image-container">
            <img src="bottomai.png" alt="AI Expert" />
          </div>
          <div className="form-container">
            <h2>Talk To Our Experts</h2>
            <form>
              <div className="form2-group">
                <input type="text" id="name" name="name" placeholder="Name" required />
              </div>
              <div className="form2-group">
                <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
              </div>
              <div className="form2-group">
                <input type="email" id="email" name="email" placeholder="Email" required />
              </div>
              <button type="submit" >Submit</button>
            </form>
          </div>
        </section>

        <div className="faq-container-001">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item-001">
            <details>
              <summary>How can Enterprise Architecture strategies Benefit My Business? <i className="fa-solid fa-angles-right"></i></summary>
              <div className="faq-answer-001">Enterprise Architecture solutions streamline operations, enhance customer engagement, and drive business growth.</div>
            </details>
          </div>

          <div className="faq-item-001">
            <details>
              <summary>Do You Offer Remote or On-Site Enterprise Architecture Strategies? <i className="fa-solid fa-angles-right"></i></summary>
              <div className="faq-answer-001">We offer both remote and on-site Enterprise Architecture solutions tailored to your business needs.</div>
            </details>
          </div>

          <div className="faq-item-001">
            <details>
              <summary>What Do Enterprise Architecture Solutions Involve? <i className="fa-solid fa-angles-right"></i></summary>
              <div className="faq-answer-001">Our Enterprise Architecture solutions involve assessing technology needs, optimizing processes, implementing scalable systems, and providing ongoing support for business growth.</div>
            </details>
          </div>

          <div className="faq-item-001">
            <details>
              <summary>Can Future Invo Enterprise Architecture Assist With Cybersecurity Consulting? <i className="fa-solid fa-angles-right"></i></summary>
              <div className="faq-answer-001">Yes. Future Invo Enterprise Architecture provides expert Cybersecurity consulting to protect your business from threats and ensure secure operations.</div>
            </details>
          </div>

          <div className="faq-item-001">
            <details>
              <summary>What Industries Does Future Invo Enterprise Architecture Specialize In? <i className="fa-solid fa-angles-right"></i></summary>
              <div className="faq-answer-001">Future Invo Enterprise Architecture specializes in Enterprise Architecture for healthcare, finance, logistics, and other industries seeking digital transformation and optimized technology solutions.</div>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}
