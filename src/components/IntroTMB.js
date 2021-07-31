import {useTranslation} from "react-i18next";
import './intro_tmb.scss'
import React from "react";
import mountainsImg from '../img/mountains_tmb.png'

function IntroTMB() {
    const {t} = useTranslation('common');
    return (
        <div className="intro-tmb-wrapper">
            <h1>{t('hike_the_tmb.title')}</h1>
            <h2>Tour du Mont Blanc</h2>
            <div className="info-wrapper">
                <span>{t('hike_the_tmb.dates')}</span>
                <span>{t('hike_the_tmb.distance_duration')}</span>
                <span>{t('hike_the_tmb.location')}</span>
            </div>
            <img alt="moutains" src={mountainsImg}/>
        </div>
    )
}

export default IntroTMB;
