// import React from 'react';
// import "./Service.css"
// import aiphoto from "./ServiceImages/aiphoto.png"
// // import aiphoto2 from "./ServiceImages/aiphoto2.png";
// // import aiphoto3 from "./ServiceImages/aiphoto3.png";
// // import aiphoto4 from "./ServiceImages/aiphoto4.png";
// // import aiphoto5 from "./ServiceImages/aiphoto5.png";
// // import aiphoto5 from "./ServiceImages/aiphoto5.png";
// // import aiphoto5 from "./ServiceImages/aiphoto5.png";
// // import arti from "./ServiceImages/arti.jpg";
// // import BG from "./ServiceImages/BG.png";
// // import bottom from "./ServiceImages/bottom.png"
// import bottomai from "./ServiceImages/bottomai.png"
// // import foraisol from "./ServiceImages/foraisol.png"
// import futureinvo from "./ServiceImages/futureinvo.png"

// export default function Services() {
//   return (
//     <div>
//       <div className="responsive">
//         <div className="top-bar">
//           <div className="left">
//             <span>
//               {/* <i className="fa-solid fa-phone-volume"></i>+91 7981107131 */}
//             </span>
//             <span>
//               {/* <i className="fa-regular fa-envelope"></i> info@futureinvo.com */}
//             </span>
//           </div>
//           <div className="right">
//             follow us:
//             <a href="https://www.linkedin.com/company/future-invo-solutions/">
//               {/* <i className="fa-brands fa-linkedin"></i> */}
//             </a>
//             <a href="https://www.instagram.com/futureinvosolutions">
//               {/* <i className="fa-brands fa-instagram"></i> */}
//             </a>
//           </div>
//         </div>

//         <nav className="navbar">
//           <div className="logo-container">
//             <a href="#" className="logo">
//               <img src={futureinvo} />
//             </a>
//           </div>
//           <div className="nav-right">
//             <ul className="nav-links" id="navlinks">
//               <li>
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#">About</a>
//               </li>
//               <li>
//                 <a href="#">Services</a>
//               </li>
//               <li>
//                 <a href="#">Trainings</a>
//               </li>
//               <li>
//                 <a href="#">Projects</a>
//               </li>
//               <li>
//                 <a href="#">Blog</a>
//               </li>
//               <li>
//                 <a href="#">Contact</a>
//               </li>
//             </ul>
//             <a href="#" className="nav-toggle-bar">
//               <i className="fa-solid fa-bars"></i>
//               <div></div>
//               <div></div>
//               <div></div>
//             </a>
//           </div>
//         </nav>

//         <header className="main-content">
//           <div className="header-content">
//             <p className="breadcrumbs">Home - AI & Artificial Intelligence Solutions</p>
//             <h1>
//               AI & Artificial Intelligence Solutions
//               <br />
//               For Smarter Business Innovation
//             </h1>
//             <p className="tagline">
//               Our AI solutions help businesses automate processes, enhance
//               decision-making, and unlock new growth opportunities through
//               intelligent innovation.
//             </p>
//           </div>
//         </header>

//         <div className="home-content">
//           <img src={aiphoto} className="right-image" />
//           <h1 style={{ fontSize: '45px' }}>AI & Artificial Intelligence Solutions</h1>
//           <p>
//             At Future Invo Solutions pvt ltd., we help businesses harness the
//             true power if Artificial Intelligence to stay ahead in today's
//             digital-first world. Our AI solutions are designed not just to
//             automate tasks,but to transform the way organizations operate, make
//             decisions, and deliver value to their customers.
//           </p>
//           <p>
//             Artificial Intelligence has the potential to reshape industries by
//             turning raw data into meaningful insights. With our expertise,
//             businesses can leverage AI to optimize processes, enhance
//             security, predict market trends, and improve overall efficiency.
//             Whether it's automating routines operations, enabling smarter
//             analytics, and building industry-specific AI applications, we
//             provide solutions that are scalable, reliable, and tailored to
//             unique business needs.
//           </p>
//           <p>
//             What makes our AI offerings stand out is balance between innovation
//             and practicality. We ensure that every AI solution we deliver is
//             grounded in real-world usability. From healthcare and finance to
//             retail and logistics, our AI-driven solutions empower the
//             organizations to achieve sustainable growth and maintain a
//             competitive edge.
//           </p>
//         </div>

