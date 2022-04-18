import {useTranslation} from "react-i18next";
import './intro_tmb.scss'
import React from "react";
import mountainsImg from '../../../../../img/mountains_tmb.png'
import {Link} from "react-router-dom";

function IntroTMB() {
    const {t} = useTranslation('common');
    return (
        <div className="intro-tmb-wrapper">
            <h2>{t('hike_the_tmb.title')}</h2>
            <div className="tmb-title">Tour du Mont Blanc</div>
            <div className="info-wrapper">
                <span>{t('hike_the_tmb.dates')}</span>
                <span>{t('hike_the_tmb.distance_duration')}</span>
                <span>{t('hike_the_tmb.location')}</span>
                <div className="tmb-button-wrapper">
                    <Link to="/tmb">{t('hike_the_tmb.button')}</Link>
                </div>
            </div>

            <img alt="moutains" src={mountainsImg}/>
        </div>
    )
}

export default IntroTMB;
