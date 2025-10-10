import React,{useState} from 'react'
import "./about.css"
import footericon from "../Navbar/navbar-images/icon.png"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import bgimg from "./navbar-images/bgimg.png"


import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import user from "./why-choose/user.png"
import bag from "./why-choose/bag.png";
import time from "./why-choose/time.png";
import calculator from "./why-choose/calculator.png";
import notes from "./why-choose/notes.png"


export default function AboutUs() {

  
    const faqData = [
      { question: "What type of IT consulting services Do You Offer?", answer: "We provide strategic IT consulting, including technology assessments, system integration, and IT strategy development,tailored to meet your business needs" },
      { question: "What is Your Approach To Web Design?", answer: "Our approach focuses on creating user-friendly, visually appealing designs that reflect your brand identity while ensuring optimal user experience and responsiveness across devices." },
      { question: "Do You Develop Apps For Both Android And iOS?", answer: "Yes, we create cross-platform mobile applications tailored for both iOS and Android, ensuring a seamless experience for users on any device." },
      { question: "What Training Programs Does Future Invo Sol Offer?", answer: "We offer specialized training in digital marketing, including our Al Enhanced Digital Marketing Course, alongside training modules in web development, ERP systems, and IT product development." },
      { question: "What Digital Marketing Service Do You Provide?", answer: "Our digital marketing services include SEO, social media marketing, content marketing, and PPC advertising, all designed to enhance your online presence and drive traffic to your business. 40 mini" },
      { question: "How can I Enroll In A Training Program At Future Invo Solutions?", answer: "You can sign up through our website or contact our support team for assistance. We'll guide you through the process and answer any questions about course details or enrollment steps." },
      { question: "What Technologies Do You Use For Web Development?", answer: "We utilize a range of technologies, including HTML, CSS, JavaScript, and popular frameworks like React and Angular, to build robust, scalable, and secure websites." },
      { question: "How Is Future Invo Solutions Different From Other Coaching Centers?", answer: "At InfoZ IT Solutions, you're not just learning theory-you're training with a digital marketing agency actively working in the industry. Our courses are led by industry experts and focus on hands-on, real-world experience, including live projects and advanced Al-driven tools. Unlike other centers, we offer internships within our digital marketing course, allowing students to gain practical experience that enhances both their skills and employability in today's competitive job market." },
      { question: "Are There Any Internship Opportunities Available During The Digital Marketing Course?", answer: "Yes, students begin 3 Months internships from the fourth month of the program, allowing them to gain practical experience and apply their learning in real-world scenarios." },
      { question: "Does Future Invo Provide services remotely, on-site, or both?", answer: "We provide services both remotely and on-site, based on client needs and project requirements." }
    ];
    
  
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
  
  return (
    <div className="tt">
      <div className="faq">
        <div className="dup-from-faq">
            <h1>FAQs</h1>
            
          </div>



           {/* <div className="block7" id="sevenn">
            <h2 id="business"> What's on your mind? Just ask us!</h2><br></br>
            <div className="paras" id="parass">
              <p>What type of IT consulting services Do You Offer? <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>What is Your Approach To Web Design <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>Do You Develop Apps For Both Android And  ios <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>What Training Programs Does Future Invo Sol Offer? <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>What Digital Marketing Service Do You Provide? <FontAwesomeIcon icon={faAnglesDown}id="ic" /></p>
            <p>How can i Enroll In A Training Program At Future Invo Solutions? <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>What Technologies Do You Use For Web Development? <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p className="eight">How Is Future Invo Solutions Different From Other Coaching Centers? <FontAwesomeIcon icon={faAnglesDown} id="ic"  /></p>
            <p className="eight">Are There Any Internship Opportunities Avaliable During The Digital Marketing Course <FontAwesomeIcon icon={faAnglesDown} id="ic"  /></p>
            </div>
          </div> */}


<div className="block7" id="sevenn">
            <h2 id="business"> What's on your mind? Just ask us!</h2><br></br>
            <div className="paras">


              {faqData.map((item, index) => (
        <div key={index} className="faq-line">
          <p onClick={() => toggleFAQ(index)}>
            {item.question} <FontAwesomeIcon icon={faAnglesDown} id="ic" />
          </p>
          {openIndex === index && (
            <p className="faq-answer">{item.answer}</p>
          )}
        </div>
              ))}

              
              
            </div>
          </div>



          <div className="bgimgcopy">
            <img src={bgimg}/>
          </div>

          <div className="chooseus">
             <div className="block8" id="dup3">
            <h2 className="dup3-h2">Why Choose Us?</h2>
            <h2 className="dup3-h2" id="block8-h2-p">Your trusted partner for cutting -edge IT Solutions and digital transformation</h2>

            <div className="cards2" id="faq-cards">
              <div className="card1">
                <img src={user} id="userr-dup1"/>
                <h2>Extensive IT Expertise</h2>
                <p>Access to a team of skilled and certified professionals across technologies like  Node.js,React.js,AWS,Azure, and more</p>

              </div>
              <div className="card2">
                <img src={bag} id="bag-dup1" />
                 <h2>Flexible Engagement Models</h2>
                 <p>Contract, Hire on contact, contract-to-hire, full-time, or offshore/on-site as per your project needs</p>
              </div>
              <div className="card3">
                <img src={time} id="time-dup1" />
                <h2>Quick Turnaround</h2>
                <p>Fast onboarding and rapid project delivery to keep your business ahead</p>

              </div>
              <div className="card4">
                <img src={calculator} id="calculator-dup1" />
                <h2>Cross-Industry Experience</h2>
                <p>Proven Success across IT consulting, cloud services, digital marketing, and enterprise solutions</p>

              </div>
              <div className="card5">
                <img src={notes} id="notes-dup1" />
                <h2>SLA-Driven Delivery</h2>
                <p>Dedicated account management transparent processes,and efficient digital solutions</p>

              </div>
            </div>
          </div>
          </div>
           <div className="footerr">

            <div className="footer" id="footer-dup">
                       <div className="line1">
                        <img src={footericon}/>
                        <p>Join us to gain industry insights and hands-on experience for success in the digital world</p>
                        <div className="icn">
                           <FontAwesomeIcon icon={faFacebookF}/>
                           <FontAwesomeIcon icon={faLinkedin}  id="ic-links"/>
                           <FontAwesomeIcon icon={faInstagram} id="ic-links"/>
                        </div>
                        <div className="links">
                          <div className="links1">
                            <h3>Quick Links</h3>
                          <a href="#"> <FontAwesomeIcon icon={faAngleRight} />Future Invo IT Solutions</a>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} />Our Services</a>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} />FAQ'S</a>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} />Contact Us</a>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} />Careers</a>
                        </div>
                         <div className="links1">
                            <h3>IT Services</h3>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} /> IT Solutions</a>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} />IT Consulting</a>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} />Web Development</a>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} />App Development</a>
                          <a href="#"><FontAwesomeIcon icon={faAngleRight} />Trainings</a>
                        </div>
                         <div className="links1">
                            <h3>Contact Us</h3>
<a href="#"><FontAwesomeIcon icon={faLocationDot} />13th floor, Manjera Trinity corporate,<br></br>
Kphb phase 3, beside lulu mall,<br></br>Hyderabad</a>                          <a href="#"><FontAwesomeIcon icon={faEnvelope} />info@futureinvo.com</a>
                          <a href="#"><FontAwesomeIcon icon={faPhone} />91+ 7981107131</a>
                        
                        </div>
                        </div>
          
                        
                       </div>
                       
                    </div>

           </div>
           <div className="lastt">
             <div className="last-line" id="dup-last">
            <i>All Copyright 2025 by Futureinvo IT Solutions</i>
            <i id="ii">Terms & Conditions</i>
            <i>Privacy Policy</i>
          </div>
        
           </div>
          
      
    </div>
    
    
    </div>

  )
}