//         <form>
//           <div className="container">
//             <div className="form-selection">
//               <h2>Get A Quote For You</h2>
//               <div className="form-group">
//                 <label htmlFor="name">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Enter your name"
//                   required
//                 />
//                 <br />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   required
//                 />
//                 <br />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="mobile">Mobile</label>
//                 <input
//                   type="tel"
//                   id="mobile"
//                   name="mobile"
//                   placeholder="Enter your contact number"
//                   required
//                 />
//                 <br />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="message">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   placeholder="Message for us"
//                   rows="4"
//                 ></textarea>
//                 <br />
//               </div>

//               <button className="sbutton" type="submit">
//                 Submit
//               </button>
//             </div>

//             <div className="benefits-container">
//               <h2>Benefits With Our AI Solutions</h2>
//               <div className="benefit-item orange">
//                 <div style={{ textAlign: 'right' }}>
//                   <p>
//                     Data-driven Decisions - Turn complex data into clear,
//                     actionable insights.
//                   </p>
//                 </div>
//               </div>
//               <div className="benefit-item teal">
//                 <div style={{ textAlign: 'right' }}>
//                   <p>
//                     Process Automation - Eliminate repetitive tasks and
//                     streamline operational efficiency.
//                   </p>
//                 </div>
//               </div>
//               <div className="benefit-item orange">
//                 <div style={{ textAlign: 'right' }}>
//                   <p>
//                     Predictive Analytics - Forecast trends and customer
//                     behavior for smarter strategies.
//                   </p>
//                 </div>
//               </div>
//               <div className="benefit-item teal">
//                 <div style={{ textAlign: 'right' }}>
//                   <p>
//                     Enhanced Security - Detect anomalies and strengthen data
//                     protection with AI-powered monitoring.
//                   </p>
//                 </div>
//               </div>
//               <div className="benefit-item orange">
//                 <div style={{ textAlign: 'right' }}>
//                   <p>
//                     Improved Productivity - Free up teams to focus on innovation
//                     while AI handles routine work.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>

//         <div className="chatbots">
//           <h1>Our Expertise in AI "Artificial Intelligence" Powered chatbots</h1>
//           <div className="expertise-grid">
//             <div className="expertise-item">AI Powered chatbots</div>
//             <div className="expertise-item">Image & Video Intelligence</div>
//             <div className="expertise-item">AI OCR & Document Intelligence</div>
//             <div className="expertise-item">Generative AI Solutions</div>
//             <div className="expertise-item">
//               AI in healthcare Diagnostics, Telemedicine AI
//             </div>
//             <div className="expertise-item">AI in Finance</div>
//           </div>
//         </div>

//         <div className="services">
//           <h1>Our other Services & Solutions</h1>
//           <div className="service-button">
//             <button className="service-item">IT Consulting</button>
//             <button className="service-item">Web Development</button>
//             <button className="service-item">Web Design</button>
//             <button className="service-item">Mobile Applications</button>
//             <button className="service-item">Digital Marketing Services</button>
//             <button className="service-item">
//               AI & Artificial Intelligence Solutions
//             </button>
//             <button className="service-item">Data Science & Big Data Analytics</button>
//             <button className="service-item">Machine Learning & Deep Learning</button>
//             <button className="service-item">Full Stack Web & Saas Development</button>
//             <button className="service-item">Cloud Services & Devops Automation</button>
//             <button className="service-item">Cybersecurity Solutions</button>
//             <button className="service-item">Business Tools Development</button>
//           </div>
//         </div>

//         <div className="why-choose-us">
//           <h2>Why Choose Us?</h2>
//           <p className="subheading">
//             Your trusted partner for cutting-edge IT solutions and digital
//             transformation
//           </p>

//           <div className="features-grid">
//             <div className="feature-card extensive">
//               <div className="icon">
//                 {/* <i className="fas fa-network-wired"></i> */}
//               </div>
//               <h3>
//                 Extensive
//                 <br />
//                 IT Expertise
//               </h3>
//               <p>
//                 Access to a team of skilled and certified professionals across
//                 technologies like Node.js, React.js, AWS, Azure, and more.
//               </p>
//             </div>

