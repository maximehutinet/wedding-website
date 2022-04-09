import {Link} from "react-router-dom";
import React from "react";
import "./back-home-button.scss"

function BackHomeButton() {
    return (
        <div className="back-home-btn-wrapper">
            <Link to="/">Wedding du Mont Blanc</Link>
        </div>
    );
}

export default BackHomeButton;