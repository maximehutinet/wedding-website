import './App.scss';
import {useTranslation} from "react-i18next";
import React from "react";
import Nav from './components/Nav.js';
import HeaderImage from './components/HeaderImage.js';
import Intro from "./components/Intro";
import Map from "./components/Map";
import IntroTMB from "./components/IntroTMB";
import FullWidthImage from "./components/FullWidthImage";
import tmbImage from './img/header_image.jpg'

/*function Header() {
  const {t, i18n} = useTranslation('common');
  return <div>
    <h1>{t('welcome.title', {framework:'React'})}</h1>
    <button onClick={() => i18n.changeLanguage('fr')}>fr</button>
    <button onClick={() => i18n.changeLanguage('en')}>en</button>
  </div>
}*/

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
