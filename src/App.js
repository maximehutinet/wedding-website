import './App.scss';
import React, {useEffect} from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/home/home-page";
import TmbPage from "./components/pages/tmb/tmb-page";
import {useTranslation} from "react-i18next";

function App() {
    const {i18n} = useTranslation('common');
    useEffect(() => {
        const currentBrowserLanguage = navigator.language;
        if(currentBrowserLanguage === 'fr') {
            i18n.changeLanguage('fr');
        }
    }, [i18n]);

    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/tmb" element={<TmbPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
