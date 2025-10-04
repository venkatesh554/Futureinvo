import React,{useState,useEffect} from 'react'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "./navbar-images/icon.png";
import { Link } from 'react-router-dom';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "./Navbar2.css"
export default function Navbar2() {
    
    const [showDropdown, setShowDropdown] = useState(false);
        const [showDropdown2, setShowDropdown2] = useState(false);
        const[modal,setModal]=useState(false);

     const toggleModal=()=>{
        setModal(!modal)
     }
     useEffect(()=>{
        if(modal){
           document.body.classList.add("active-modal")
        }
        else{
            document.body.classList.remove("active-modal")
        }
     },[modal])

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

   const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  


    const [fix,setFix]=useState(false)

    const handleScroll=()=>{
        if(window.scrollY >=8000){
            setFix(true)
        }
        else{
            setFix(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return()=>window.removeEventListener("scroll",handleScroll)
    },[])
  return (
    <>
    <div className="sticker"></div>
     <div className={fix? 'navbarFixed':'Top-3'}>
       <img src={logo} />
       <ul>
        <li>
            <Link to="/" >Home</Link>
        </li>
        <li className="dropdown" onClick={toggleDropdown}>
         <span className="drop-text">About <FontAwesomeIcon icon={faAngleDown} /></span>
          {showDropdown && (
                 <ul className="dropdown-menu">
              <li>
              <Link to="/About">FAQ's </Link>
              </li>
              <li>
                <Link to="/Faq">About </Link>
              </li>
           </ul>
  )}
</li>
         <li>
            <Link to="/Services" >Services <FontAwesomeIcon icon={faAngleDown} /></Link>
        </li>
         <li className="dropdown2" onClick={toggleDropdown2}>
            <span className="drop-text2">Trainings <FontAwesomeIcon icon={faAngleDown} /></span>
            {
                showDropdown2 && (
                    <ul className="dropdown-menu2">
                        <li>
                            <Link to="/Trainings">AI Training</Link>
                        </li>
                        <li>
                            <Link to="/Datascience">Data Science</Link>
                        </li>

                    </ul>
                )
            }
          
        </li>
         <li>
            <Link to="/Contact" >Contact</Link>
        </li>     
         {
            !modal && (
                 <FontAwesomeIcon icon={faBars} id="bar" onClick={toggleModal} />

            )
         }
         {
            modal && (
                     
                <div className="pop-up">
          <FontAwesomeIcon icon={faXmark} id="xmark" onClick={toggleModal} />
          <p>For inquiries and assistance , please fill out the contact form below. our team is here to help , and we look forward to hearing from you</p>
          <form>
            <label id="label1">Name*:</label><br></br>
            <input type="text" ></input><br></br>
            <label id="label2">E-Mail*:</label><br></br>
            <input type="email"></input><br></br>
            <label id="label3">Mobile No*:</label><br></br>
            <input type="number" ></input><br></br>
            <label id="label4">City*:</label><br></br>
            <input type="text" ></input><br></br>

            <input type="text" placeholder='Message Us' id="message-us"></input>
            <button id="nav-form-btn">Submit</button>

          </form>
        </div>
            )
         }

       </ul>

     </div></>
  )
}
