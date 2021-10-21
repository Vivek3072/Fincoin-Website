import React from 'react'
import LandingPageNav from './LandingPageNav'
import BitcoinHome from '../Assets/BitcoinHome.png'
import PricingPage from './PricingPage'
import Security from './Security'
import Footer from '../../Footer/Footer'

function LandingPage() {
    return (
        <>
        <LandingPageNav />
        <div className="container LandingPageBody">
                <div className="row">
                    <div className="col-lg-6 landingPageLeft">
                        <div className="landingPageLeftBox mx-4 my-4">

                        <h3>Explore the <br /> Crypto world.</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio voluptatem alias recusandae magnam neque itaque corporis aperiam odit, quod a. Optio, quis dolores.</p>
                        <br />
                        <div className="btn btn-primary">Get Now</div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="bitcoinHome">
                       <img className="bitcoinHomeImage" src={BitcoinHome} alt="" />

                      </div> 
                    </div>
                </div>
        </div>   
        <Security />
        <PricingPage />  
        <Footer />
   </>
    )
}

export default LandingPage
