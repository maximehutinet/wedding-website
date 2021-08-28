import React from "react";
import './form.scss'

function Form() {
    //const {t} = useTranslation('common');
    return (
        <div className="form-wrapper">
            {/*<form name="contact" method="POST" data-netlify="true">
                <div className="text-input-wrapper">
                    <input className="text-input" type="text" name="name" placeholder={t('rsvp.form.name')}/>
                    <input className="text-input" type="email" name="email" placeholder="Email"/>
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
            </form>*/}
            <form name="contact" netlify>
                <p>
                    <label>Name <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Email <input type="email" name="email" /></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    )
}

export default Form;
