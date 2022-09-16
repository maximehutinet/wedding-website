import HeaderImage from "./components/header/HeaderImage";
import React from "react";
import Thanks from "./components/thanks/thanks";

function HomePage() {
    return (
        <div className="home-page">
            <HeaderImage/>
            <Thanks/>
        </div>
    );
}

export default HomePage;