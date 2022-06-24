import './App.scss';
import React from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/home/home-page";
import TmbPage from "./components/pages/tmb/tmb-page";

function App() {
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
