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
                <iframe width="1120" height="800" frameBorder="0" src="https://fatmap.com/guidebooks/50380/tour-du-mont-blanc-sarah-and-max-wedding-2022"></iframe>
            </div>
            <div className="buttons-wrapper">
                {currentLanguage === 'en' && <Button variant="outlined" color="primary" target="_blank" href="https://www.amazon.com/Trekking-Tour-Mont-Blanc-guidebook-ebook/dp/B08B8CPMC7">Trekking guide</Button> }
                {currentLanguage === 'en' && <Button variant="outlined" color="secondary" target="_blank" href="https://www.amazon.com/Tour-mont-blanc-English-French/dp/2758540940">Trekking Map</Button> }
            </div>
        </div>
    )
}

export default Map;
