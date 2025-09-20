import React,{useState,useEffect} from 'react'
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";



export default function Navbar() {
   
  return (
    <div className="Top-1">
        <div className="Top-2">
           <div className="class1">
             
            <p><FontAwesomeIcon icon={faEnvelope} id="icon"/>info@futureinvo.com</p>
           </div>
            <div className="class1">
            <p> <FontAwesomeIcon icon={faPhoneVolume} id="icon" />7981107131</p>
           </div>
           <div className="class2">
            <p>Follow Us:  <FontAwesomeIcon icon={faFacebookF} id="ic-links"/> <FontAwesomeIcon icon={faLinkedin} id="ic-links"/> <FontAwesomeIcon icon={faInstagram} id="ic-links"/></p>
            
           
           </div>
       </div>


    </div>
  )
}
