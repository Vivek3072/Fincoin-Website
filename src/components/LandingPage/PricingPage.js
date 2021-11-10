import React from 'react'
import PricingImage from '../Assets/PricingImage.png'
import './Landingpage.css'

function PricingPage() {
    return (
        <>
        <div className="container-fluid pricingPage">
                <div className="row">
                    <div className="col-lg-6 pricingPageLeft">
                        <div className="pricingPageLeftBox mx-4 my-4">

                        <h3>Pick the right <br /> pricing plan <br /> for your needs. </h3>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio voluptatem alias recusandae magnam neque itaque corporis aperiam odit, quod a. Optio, quis dolores.</p>
                        <br />
                        <div className="btn btn-primary">Get Now</div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="priceRates">
                       <img className="priceRatesImage" src={PricingImage} alt="Pricings" />

                      </div> 
                    </div>
                </div>
        </div>     
        </>
    )
}

export default PricingPage
