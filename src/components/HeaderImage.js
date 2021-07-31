import React from "react"
import headerImage from '../img/engagement.jpeg'
import './header.scss'

function HeaderImage() {
    return (
        <div className="header-wrapper">
            <img
                src={headerImage}
            />
        </div>
    )
}

export default HeaderImage;
