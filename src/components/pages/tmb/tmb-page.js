import React from "react";
import FullWidthImage from "../../common/full-width-image/FullWidthImage";
import groupImage from "../../../img/group-pic.jpeg";
import LanguageButton from "../../nav/LanguageButton";
import "./tmb-page.scss"
import BackHomeButton from "../../common/back-button/back-home-button";
import Map from "../home/components/map/Map";
import TmbRoutesTable from "../../tmb-routes-table/TmbRoutesTable";
import {useTranslation} from "react-i18next";

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
                <p>{t('tmb-page.gear-recommended-title-all')}</p>
                <ul>
                    <li>{t('tmb-page.rain-pants')}</li>
                    <li>{t('tmb-page.puff-jacket')}</li>
                    <li>{t('tmb-page.hiking-pants')}</li>
                    <li>T-Shirt x2</li>
                    <li>{t('tmb-page.mid-layer')}</li>
                    <li>{t('tmb-page.gloves')}</li>
                    <li>{t('tmb-page.hat')}</li>
                    <li>{t('tmb-page.sunglasses')}</li>
                    <li>{t('tmb-page.sunscreen')}</li>
                    <li>{t('tmb-page.hiking-poles')}</li>
                    <li>{t('tmb-page.headlamps')}</li>
                    <li>{t('tmb-page.safety-blanket')}</li>
                    <li>{t('tmb-page.shoes')}</li>
                    <li>{t('tmb-page.liner')}</li>
                </ul>

                <p>{t('tmb-page.gear-recommended-title-camper')}</p>
                <ul>
                    <li>{t('tmb-page.tent')}</li>
                    <li>{t('tmb-page.sleeping-page')}</li>
                    <li>{t('tmb-page.sleeping-bag')}</li>
                    <li>{t('tmb-page.trash-bag')}</li>
                    <li>{t('tmb-page.spoon')}</li>
                    <li>Mug</li>
                    <li>{t('tmb-page.knife')}</li>
                    <li>{t('tmb-page.stove')}</li>
                </ul>

                <p>{t('tmb-page.recommended-hiking-bag')}</p>
                <ul>
                    <li>Refuger : 30-40L</li>
                    <li>Camper : 70-90L</li>
                </ul>
            </section>
        </div>
    );
}

export default TmbPage;