import React, { useRef,useState } from "react";
import "./cssfiles/Home.css"
import img1 from "../firstpage-images/img1.png"
import img2 from "../firstpage-images/img2.png"

import img3 from "../block1-images/img3.jpg"
import img4 from "../block1-images/img4.jpeg"
import img5 from "../block1-images/img5.png";
import img6 from "../block1-images/img6.png"


import it from "../saervice-images/it.png"
import digital from "../saervice-images/digital.png"
import web from "../saervice-images/web.png"
import app from "../saervice-images/app.png"
import develop from "../saervice-images/develop.png"

import friends from "../saervice-images/friends.jpg";
import man from "../saervice-images/man.png";
import footericon from "../Navbar/navbar-images/icon.png"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";


import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import user from "./why-choose/user.png"
import bag from "./why-choose/bag.png";
import time from "./why-choose/time.png";
import calculator from "./why-choose/calculator.png";
import notes from "./why-choose/notes.png"

export default function Home() {
       const testimonialRef = useRef(null);

       const handleScrollRight = () => {
         if (testimonialRef.current) {
           const boxWidth = 410;  
           testimonialRef.current.scrollBy({
             left: boxWidth,
             behavior: "smooth",
           });
         }
       };

       const handleScrollLeft = () => {
         if (testimonialRef.current) {
           const boxWidth = 410;
           testimonialRef.current.scrollBy({
             left: -boxWidth,
             behavior: "smooth",
           });
         }
       };




       const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && value.length > 10) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("⚠️ Please fill in all fields before submitting!");
      return;
    }

    if (formData.phone.length !== 10) {
      alert("⚠️ Phone number must be exactly 10 digits!");
      return;
    }

    localStorage.setItem("contactFormData", JSON.stringify(formData));
    alert("✅ Your data has been saved successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };








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
    <div className="parent">
      <div className="child">
<p id="p1">
  <button id="b1" class="toggle-btn"></button>
  BEST IT SOLUTION PROVIDER
</p>
           <h1>Futureinvo IT Solutions - Shaping Your<br></br>Digital Future with AI & IT Excellence</h1>
           <p id="p2">At Futureinvo Solutions, we empower businesses to grow and succeed in the digital world through smart, Al-driven IT solutions. Whether it's building intelligent websites, designing stunning user interfaces, creating powerful mobile apps or delivering impactful digital marketing and training—we do it all with innovation at the core. 
              Our mission is to turn your ideas into real, results-driven digital experiences.</p>
            <p id="p2" >We help future-proof your business and drive meaningful transformation. With a team of experienced professionals, 
                we're here to guide your journey every step of the way-making your digital goals not just possible, but unstoppable
          </p>
          <Link
  to="/"
  onClick={() => window.location.reload()}
>
  <button>
    Explore More <FontAwesomeIcon icon={faArrowRight} id="iicon" />
  </button>
</Link>

      </div>


      <div className="right-content">
         <img src={img2} id="img2"/>
        <img src={img1} id="img2-1"/>
      </div>

      <div className="words-slider">
           <div className="slider">
             <h2>Digital Marketing *</h2>
             <h2>Web Development *</h2>
             <h2>App Development *</h2>
             <h2>Trainings *</h2>
             <h2>Application Development *</h2>
   
              <h2>Digital Marketing *</h2>
              <h2>Web Development *</h2>
              <h2>App Development *</h2>
              <h2>Trainings *</h2>
              <h2>Application Development *</h2>
           </div>
      </div>     

           <div className="block1">
                <div className="content-leftt1">
                    <img src={img3}/>
                    <img src={img4} id="img4"/>
                 </div>

                <div className="content-rightt1">
                      <h2 id="h21">ABOUT US</h2>
                       <h2 id="h22">Empowering Business Growth<br></br>Through Innovative <span>Technology</span></h2>
                          <p id="ss">Futureinvo IT Solutions is an IT company based in Hyderabad, specializing in web
                            development, Web design, mobile application development, digital marketing services
                            and trainings. As a subsidiary of knowledge,we are commited to delivering
                            innovative and effective digital solutions tailored to meet the needs of our clients.Our 
                            team of experts is dedicated to helping businesses succeed in the digital landscape
                            through high quality services and personalized support.</p>
                     <div className="right-subs">
                             <div className="right-sub1">
                                 <img src={img5}/>
                                   <p id="heads">Vision</p>
                                  <p>Innovating Features<br></br>Through Technology</p>
                              </div>

                              <div className="right-sub2">
                                  <img src={img6}/>
                                  <p id="heads">Mission</p>
                                  <p>Empowering with<br></br>Digital Solutions</p>
                               </div>
                       </div>
                 </div>
 
             </div>


       <div className="block2">
            <i id="i1"></i>
            <h2 >Brand Trust Us</h2>
            <i id="i2"></i>
            <div className="names-scroll">
              <em>Swgruha sweets</em>
              <em>Branic</em>
              <em>Aravind Realotrs</em>
              <em>Akshaya chits</em>
              <em>Flexi works</em>
              <em>Navajyothi</em>
              <em>And many more</em>

              <em>Swgruha sweets</em>
              <em>Branic</em>
              <em>Aravind Realotrs</em>
              <em>Akshaya chits</em>
              <em>Flexi works</em>
              <em>Navajyothi</em>
              <em>And many more</em>
            </div>
         </div>
         <div className="block3">
          <h2 id="h2"><span>IT Services & Solutions</span></h2>
            <h2 id="h22">Our Services</h2>
                         
            <div className="block5">
                  <div className="box-18">
                    <img src={it}/>
                          <h3>IT Consulting</h3>
                            <p className="p00">Our IT Consultancy Offers Expert .tailored solutions to stratagically optimize your technology and drive businesss success</p>

                          <Link to="/ItConsulting"><button> View More <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                  </div>
                  <div className="box-19">
                    <img src={develop}/>
                     <h3>Web Development</h3>
                      <p className="p00">We build robust, scalable websites to your business needs ensuring a seamless and engaging user experience</p>


                 <Link to="/WebDevelopmentService">     <button>View More <FontAwesomeIcon icon={faArrowRight} /></button>
</Link>     
             </div>
                  <div className="box-20">
                    <img src={web}/>
                    <h3>Web Design</h3>
                          <p className="p00">Our Visually appeaing and user friendly designs capitative your audience enhancing overall engagement and satisfaction</p>

<Link to="/WebDesign">                      <button>View More <FontAwesomeIcon icon={faArrowRight} /></button>
</Link>                  </div>
                  <div className="box-21">
                    <img src={app}/>
                     <h3>App Development</h3>
                       <p className="p00">We develop Innovative mobile apps focused on delivering exceptional user experiences aligned with your business goals</p>
                       <Link to="/MobileApplications">                      <button>View More <FontAwesomeIcon icon={faArrowRight} /></button>
</Link>
                  </div> 
                   <div className="box-22">
                    <img src={digital}/>
                     <h3>Digital Marketing Service</h3>
                      <p className="p00">Our Digital Marketing Stratagies boost your online presence and connect you with your target audience effectively</p>
                      <Link to="/DigitalMarket">                      <button>View More <FontAwesomeIcon icon={faArrowRight} /></button>

                      </Link>

                               </div> 
                   <div className="box-23">
                     <h3>For More <br></br>Services</h3>
                     <Link to="/OurServicesPage">                      <button>Click Here <FontAwesomeIcon icon={faArrowRight} /></button>
</Link>
                  </div> 
                    
                </div>
          </div>

           <div className="block8">
            <h2>Why Choose Us?</h2>
            <h2 id="block8-h2-p">Your trusted partner for cutting -edge IT Solutions and digital transformation</h2>

            <div className="cards2">
              <div className="card1">
                <img src={user} id="userr"/>
                <h2>Extensive IT Expertise</h2>
                <p>Access to a team of skilled and certified professionals across technologies like  Node.js,React.js,AWS,Azure, and more</p>

              </div>
              <div className="card2">
                <img src={bag} id="bag" />
                 <h2>Flexible Engagement Models</h2>
                 <p>Contract, Hire on contact, contract-to-hire, full-time, or offshore/on-site as per your project needs</p>
              </div>
              <div className="card3">
                <img src={time} id="time" />
                <h2>Quick Turnaround</h2>
                <p>Fast onboarding and rapid project delivery to keep your business ahead</p>

              </div>
              <div className="card4">
                <img src={calculator} id="calculator" />
                <h2>Cross-Industry Experience</h2>
                <p>Proven Success across IT consulting, cloud services, digital marketing, and enterprise solutions</p>

              </div>
              <div className="card5">
                <img src={notes} id="notes" />
                <h2>SLA-Driven Delivery</h2>
                <p>Dedicated account management transparent processes,and efficient digital solutions</p>

              </div>
            </div>
          </div>




          {/* <div className="block6">
            <div className="bg1">
                <h3 id="testinomial">Testimonials</h3>
                <h2>What's Clients Say</h2>
                <p>Future Invo IT Solutions Transformed our digital presence. their team understood our needs and delivered beyond expectations. Truely professional and reliable.</p>
                <h3 id="name">Rajesh Kumar</h3>
                <p id="founder">Founder, TechWave Solutions</p>
            </div>
            <div className="bg1">
               <h3 id="testinomial">Testimonials</h3>
                <h2>What's Clients Say</h2>
                <p>Working with Future Invo was a game-changer. their solutions increased our operational efficiency and boosted customer engagement significantly.</p>
                <h3 id="name">Sneha Reddy</h3>
                <p id="founder">CEO, GreenLeaf Enterprises</p>

            </div>
             <div className="bg1">
               <h3 id="testinomial">Testimonials</h3>
                <h2>What's Clients Say</h2>
                <p>Working with Future Invo was a game-changer. their solutions increased our operational efficiency and boosted customer engagement significantly.</p>
                <h3 id="name">Sneha Reddy</h3>
                <p id="founder">CEO, GreenLeaf Enterprises</p>

            </div>
             <div className="bg1">
               <h3 id="testinomial">Testimonials</h3>
                <h2>What's Clients Say</h2>
                <p>Working with Future Invo was a game-changer. their solutions increased our operational efficiency and boosted customer engagement significantly.</p>
                <h3 id="name">Sneha Reddy</h3>
                <p id="founder">CEO, GreenLeaf Enterprises</p>

            </div>
          </div> */}
                        <h2 id="testi">What's Clients Say</h2>


         <div className="block6" ref={testimonialRef} > 

  <div className="bg1">
    <p>"Future Invo IT Solutions Transformed our digital presence. their team understood our needs and delivered beyond expectations. Truely professional and reliable".</p>
    <h3 id="name">Rajesh Kumar</h3>
    <p id="founder">Founder, TechWave Solutions</p>
  </div>
  
  <div className="bg1">
    <p>"Working with Future Invo was a game-changer. their solutions increased our operational efficiency and boosted customer engagement significantly".</p>
    <h3 id="name">Sneha Reddy</h3>
    <p id="founder">CEO, GreenLeaf Enterprises</p>
  </div>

  <div className="bg1">
    <p>"From website development to digital marketing,Future Invo provided to end-to-end solutions.Their team is knowledgeable, friendly, and highly responsive".</p>
    <h3 id="name">Priya menon</h3>
    <p id="founder">Owner,Bloom Botique</p>
  </div>

  <div className="bg1">
    <p>"The team at Future Invo exceeded our expectations. Their strategy consulting and IT solutions helped us streamline our processes efficiently".</p>
    <h3 id="name">Vikram Singh</h3>
    <p id="founder">Co-Founder, Quantum Tech Labs</p>
  </div>

   <div className="bg1">
    <p>"Future Invo's approach is both innovative and practical. Their creative solutions have given our brand a modern and professional look".</p>
    <h3 id="name">Anjali Kapoor</h3>
    <p id="founder">Founder, StyleHive</p>
  </div>
  <div className="bg1">
    <p>"We were struggling with outdated systems, and Future Invo IT Solutions provided modern and scalable solutions that improved our workflow drastically".</p>
    <h3 id="name">Rohan Metha</h3>
    <p id="founder">CEO, UrbanEdge Reality</p>
  </div>
  <div className="bg1">
    <p>"exceptional service and results ! Future Invo's Team is always avaliable to support and guide us.Highly recommended for small and growing business".</p>
    <h3 id="name">Divya lyer</h3>
    <p id="founder">Owner HealthBites Cafe</p>
  </div>
  <div className="bg1">
    <p>"Future Invo's expertise in technology modernization helped our firm adopt the latest tools seamlessly. Their Professionalism is unmatched ".</p>
    <h3 id="name">Karan Varma</h3>
    <p id="founder">Managing Partner , Apex Consultancies</p>
  </div>
  <div className="bg1">
    <p>"Thanks to Future Invo, our online presence is stronger than ever.Their team delivered creative solutions and tailored to our educational platform ".</p>
    <h3 id="name">Shreya Nair</h3>
    <p id="founder">Founder , EduSmart Academy</p>
  </div>
 


   


</div>
      <div className="cards-arrows">
         <button onClick={handleScrollLeft}  style={{ position: 'absolute', left: "80%", top: '403%' ,padding:"15px 20px",borderRadius:"50%",backgroundColor:"rgb(54, 127, 192)",color:"#ffffff",textAlign:"center"}}><FontAwesomeIcon icon={faArrowLeft} /></button>
       <button onClick={handleScrollRight}    style={{ position: 'absolute', right: "10%", top: '403%',padding:"15px 20px",borderRadius:"50%",backgroundColor:"rgb(54, 127, 192)",color:"#ffffff",textAlign:"center",textAlign:"center" }}><FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
       


            <div className="block9">
            <h2>Talk To Our Experts</h2>
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input 
              type="text"
               name="name"
          value={formData.name}
          onChange={handleChange}></input>
              <label>Phone:</label>
              <input 
              type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          maxLength="10"
          pattern="[0-9]{10}"></input>
              <label>Email:</label>
              <input type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}></input>
              <button id="submitt">Submit</button>
             </form>
            <img src={man}/>
             
          </div>


          <div className="block7">
            <h2 id="keep">Keep Your FAQ</h2>
            <h2 id="business"> Keep Your Business Safe & <br></br>Ensure High Avaliability</h2><br></br>
            <div className="paras">


