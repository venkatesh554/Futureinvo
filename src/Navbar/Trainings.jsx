import React,{useState} from 'react'
import "./Training.css"
import one from "./trainingImages/Training-one.png"
import two from "./trainingImages/Training-two.png"
import three from "./trainingImages/Training-three.png"
import four from "./trainingImages/Training-four.png"

import first from "./Training-box-images/firstt.png";
import second from "./Training-box-images/secondd.png"
import third from "./Training-box-images/third.png"
import fourth from "./Training-box-images/fourth.png"
import fifth from "./Training-box-images/fifth.png";
import sixth from "./Training-box-images/sixth.png";
import seventh from "./Training-box-images/seventh.png";
import eighth from "./Training-box-images/eighth.png";
import nineth from "./Training-box-images/nineth.png";

import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

import footericon from "../Navbar/navbar-images/icon.png"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";


import placementone from "./placement-support-images/placement-one.png";
import placementtwo from "./placement-support-images/placement-two.png";
import placementthree from "./placement-support-images/placement-three.png"
import placementfour from "./placement-support-images/placement-four.png";
import placementfive from "./placement-support-images/placement-five.png";
import placementsix from "./placement-support-images/placement-six.jpg"
import bgimg from "./navbar-images/bgimg.png"

export default function Trainings() {

  
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      mobile: "",
      city: "",
      occupation: "",
      message: "",
    });
    
  
    // 2️⃣ Handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    // 3️⃣ Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Check for empty fields
      if (
        !formData.name ||
        !formData.email ||
        !formData.mobile ||
        !formData.city ||
        !formData.occupation ||
        !formData.message
      ) {
        alert("⚠️ Please fill in all fields before submitting!");
        return;
      }
  
      // Store in localStorage
      localStorage.setItem("contactFormData", JSON.stringify(formData));
      alert("✅ Your data has been saved successfully!");
  
      // Reset the form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        city: "",
        occupation: "",
        message: "",
      });
    };
  return (
    <div className="tt">

   
    <div className="driving-innovation-parent">
        <div className="driving-innovation-child">
            <h1>AI Enhanced Digital<br></br>Marketing Course</h1>
            <p>Our AI Enhanced Digital Marketing Course trains you to use advanced AI tools and insights to improve your digital marketing
              strategies. Learn to connect more personally with your audience through smarter targeting,automate essential tasks to
              increase efficiency, and analyze campaign performance with AI for real-time improvements.This course guides you in making
              data-driven decisions with predictive analytics and crafting content that resonates with your audience .Step into the future
              of digital marketing , AI-powered campaigns that stand out in today's competitive market.
            </p>
        </div> 
        <div className="bgimg">
          <img src={bgimg} />
        </div>
        
       <div className="bgcolor1">
         <div className="digital-change">
          <h1>Be the Digital Change Maker@ 6 Months!</h1>
          <p>Ready to conquer the world of digital marketing! our best digital marketing course in Hyderabad is a comprehensive journey designed to equip you with
            advanced skills that set you part in this competitive field. Over 6 months of in depth training,you will explore cutting-edge digital marketing
            techniques while gaining expert insights from industry leaders.Following this, a 3-months internship allows you to apply your learning in real-world 
            settings, ensuring you are job-ready. Whether you are a student or a working professional, this program provides the ultimate blend of theoretical mastery and 
            practical experience for a successful career 
          </p>
          <button id="">Know More</button>
        </div>
         <div className="component2">
           <img src={one} id="t-one"/>
             <img src={two} id="t-two"/>

       </div>
       </div>
       
       
      <div className="bgcolor2">
        

     <div className="component3">
     <div className="circle">
       <h2 id="circle1">06 Months Course</h2>
     </div>
        <h2 id="digi">Digital</h2>    
        <img src={three} id="component3-img1" />
       <h2 id="mark">Marketer</h2> 
       <div className="bgg"></div>
           <h2 id="course-high">Course Highlights</h2>
       <div className="right-boxx">
       
        <div className="squre1">
          <img src={first}/>
          <p>Learn with Best IT Company</p>
        </div>
        <div className="squre1">
           <img src={second} id="second" />
          <p>3 Months Internship Certification</p>
        </div>
        <div className="squre1">
           <img src={third} id="third" />
          <p>100% Practical Oriented Training</p>
        </div>
        <div className="squre1">
           <img src={fourth}id="fourth" />
          <p>Website with your name valid for one year</p>
        </div>
        <div className="squre1">
           <img src={fifth} id="fifth"/>
          <p>Case Study Based Assessments</p>
        </div>
        <div className="squre1">
           <img src={sixth} id="sixth" />
          <p>5 Exclusive job interview</p>
        </div>
        <div className="squre1">
           <img src={seventh}id="seventh" />
          <p>Module level certification</p>
        </div>
        <div className="squre1">
           <img src={eighth} id="eighth" />
          <p>Assistance in Google & Meta Certification</p>
        </div>
         <div className="squre1">
           <img src={nineth}id="nineth" />
          <p>23 Advanced Tools</p>
        </div>
       </div>
     </div>
      </div>


           <div className="curriculum">
            <h2>What Our Innovative Curriculum Covers?</h2>
            <h3>What You Learn is What You Get!</h3>
           </div>
        <div className="curriculum-boxes">
         <div className="div1">
          <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Introduction to Marketing</h2>
          <p>Explore the core principles of traditional marketing and their relevance
             in today's digital landscape. Learn how to identify target markets and create value for customers.</p>
         </div>
          <div className="div1">
            <FontAwesomeIcon icon={faVolumeHigh} id="volume" />

           <h2>Introduction to Digital Marketing</h2>
          <p>Get an overview of digital marketing fundamentals,including online platforms and channels. Learn how to develop
            strategies that drive brand visibility and engagement
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Website Overview</h2>
          <p>Understand the key elements of building a website , from design to functionality. Learn how website 
            performance impacts user experience and conversions.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Search Marketing</h2>
          <p>Discover the role paid and organic search in driving traffic to websites. Learn strategies to optimize
             for serach engines and increase online visibility.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Keyword Research</h2>
          <p>Master the art of finding relevant keywords to optimize your content.
            Learn how to conduct keyword research to improve your SEO and PPC campaigns.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>On Page SEO</h2>
          <p>Learn the importance of optimizing on page elements like content,headings,and meta tags. Discover best practices to improve 
            search engine rankings.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Off Page SEO</h2>
          <p>Explore how to build authority through off-page tactics like link building and social signals. Learn stratagies to improve your site's 
            reputation and search performance
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Socaial Advertising</h2>
          <p>Dive into the world of paid social advertising on platforms like facebook and instagram. Learn to optimize add compaigns for maximum reach and engagement</p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Technical SEO</h2>
          <p>Understand how to optimize website architecture .speed ,and indexing for search engines .Learn how to resolve common technical SEO issues that can impact rankings

          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Local SEO</h2>
          <p>Learn to optimize your website for local search results to target customers nearby.
            Discover tools and techniques like Google My Business for local visibility
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Social Media Planning and Implementation</h2>
          <p>Create effective social media strategies tailored to your brand's goals. Learn to plan, create, and implement social content that 
            resonates with your audience.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>LinkedIn Ads and Optimization</h2>
          <p>Learn to target professionals using LinkedIn Ads to generate quality leads.
            Explore optimization techniques to increase ad performance and ROI.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Twitter and Quora Marketing</h2>
          <p>Discover how to leverage Twitter and Quora to drive traffic and enagage with audiences.Learn strategies 
            to create meaningful interactions on these platforms.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Google Ads</h2>
          <p>Master the skills to create ,manage ,and optimize Google Ads campaigns.Learn about bidding strategies ,targetting, and conversion tracking.</p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Bing Ads and Taboola Marketing</h2>
          <p>Explore Bing Ads and Tabools as alternative platforms for paid advertising.Learn to set up campaigns and drive traffic with these underused networks.</p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Google Analytics and Tag Manager</h2>
          <p>Learn to track and analyze website performance using Google Analytics.
            Discover how to use Google Tag Manager to manage tags and implement event tracking.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Email Marketing: An Introduction</h2>
          <p>Explore the basics of email marketing,from campaign setup to audience segmentation.Learn how to create emails that engage and convert leads.</p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Lead Automation</h2>
          <p>Learn to automate your lead generation and nurturing processses to save time and increase conversions. Explore tools and strategies for effective lead management</p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Marketing Strategy and Analysis</h2>
          <p>Understanding how to create a winning marketing strategy and analyze campaign results. Learn to assess key metrics and optimize your approach based on data insights.</p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>WhatsApp Marketing</h2>
          <p>Discover how to use WhatsApp as a direct communication tool to engage customers. Learn techniques for personalized messaging and automated responses</p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Resume Building and Portfolio Creation</h2>
          <p>Learn how to create a professional resume and portfolio that showcases your skills. Understand the importance of building a strong online presence for job opportunities</p>
         </div>
        </div>
       
      <div className="bgcolor3">
         <div className="component4">
        <h2>Placement Support</h2>
        <p>Get assured job oppotunities from top companies with our pre-placement training program</p>

        <div className="inside-component">
                 <div className="div2">
                    <img src={placementone} id="career"/>
                         <p>Career Guidance</p>
                </div>
               <div className="div2">
                      <img src={placementtwo} id="guest"/>
                           <p>Guest Lectures</p>
                 </div>
                <div className="div2">
                      <img src={placementthree} id="resume"/>
                             <p>Resume Building</p>
                 </div>
                 <div className="div2">
                         <img src={placementfour} id="mock"/>
                             <p>Mock Interviews</p>
                  </div>
                 <div className="div2">
                      <img src={placementfive}/>
                            <p>Job Ready Skill <br></br>Training</p>
                   </div>
                 <div className="div2">
                         <img src={placementsix}/>
                     <p>Trained By a Digital<br></br> Marketing Agency</p>
                   </div>
            </div>
                   <div className="bgg" id="bgg2"></div>

       </div>
      </div>

       <div className="right-side-component">
        <div className="p"></div>
        <img src={four}/>
       </div>


      <div className="bgcolor4">
         <div className="get-started">
        <h2>Get Started</h2>
        <div className="left-side-para">
          <p>Ready to elevate your digital marketing skills? Get in touch with us today! Fill out them form to access our detailed course
            package, including pricing, curriculum, and flexible learning options. Whether you're looking to kickstart your career or 
            advance your current skill set, out expert team is here to guide you every step of the way.

          </p>
          <ul>
            <li>
              Flexible Learning Schedules
            </li>
            <li>
              Personalized Career Guidance
            </li>
            <li>
              Lifetime loan Access to Course Materials
            </li>
           
          </ul>
          <div className="down-para">
            <h2>Don't Miss Out</h2>
          <p>
            Take the first step towards your digital marketing journey now! join thousands of students and successful working professionals 
            who have transformed their careers with our best digital marketing Program in Hyderabad. With live projects, case studies blended
            learning program , expert guidance, and flexible learning schedules we ensure you stay ahead in the fast-evolving world of digital
            marketing.

          </p>
          </div>
        </div>
       </div>
       
       <div className="rightside-form" id="training-form">
                      <h2 id="apply">Apply For Upcomming batches</h2>
                     
                      <form onSubmit={handleSubmit}>
    <label>
      Your Name <span id="star">*</span>:
    </label>
    <br />
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange} 
    />
    <br />

    <label>
      Email Address <span id="star">*</span>:
    </label>
    <br />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
    />
    <br />

    <label>
      Mobile Number <span id="star">*</span>:
    </label>
    <br />
    <input
      type="number"
      name="mobile"
      value={formData.mobile}
      onChange={handleChange}
    />
    <br />

    <label>
      City <span id="star">*</span>:
    </label>
    <br />
    <input
      type="text"
      name="city"
      value={formData.city}
      onChange={handleChange}
    />
    <br />

    <label>
      Occupation <span id="star">*</span>:
    </label>
    <br />
    <input
      type="text"
      name="occupation"
      value={formData.occupation}
      onChange={handleChange}
    />
    <br />

    <label>
      Message <span id="star">*</span>:
    </label>
    <br />
    <input
      type="text"
      id="comments-box"
      name="message"
      value={formData.message}
      onChange={handleChange}
    />
    <br />
                      
        <button id="onsubmit" >Submit</button>
       
                      </form>
                       
                      
                   </div>
      </div>


                  <div className="training-footer">
                     <div className="footerr" id="footer-contact">
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
Kphb phase 3, beside lulu mall,<br></br>Hyderabad</a>                                             <a href="#"><FontAwesomeIcon icon={faEnvelope} />info@futureinvo.com</a>
                                             <a href="#"><FontAwesomeIcon icon={faPhone} />91+ 7981107131</a>
                                           
                                           </div>
                                           </div>
                             
                                           
                                          </div>
                                          
                                       </div>
                   
                              </div>
                              <div className="lastt" id="last-contact">
                                <div className="last-line" id="dup-last">
                               <i>All Copyright 2025 by Futureinvo IT Solutions</i>
                               <i id="ii">Terms & Conditions</i>
                               <i>Privacy Policy</i>
                             </div>
                           
                              </div>  
                  </div>
    </div>
     </div>
  )
}
