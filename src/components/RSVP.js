import {useTranslation} from "react-i18next";
import React from "react";
import './rsvp.scss'
import Form from "./Form";
import treesImg from '../img/form_background.jpg'

function Rsvp() {
    const {t} = useTranslation('common');
    return (
        <div className="rsvp-wrapper">
            <div className="content">
                <h2>{t('rsvp.title')}</h2>
                <Form/>
                <p>{t('rsvp.infos')}</p>
            </div>
            <img alt="trees" src={treesImg}/>
        </div>
    )
}

export default Rsvp;
