import React,{useState} from 'react'
import "./Training.css"
import one from "./trainingImages/Training-one.png"
import two from "./trainingImages/datascienceone.png"
import three from "./trainingImages/datasciencetwo.png"
import four from "./trainingImages/datasciencethree.png"
import { Link } from "react-router-dom";


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


export default function Datascience() {


  
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
            <h1>AI Enhanced Data<br></br>Science Course</h1>
            <p>Our AI Enhanced Datascience Course trains you to harness advanced AI tools and techniques to unlock the full potential of data. Learn how to collect,
                clean, and process data efficiently,apply predictive analytics for smarter forecasting, and uncover hidden patterns that drive innovation.Automate repetitive workflows
                to boost productivity, and master real-time analysis for faster decision-making. This course empowers you to turn complex data into actionable insights, preparing you to 
                solve real-world problems with AI-driven precision. step into the future of data science , Where intelligence meets innovation to shape tomorrow's solutions.
            </p>
        </div>
          <div className="bgimg">
                  <img src={bgimg} />
                </div>
       <div className="bgcolor1">
         <div className="digital-change">
          <h1>Be the Data Change Maker@ 6 Months!</h1>
          <p>Ready to conquer the world of Data Science! our best Data Science course in Hyderabad is a comprehensive journey designed to equip you with
            advanced skills that set you part in this competitive field. Over 6 months of in depth training,you will explore cutting-edge Data Science
            techniques while gaining expert insights from industry leaders.Following this, a 3-months internship allows you to apply your learning in real-world 
            settings, ensuring you are job-ready. Whether you are a student or a working professional, this program provides the ultimate blend of theoretical mastery and 
            practical experience for a successful career 
          </p>
        </div>
       
       <div className="component2">
           <img src={one} id="t-one"/>
             <img src={two} id="t-two"/>
       </div>
       </div>

    <div className="bgcolor2">
       <div className="component3" >
     <div className="circle" >
       <h2 id="circle1">06 Months Course</h2>
     </div>
        <h2 id="digi">Data</h2>    
        <img src={three} id="img-ds" />
       <h2 id="mark">Analyst</h2> 
       <div className="bgg"></div>
           <h2 id="course-high" >Course Highlights</h2>
       <div className="right-boxx" id="c-3" >
       
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
          <p>23 Advanced Tools </p>
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
           <h2>Foundations of Data Science</h2>
          <p>Learn how to create a professional data science resume and portfolio that highlightsyour projects and skills.
            Understand the importance of building a strong online presence to attract job opportunities in the data science field.
          </p>
         </div>
          <div className="div1">
            <FontAwesomeIcon icon={faVolumeHigh} id="volume" />

           <h2>Introduction to Data Science</h2>
          <p>Get an overview of data science fundamentals, including data collection, analysis and visualization.Learn how to develop models and insights 
            that drive smarter , data-driven decisions.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Website Overview</h2>
          <p>Understand the key elements of data analysis,from data cleaning to modeling. Learn how data quality and insights impact business decisions and outcomes
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Search Marketing</h2>
          <p>Discover the role of data in driving business insights . Learn strategies to collect,analyze,and visualize data to uncover patterns and improve decision making
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Data Exploration</h2>
          <p>Master the art of exploring and analyzing data to uncover valuable insights.
            Learn how to examine datasets, identify key features , and prepare data for modeling and decision making.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Data Cleaning</h2>
          <p>Learn the importance of optimizing datasets through cleaning , preprocessing, and feature engineering.
             Discover best practices to improve the accuracy and efficiency of your data models.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Data Integration</h2>
          <p>Explore how to enhance your analysis by integrating external datasets and enriching your data. Learn strategies to 
            improve the quality , reliability , and insights of your data models.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Social Insights</h2>
          <p>Dive into the world of social data analysis on platform like Twitter, Facebook, and Instagram. Learn 
            to extra insights ,track trends, and make data-driven decisions for maximum impact
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Data Engineering</h2>
          <p>Understand how to optimize website architecture, speed 
            and indexing for search engines. Learn how to resolve common technical SEO issues that can impact rankings.

          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Local Data Analysis</h2>
          <p>Learn to optimize your website for local search results to target customers nearby.
            Discover tools and techniques like Google My Business for local visibility.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Data Pipeline Planning</h2>
          <p>Create effective social media strategies Tailored to your brand's goals. Learn to plan, create, and implement social
            content that resonates with your audience.
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
           <h2>Data Campaigns</h2>
          <p>Master the skills to create ,manage ,and optimize predictive models .Learn about feature selection, model training, and performance evaluation for
            accurate data-driven decisions.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Alternative Data Analysis</h2>
          <p>Explore alternative and third-party datasets for data analysis. Learn to
            collect,Ingrate, and analyze these sources to uncover unique insights and improve decision-making.</p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Data Tracking and Analysis  </h2>
          <p> Learn to track and analyze datasets using advanced analytics tools.
            Discover how to manage data pipelines and implement tracking for accurate, actionable insights.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Data Science: An Introduction</h2>
          <p>Explore the basics of email marketing,from campaign setup to audience segmentation.Learn how to create emails that engage and convert leads.</p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Data Automation</h2>
          <p>Learn to automate data collection, cleaning, and processing to save time and improve efficiency. Explore toolsand strategies for effective data workflow management
            and analysis.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Data Strategy and Analysis </h2>
          <p>Understand how to create an effective data strategy and analyze project results.
            Learn to assess key metrics and optimize your approach based on actionable data insights.
          </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>messaging Data Analysis</h2>
          <p>Discover how to analyze messaging data from platforms like WhatsApp to extra insights. learn techniques for identifying patterns, understanding user 
            behavior , and automating data-driven responses. </p>
         </div>
          <div className="div1">
              <FontAwesomeIcon icon={faVolumeHigh} id="volume" />
           <h2>Data Science Portfolio Creation</h2>
          <p>Learn to automate data collection,cleaning, and preprocessing to save time and improve efficiency. explore tools and strategies for effective data 
            workflow management and analysis.
          </p>
         </div>
        </div>
     
       
      <div className="bgcolor3-ds"> <div className="component4">
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
        <div className="p" ></div>
        <img src={four} id="right-four"/>
       </div>
      
       
      <div className="bgcolor4">
         <div className="get-started">
        <h2>Get Started</h2>
        <div className="left-side-para">
          <p>Ready to elevate your DataScience skills? Get in touch with us today! Fill out them form to access our detailed course
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
            Take the first step towards your DataScience journey now! join thousands of students and successful working professionals 
            who have transformed their careers with our best DataScience Program in Hyderabad. With live projects, case studies blended
            learning program , expert guidance, and flexible learning schedules we ensure you stay ahead in the fast-evolving world of DataScience.

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
                                                                                  <a href="https://www.facebook.com/people/Future-Invo-Solutions/61580202340169/?rdid=LstbBpV1YxqmLsX3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19agqq2zMh%2F#" ><FontAwesomeIcon icon={faFacebookF}/></a>
                                                                                 <a href="https://www.linkedin.com/in/futureinvosolutions/?originalSubdomain=in#"> <FontAwesomeIcon icon={faLinkedin}  id="ic-links"/></a>
                                                                                 <a href="https://www.instagram.com/futureinvosolutions/?igsh=YmZ6anF1dmQ3aDhr#"><FontAwesomeIcon icon={faInstagram} id="ic-links"/></a>
                                                                                </div>
                                            <div className="links">
                <div className="links1">
                  <h3>Quick Links</h3>
<Link to="/">                <FontAwesomeIcon icon={faAngleRight} />Future Invo IT Solutions

</Link>    
         <Link to="/ItConsulting">  <FontAwesomeIcon icon={faAngleRight} />Our Services</Link>
               <Link to="/About"> <FontAwesomeIcon icon={faAngleRight} />FAQ'S
               </Link>
               <Link to="/Contact"> <FontAwesomeIcon icon={faAngleRight} />Contact Us</Link>
               <Link to="/Trainings"> <FontAwesomeIcon icon={faAngleRight} />Careers</Link>
              </div>
               <div className="links1">
                  <h3>IT Services</h3>
                                  <Link to="/ItConsulting"><FontAwesomeIcon icon={faAngleRight} /> IT Solutions</Link>

                <Link to="/OurServicesPage"><FontAwesomeIcon icon={faAngleRight} /> IT Solutions</Link>
              <Link to="/WebDevelopmentService"> <FontAwesomeIcon icon={faAngleRight} />Web Development</Link>
                <Link to="/MobileApplications"><FontAwesomeIcon icon={faAngleRight} />App Development</Link>
               <Link to="/Trainings">
                <FontAwesomeIcon icon={faAngleRight} />Trainings
               </Link>
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
