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
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.rain-pants')} />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.puff-jacket')} />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.hiking-pants')} />
                    <FormControlLabel control={<Checkbox />} label="T-Shirt x2" />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.mid-layer')} />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.gloves')} />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.hat')} />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.sunglasses')} />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.sunscreen')} />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.hiking-poles')} />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.headlamps')} />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.safety-blanket')} />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.shoes')} />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.liner')} />
                </FormGroup>

                <h3>{t('tmb-page.gear-recommended-title-camper')}</h3>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.tent')} />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.sleeping-page')} />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.sleeping-bag')} />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.trash-bag')} />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.spoon')} />
                    <FormControlLabel control={<Checkbox />} label="Mug" />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.knife')} />
                    <FormControlLabel control={<Checkbox />} label={t('tmb-page.stove')} />
                </FormGroup>
            </section>
        </div>
    );
}

export default TmbPage;