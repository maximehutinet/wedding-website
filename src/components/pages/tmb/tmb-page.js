import React, {useEffect} from "react";
import FullWidthImage from "../../common/full-width-image/FullWidthImage";
import groupImage from "../../../img/group-pic.jpeg";
import LanguageButton from "../../nav/language-button";
import "./tmb-page.scss"
import BackHomeButton from "../../common/back-button/back-home-button";
import Map from "../home/components/map/Map";
import TmbRoutesTable from "../../tmb-routes-table/TmbRoutesTable";
import {useTranslation} from "react-i18next";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";

function TmbPage() {
    const {t} = useTranslation('common');
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="tmb-page">
            <FullWidthImage image={groupImage}/>
            <LanguageButton/>
            <BackHomeButton/>
            <Map/>
            <TmbRoutesTable/>
            <section id="come-hike-for-one-day">
                <h2>{t('tmb-page.come-hike-for-one-day-title')}</h2>
                <p>
                    {t('tmb-page.come-hike-for-one-day-text1')}
                </p>
                <p>
                    {t('tmb-page.come-hike-for-one-day-text2')}
                </p>
                <ul>
                    <li>{t('tmb-page.come-hike-for-one-day-meeting-point')}</li>
                    <li>{t('tmb-page.come-hike-for-one-day-meeting-time')}</li>
                    <li>{t('tmb-page.come-hike-for-one-day-distance-brevent')}</li>
                    <li>{t('tmb-page.come-hike-for-one-day-distance-houches')}</li>
                </ul>
                <div className="map-wrapper">
                    <iframe title="map last day tmb"
                            src="https://www.google.com/maps/d/embed?mid=12sJwfCTTyclNRRUsU5TdgQS5kJgh6F8&hl=fr&ehbc=2E312F"
                            width="640" height="480"></iframe>
                </div>
                <div className="btn-wrapper">
                    <a className="btn"
                       href="https://www.chamonix.com/activites/informations-pratiques-remontees-mecaniques/telecabine-de-la-flegere"
                       target="_blank" rel="noreferrer">{t('tmb-page.come-hike-for-one-day-btn')}</a>
                </div>
            </section>

            <hr/>

            <section id="gear">
                <h2>{t('tmb-page.title')}</h2>
                <h3>{t('tmb-page.recommended-hiking-bag-title')}</h3>
                <p>{t('tmb-page.recommended-hiking-bag')}</p>
                <h3>{t('tmb-page.gear-recommended-title-all')}</h3>
                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.rain-pants')}/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.puff-jacket')}/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.hiking-pants')}/>
                    <FormControlLabel control={<Checkbox/>} label="T-Shirt x2"/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.mid-layer')}/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.gloves')}/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.hat')}/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.sunglasses')}/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.sunscreen')}/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.hiking-poles')}/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.headlamps')}/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.safety-blanket')}/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.shoes')}/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.liner')}/>
                </FormGroup>

                <h3>{t('tmb-page.gear-recommended-title-camper')}</h3>
                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.tent')}/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.sleeping-page')}/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.sleeping-bag')}/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.trash-bag')}/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.spoon')}/>
                    <FormControlLabel control={<Checkbox/>} label="Mug"/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.knife')}/>
                    <FormControlLabel control={<Checkbox/>} label={t('tmb-page.stove')}/>
                </FormGroup>

                <hr/>
                <h2>{t('tmb-page.food-water-title')}</h2>
                <ul>
                    <li>{t('tmb-page.food-water-text1')}</li>
                    <li>{t('tmb-page.food-water-text2')}</li>
                    <li>{t('tmb-page.food-water-text3')}</li>
                </ul>
                <p></p>
                <p></p>
            </section>
        </div>
    );
}

export default TmbPage;