import {useTranslation} from "react-i18next";
import './intro.scss'
import React from "react";

function Intro() {
    const {t} = useTranslation('common');
    const weddingDate = new Date("09/08/2022");
    const now = new Date();
    const oneDay = 1000 * 3600 * 24;
    const timeBeforeWedding = Math.round((weddingDate - now) / oneDay);
    return (
        <div id="intro-wrapper">
            <h2>{t('intro.title')}</h2>
            {timeBeforeWedding > 0 &&
                <div id="wedding-coming-up">
                    <span>{t('intro.wedding_coming_up')}</span>
                    <span id="time-left-before-wedding">J-{timeBeforeWedding}</span>
                    <a id="rsvp-btn" href="https://docs.google.com/forms/d/e/1FAIpQLScvwwnOKSGUkM85Je8UuhOFFLzxADq2GLB7lnIWLl4ry-IG5Q/viewform">{t('intro.rsvp_btn')}</a>
                </div>
            }
            {timeBeforeWedding === 0 &&
                <span>{t('intro.time_party')}</span>
            }
            {timeBeforeWedding < 0 &&
                <span>{t('intro.party_over')}</span>
            }
        </div>
    )
}

export default Intro;
