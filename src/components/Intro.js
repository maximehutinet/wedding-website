import {useTranslation} from "react-i18next";
import './intro.scss'
import React from "react";
import flowerImg from '../img/flower.png'

function Intro() {
    const {t} = useTranslation('common');
    return (
        <div className="intro-wrapper">
            <div className="names">
                <span>Sarah Charley</span>
                <span>{t('save_the_date.and')}</span>
                <span>Maxime Hutinet</span>
            </div>
            <span className="finally-married">{t('save_the_date.finally_married')}</span>
            <div className="img-wrapper">
                <span>{t('save_the_date.married')}</span>
                <img alt="flower" src={flowerImg}/>
            </div>
            <span className="dates-location">{t('save_the_date.dates')}<br/>Les Rhodos, Col de Aravis - La Clusaz<br/>{t('save_the_date.alpes')}</span>
        </div>
    )
}

export default Intro;
