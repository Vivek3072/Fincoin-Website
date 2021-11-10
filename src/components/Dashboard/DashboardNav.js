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
                        <Link to="/DashboardItem">    <li> <i style={{color:"white" , paddingRight:"7px"}} className="fas fa-home"></i>             Dashboard   </li>  </Link> 
                        <Link to="/DashProfile">    <li> <i style={{color:"white" , paddingRight:"7px"}} className="fas fa-user-alt"></i>       Profile   </li>  </Link> 
                        <Link to="/DashWallet">    <li> <i style={{color:"white" , paddingRight:"7px"}} className="fas fa-wallet"></i>        Wallet   </li>  </Link> 
                        <Link to="/DashCoins">    <li> <i style={{color:"white" , paddingRight:"7px"}} className="fas fa-exchange-alt"></i> Exchange   </li>  </Link> 
                        <Link to="/DashCoins">    <li> <i style={{color:"white" , paddingRight:"7px"}} className="fas fa-coins"></i>        Coins   </li>  </Link> 
                        <Link to="DashboardItem">   <li> <i style={{color:"white" , paddingRight:"7px"}} className="fas fa-cog"></i>             Settings   </li>  </Link> 
                        <Link to="/DashboardItem">    <li> <i style={{color:"white" , paddingRight:"7px"}} className="fas fa-file-invoice"></i>     Chart   </li>  </Link> 

                       </ul>

                   </nav>

                   <div className="logoutButton  text-center" >
                   <Link to="/"> <i style={{color:"white" }} className="fas fa-sign-out-alt"></i>    Logout </Link> 

                   </div>
                </div>
        </>
    )
}

export default DashboardNav
