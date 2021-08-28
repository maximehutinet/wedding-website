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
                <label>{t('rsvp.form.interested')}</label>
                <div className="checkboxes-wrapper">
                    <div>
                        <input type="checkbox" name="ComingWedding" value="Coming to the wedding"/>
                        <label>{t('rsvp.form.coming_wedding')}</label>
                    </div>
                    <div>
                        <input type="checkbox" name="NotComingWedding" value="Not coming to the wedding"/>
                        <label>{t('rsvp.form.not_coming')}</label>
                    </div>
                    <div>
                        <input type="checkbox" name="TMB" value="Coming to TMB"/>
                        <label>{t('rsvp.form.hiking_tmb')}</label>
                    </div>
                    <div>
                        <input type="checkbox" name="PartTMB" value="Coming to part of TMB"/>
                        <label>{t('rsvp.form.hiking_part_tmb')}</label>
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
