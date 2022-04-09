import './App.scss';
import React from "react";

import ReactGA from "react-ga"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/home/home-page";
import WeddingPage from "./components/pages/wedding/wedding-page";
import TmbPage from "./components/pages/tmb/tmb-page";

function App() {
    ReactGA.initialize("G-315SWY6D2Q");
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/wedding" element={<WeddingPage/>} />
                    <Route path="/tmb" element={<TmbPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
