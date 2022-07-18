import React from "react";
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
    return (
        <div className="tmb-page">
            <FullWidthImage image={groupImage}/>
            <LanguageButton/>
            <BackHomeButton/>
            <Map/>
            <TmbRoutesTable/>
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
                <h2>Food & water</h2>
                <ul>
                    <li>
                        Campers, considers bringing 1 day of food with you. We will pass by villages as the two maps
                        show
                        above but it can happen that we won't find food. Make sure also to bring breakfast !
                    </li>
                    <li>
                        For the refuger, you'll have breakfast and dinner at the huts. However, bring some snacks and
                        potentially food for at least one lunch in case we don't find food for launch on the way.
                    </li>
                    <li>
                        There are a bunch of stream of water along the way. We usually drink straight from them but if
                        you wanna be more cautious, we recommend to filter it as there could be some herd upstream.
                    </li>
                </ul>
                <p></p>
                <p></p>
            </section>
        </div>
    );
}

export default TmbPage;