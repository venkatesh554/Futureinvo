import React,{useState,useEffect} from 'react'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "./navbar-images/icon.png";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "./Navbar2.css"
export default function Navbar2() {
    
    const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
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
         <span className="drop-text">About</span>
          {showDropdown && (
                 <ul className="dropdown-menu">
              <li>
              <Link to="/About">FAQ's</Link>
              </li>
              <li>
                <Link to="/Faq">About</Link>
              </li>
           </ul>
  )}
</li>
         <li>
            <Link to="/Services" >Services</Link>
        </li>
         <li>
            <Link to="/Trainings" >Trainings</Link>
        </li>
         <li>
            <Link to="/Contact" >Contact</Link>
        </li>       <FontAwesomeIcon icon={faBars} id="bar"/>


       </ul>

     </div></>
  )
}
