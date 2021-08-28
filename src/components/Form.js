import React from "react";
import './form.scss'
import {useTranslation} from "react-i18next";
import Button from "@material-ui/core/Button";

function Form() {
    const {t} = useTranslation('common');
    return (
        <div className="form-wrapper">
            <form name="rsvp" method="post">
                <input type="hidden" name="form-name" value="rsvp" />
                <div className="text-input-wrapper">
                    <input className="text-input" type="text" name="name" placeholder={t('rsvp.form.name')} required/>
                    <input className="text-input" type="email" name="email" placeholder="Email" required/>
                </div>
                <div className="activity-section">
                    <label className="activity-title">{t('rsvp.form.wedding_radio_button.title')}</label>
                    <div>
                        <input type="radio" name="coming-to-wedding" value="Yes"/>
                        <label>{t('rsvp.form.wedding_radio_button.yes')}</label>
                    </div>
                    <div>
                        <input type="radio" name="coming-to-wedding" value="Maybe"/>
                        <label>{t('rsvp.form.wedding_radio_button.maybe')}</label>
                    </div>
                    <div>
                        <input type="radio" name="coming-to-wedding" value="No"/>
                        <label>{t('rsvp.form.wedding_radio_button.no')}</label>
                    </div>
                </div>
                <div className="activity-section">
                    <label className="activity-title">{t('rsvp.form.tmb_radio_button.title')}</label>
                    <div>
                        <input type="radio" name="coming-to-tmb" value="Yes"/>
                        <label>{t('rsvp.form.tmb_radio_button.yes')}</label>
                    </div>
                    <div>
                        <input type="radio" name="coming-to-tmb" value="Maybe"/>
                        <label>{t('rsvp.form.tmb_radio_button.maybe')}</label>
                    </div>
                    <div>
                        <input type="radio" name="coming-to-tmb" value="No"/>
                        <label>{t('rsvp.form.tmb_radio_button.no')}</label>
                    </div>
                </div>
                <div className="submit-button-wrapper">
                    <Button type="submit" variant="contained" color="primary">{t('rsvp.form.send')}</Button>
                </div>
            </form>
        </div>
    )
}

export default Form;
