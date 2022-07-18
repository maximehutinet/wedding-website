import './map.scss'
import React from "react"
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import Button from "@material-ui/core/Button";

function Map() {
    const {t} = useTranslation('common');
    const currentLanguage = i18next.language
    return (
        <div className="map-section">
            <h2>{t('map_table_tmb.title')}</h2>
            <div className="map-wrapper">
                <iframe title="map" width="1120" height="800" src="https://fatmap.com/routeid/2999543/tour-du-mont-blanc-2022?fmid=em"/>
            </div>
            <div className="map-wrapper">
                <iframe title="map google" src="https://www.google.com/maps/d/u/0/embed?mid=1H90vQ-EETqUB_FBRIKra9oq2Y9VO-HM&ehbc=2E312F" width="1120" height="800"></iframe>
            </div>
            <div className="buttons-wrapper">
                {currentLanguage === 'en' && <Button variant="outlined" color="primary" target="_blank" href="https://www.amazon.com/Trekking-Tour-Mont-Blanc-guidebook-ebook/dp/B08B8CPMC7">Trekking guide</Button> }
                {currentLanguage === 'en' && <Button variant="outlined" color="secondary" target="_blank" href="https://www.amazon.com/Tour-mont-blanc-English-French/dp/2758540940">Trekking Map</Button> }
            </div>
        </div>
    )
}

export default Map;
