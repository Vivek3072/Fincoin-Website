import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/Logo.png'
function DashboardNav() {
    return (
        <>
            <div className="sideNavBox">
                <div className="navLogo"> <br />
                <img src={Logo} alt="LOGO" />
                <div className="searchBox">
              <input placeholder="Q Search Here" />
                </div>
                </div>
                <hr style={{color:"white"}} />
                   <nav>
                       <ul>
                           <li> <i style={{color:"white" , paddingRight:"7px"}} className="fas fa-home"></i> <a href="/">   Dashboard </a> </li>
                           <li> <i style={{color:"white" , paddingRight:"7px"}} className="fas fa-user-alt"></i> <a href="/">   Profile </a> </li>
                           <li> <i style={{color:"white" , paddingRight:"7px"}} className="fas fa-wallet"></i> <a href="/">   Wallet </a> </li>
                           <li> <i style={{color:"white" , paddingRight:"7px"}} className="fas fa-exchange-alt"></i> <a href="/">   Exchange </a> </li>
                           <li> <i style={{color:"white" , paddingRight:"7px"}} className="fas fa-coins"></i> <a href="/">   Coins </a> </li>
                           <li> <i style={{color:"white" , paddingRight:"7px"}} className="fas fa-cog"></i> <a href="/">   Settings </a> </li>
                           <li> <Link to="/"> <i style={{color:"white" , paddingRight:"7px"}} className="fas fa-sign-out-alt"></i> </Link> <a href="/">   Logout </a> </li>
                       </ul>
                   </nav>
                </div>
        </>
    )
}

export default DashboardNav
