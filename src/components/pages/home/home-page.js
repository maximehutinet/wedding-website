import LanguageButton from "../../nav/language-button";
import HeaderImage from "./components/header/HeaderImage";
import Intro from "./components/intro/intro";
import FullWidthImage from "../../common/full-width-image/FullWidthImage";
import tmbImage from "../../../img/header_image.jpg";
import IntroTMB from "./components/intro-tmb/IntroTMB";
import React from "react";
import PracticalInfos from "./components/practical-infos/practical-infos";

function HomePage() {
    return (
        <div className="home-page">
            <LanguageButton/>
            <HeaderImage/>
            <Intro/>
            <PracticalInfos/>
            <FullWidthImage image={tmbImage}/>
            <IntroTMB/>
        </div>
    );
}

export default HomePage;