import './map.scss'
import React from "react"

function Map() {
    return (
        <div className="map-wrapper">
            <iframe width="1120" height="800" frameBorder="0" src="https://fatmap.com/guidebooks/16/hike-the-world-renowned-tour-du-mont-blanc-route?fmid=em"></iframe>
            {/*<iframe width="1120" height="800" frameBorder="0" src="https://fatmap.com/routeid/2794475/tour-du-mont-blanc?fmid=em"></iframe>*/}
        </div>
    )
}

export default Map;
