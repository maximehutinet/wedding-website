import React from "react"
import './full_width_image.scss'

function FullWidthImage(props) {
    return (
        <div className="full_width_wrapper">
            <img
                src={props.image}
             alt=""/>
        </div>
    )
}

export default FullWidthImage;
