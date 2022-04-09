import LanguageButton from "../../nav/LanguageButton";
import HeaderImage from "./components/header/HeaderImage";
import Intro from "./components/intro/Intro";
import FullWidthImage from "../../common/full-width-image/FullWidthImage";
import tmbImage from "../../../img/header_image.jpg";
import IntroTMB from "./components/intro-tmb/IntroTMB";
import Rsvp from "../../rsvp/RSVP";
import React from "react";

function HomePage() {
    return (
        <div className="home-page">
            <LanguageButton/>
            <HeaderImage/>
            <Intro/>
            <FullWidthImage image={tmbImage}/>
            <IntroTMB/>
            <Rsvp/>
        </div>
    );
}

export default HomePage;