import './App.scss';
import React from "react";
import Nav from './components/Nav.js';
import HeaderImage from './components/HeaderImage.js';
import Intro from "./components/Intro";
import IntroTMB from "./components/IntroTMB";
import FullWidthImage from "./components/FullWidthImage";
import tmbImage from './img/header_image.jpg'

function App() {
  return (
    <div className="app">
        <Nav/>
        <HeaderImage/>
        <Intro/>
        <FullWidthImage
            image={tmbImage}
        />
        <IntroTMB/>
        {/*<Map/>*/}
    </div>
  );
}

export default App;
