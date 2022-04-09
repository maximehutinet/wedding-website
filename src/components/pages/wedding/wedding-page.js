import React from "react";
import bookingImg from "../../../img/booking.jpeg";
import LanguageButton from "../../nav/LanguageButton";
import "./wedding-page.scss"
import FullWidthImage from "../../common/full-width-image/FullWidthImage";
import wowIdkImage from "../../../img/wow_idk.jpg"
import BackHomeButton from "../../common/back-button/back-home-button";

function WeddingPage() {
    return (
        <div className="wedding-page">
            <FullWidthImage image={wowIdkImage}/>
            <LanguageButton/>
            <BackHomeButton/>
            <section id="getting-there">
                <h2>Getting there</h2>
                <div className="getting-there-infos-wrapper">
                    <ul>
                        <li>Closest airport : Geneva Airport - GVA (Geneva Switzerland)</li>
                        <li>Rental car : Geneva Airport</li>
                        <li>Shuttle bus : Geneva Airport</li>
                    </ul>
                    <p>Learn more about transportation to and from La Clusaz on <a
                        href="https://en.laclusaz.com/getting-to-la-clusaz.html#m1">La Clusaz's Tourism Website</a></p>
                    <p>We will provide transportation between La Clusaz and the venue on the day of the wedding.</p>
                </div>
                <div className="getting-there-map-wrapper">
                    <iframe title="Wedding map" src="https://www.google.com/maps/d/embed?mid=1HLesdGdloGS7EE3yr11BU18vuAPlr7RV&ehbc=2E312F" width="640" height="480"/>
                </div>
            </section>

            <section id="where-to-stay">
                <h2>Where to stay</h2>
                <div>
                    <p>We strongly recommend staying in La Clusaz as we will provide a shuttle to and from the venue.
                        <br/>
                        <br/>
                        What hotels do we recommend ? No idea ... but Booking.com and AirBnb have served us well in the past.</p>
                    <img alt="booking" src={bookingImg}/>
                </div>
            </section>

            <section id="wedding-program">
                <h2>Program for the day</h2>
                <p>Coming up soon, we're still working in it :)</p>
            </section>
        </div>
    );
}

export default WeddingPage;