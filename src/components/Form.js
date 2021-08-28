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
                        <input type="checkbox" name="attendance" value="ComingWedding"/>
                        <label>{t('rsvp.form.coming_wedding')}</label>
                    </div>
                    <div>
                        <input type="checkbox" name="attendance" value="TMB"/>
                        <label>{t('rsvp.form.hiking_tmb')}</label>
                    </div>
                    <div>
                        <input type="checkbox" name="attendance" value="PartTMB"/>
                        <label>{t('rsvp.form.hiking_part_tmb')}</label>
                    </div>
                </div>
                <div className="submit-button-wrapper">
                    <Button type="submit" variant="contained" color="primary">{t('rsvp.form.send')}</Button>
                </div>
            </form>


            {/*<form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label htmlFor="name">Name</label> <br />
                    <input type="text" id="name" name="name" required />
                </p>
                <p>
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" id="email" name="email" required />
                </p>
                <p>
                    <label htmlFor="message">Message</label> <br />
                    <textarea id="message" name="message" required></textarea>
                </p>
                <p>
                    <input type="submit" value="Submit message" />
                </p>
            </form>*/}
        </div>
    )
}

export default Form;