//             <div className="feature-card flexible">
//               <div className="icon">
//                 {/* <i className="fas fa-briefcase"></i> */}
//               </div>
//               <h3>
//                 Flexible
//                 <br />
//                 Engagement Models
//               </h3>
//               <p>
//                 Contract, Hire on contract, contract-to-hire, full-time, or
//                 offshore/on-site as per your project needs.
//               </p>
//             </div>

//             <div className="feature-card quick">
//               <div className="icon">
//                 {/* <i className="fas fa-clock"></i> */}
//               </div>
//               <h3>
//                 Quick
//                 <br />
//                 Turnaround
//               </h3>
//               <p>Fast onboarding and rapid project delivery to keep your business ahead.</p>
//             </div>

//             <div className="feature-card cross-industry">
//               <div className="icon">
//                 {/* <i className="fas fa-th-large"></i> */}
//               </div>
//               <h3>
//                 Cross-
//                 <br />
//                 Industry Experience
//               </h3>
//               <p>
//                 Proven success across IT consulting, cloud services, digital
//                 marketing, and enterprise solutions.
//               </p>
//             </div>

//             <div className="feature-card sla-driven">
//               <div className="icon">
//                 {/* <i className="fas fa-file-alt"></i> */}
//               </div>
//               <h3>
//                 SLA-
//                 <br />
//                 Driven Delivery
//               </h3>
//               <p>
//                 Dedicated account management, transparent processes, and
//                 efficient digital solutions.
//               </p>
//             </div>
//           </div>
//         </div>

//         <section className="background-overlay">
//           <div className="ai-image-container">
//             <img src={bottomai} />
//           </div>
//           <div className="form-container">
//             <h2>Talk To Our Experts</h2>
//             <form>
//               <div className="form-group">
//                 <input type="text" id="name2" name="name2" placeholder="Name" required />
//               </div>
//               <div className="form-group">
//                 <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
//               </div>
//               <div className="form-group">
//                 <input type="email" id="email2" name="email2" placeholder="Email" />
//               </div>
//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         </section>

//         <div className="faq-container">
//           <h2>Frequently Asked Questions</h2>

//           <div className="faq-item">
//             <details>
//               <summary>How Can AI-Powered Chatbot Solutions Services Benefit My Business?</summary>
//               <div className="faq-answer">
//                 Our consultancy services optimize your technology resources,
//                 improve operational efficiency, and help your business keep pace
//                 with evolving digital trends.
//               </div>
//             </details>
//           </div>

//           <div className="faq-item">
//             <details>
//               <summary>Do You Offer Remote Or On-Site AI-Powered Chatbot Solutions?</summary>
//               <div className="faq-answer">
//                 We offer both remote and on-site consultancy options to best meet
//                 our clients' needs, depending on project requirements and
//                 preferences.
//               </div>
//             </details>
//           </div>

//           <div className="faq-item">
//             <details>
//               <summary>What Does The AI-Powered Chatbot Solutions Involve?</summary>
//               <div className="faq-answer">
//                 We start with an in-depth assessment, followed by strategic
//                 planning, solution implementation, and ongoing support to ensure
//                 sustainable growth.
//               </div>
//             </details>
//           </div>

//           <div className="faq-item">
//             <details>
//               <summary>Can Future Invo IT Solutions Help With Cybersecurity Consulting?</summary>
//               <div className="faq-answer">
//                 Yes, we provide cybersecurity consulting to help you identify
//                 risks, secure data, and protect your systems against threats.
//               </div>
//             </details>
//           </div>

//           <div className="faq-item">
//             <details>
//               <summary>
//                 What Industries Does Future Invo IT Solutions Specialize In For
//                 AI-Powered Chatbot Solutions?
//               </summary>
//               <div className="faq-answer">
//                 We work across various industries, including healthcare, finance,
//                 retail, and manufacturing, providing tailored solutions to meet
//                 each sector's unique requirements.
//               </div>
//             </details>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react'

export default function Services() {
  return (
    <div>Services</div>
  )
}
