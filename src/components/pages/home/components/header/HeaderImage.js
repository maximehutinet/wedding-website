import React from "react"
import headerImage from '../../../../../img/wedding.jpg'
import './header.scss'

function HeaderImage() {
    return (
        <div className="header-wrapper">
            <img
                src={headerImage}
             alt=""/>
        </div>
    )
}

export default HeaderImage;
