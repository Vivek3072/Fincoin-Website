import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/Logo.png'
import './Landingpage.css'
function LandingPageNav() {
    return (
        <>
        <div className="landingPageNavbar">

            <nav>
            <img src={Logo} alt="LOGO" />
           <ul>
               <li>Home</li>
               <li>Services</li>
               <li>Reviews</li>
               <li>Pricing</li>
               <li> <Link to="/DashboardItem"> <i style={{color:"white" , fontSize:"30px"}} className="fas fa-user-circle"></i> </Link> </li>
           </ul>
            </nav>
        </div>
        </>
    )
}

export default LandingPageNav