{/* 
             <p>What type of IT consulting services Do You Offer? <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>              
            <p>What is Your Approach To Web Design <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>Do You Develop Apps For Both Android And  ios <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>What Training Programs Does Future Invo Sol Offer? <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>What Digital Marketing Service Do You Provide? <FontAwesomeIcon icon={faAnglesDown}id="ic" /></p>
            <p>How can i Enroll In A Training Program At Future Invo Solutions? <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p>What Technologies Do You Use For Web Development? <FontAwesomeIcon icon={faAnglesDown} id="ic" /></p>
            <p className="eight">How Is Future Invo Solutions Different From Other Coaching Centers? <FontAwesomeIcon icon={faAnglesDown} id="ic"  /></p>
            <p className="eight">Are There Any Internship Opportunities Avaliable During The Digital Marketing Course <FontAwesomeIcon icon={faAnglesDown} id="ic"  /></p>
             <p className="eight">Does Future Invo Provides services remotely, on-site,or both? <FontAwesomeIcon icon={faAnglesDown} id="ic"  /></p> */}

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

          <div className="footer">
             <div className="line1">
              <img src={footericon} />
              <p>Join us to gain industry insights and hands-on experience for success in the digital world</p>
              <div className="icn">
                 <a href="https://www.facebook.com/people/Future-Invo-Solutions/61580202340169/?rdid=LstbBpV1YxqmLsX3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19agqq2zMh%2F" ><FontAwesomeIcon icon={faFacebookF}/></a>
                <a href="https://www.linkedin.com/company/future-invo-solutions/posts/?feedView=all
                "> <FontAwesomeIcon icon={faLinkedin}  id="ic-links"/></a>
                <a href="https://www.instagram.com/futureinvosolutions/?igsh=YmZ6anF1dmQ3aDhr#"><FontAwesomeIcon icon={faInstagram} id="ic-links"/></a>
               </div>
              <div className="links">
                <div className="links1">
                  <h3>Quick Links</h3>
                <Link to="/"> <FontAwesomeIcon icon={faAngleRight} />Future Invo IT Solutions</Link>
                <Link to="/OurServicesPage"><FontAwesomeIcon icon={faAngleRight} />Our Services</Link>
                <Link to="/About"><FontAwesomeIcon icon={faAngleRight} />FAQ'S</Link>
                <Link to="/Contact"><FontAwesomeIcon icon={faAngleRight} />Contact Us</Link>
                <Link><FontAwesomeIcon icon={faAngleRight} />Careers</Link>
              </div>
               <div className="links1">
                  <h3>IT Services</h3>
                <Link to="/ItConsulting"><FontAwesomeIcon icon={faAngleRight} /> IT Solutions</Link>
                <Link to="/ItConsulting"><FontAwesomeIcon icon={faAngleRight} />IT Consulting</Link>
                <Link to="/WebDevelopment"><FontAwesomeIcon icon={faAngleRight} />Web Development</Link>
                <Link to="/MobileApplications"><FontAwesomeIcon icon={faAngleRight} />App Development</Link>
                <Link to="/Trainings"><FontAwesomeIcon icon={faAngleRight} />Trainings</Link>
              </div>
               <div className="links1">
                  <h3 id="contact-address">Contact Us</h3>
                <Link><FontAwesomeIcon icon={faLocationDot} />13th floor, Manjera Trinity corporate,<br></br>
                         Kphb phase 3, beside LULU mall,<br></br>Hyderabad</Link>
                <Link><FontAwesomeIcon icon={faEnvelope} />info@futureinvo.com</Link>
                < Link><FontAwesomeIcon icon={faPhone} />91+ 7981107131</Link>
              
              </div>
              </div>
              
             </div>
             
          </div>
          <div className="last-line">
            <i>All Copyright 2025 by Futureinvo IT Solutions</i>
            <i id="ii">Terms & Conditions</i>
            <i>Privacy Policy</i>
          </div>
      
          
</div>

  )
}
