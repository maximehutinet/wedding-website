import {useTranslation} from "react-i18next";
import React from "react";
import './language-button.scss'
import usFlag from '../../icons/us.svg'
import frFlag from '../../icons/france.svg'
import i18next from "i18next";

function LanguageButton() {
    i18next.cloneInstance()
    const {i18n} = useTranslation('common');
    const currentLanguage = i18next.language
    return <div className="language-wrapper">
        {currentLanguage === 'fr' && <button className="en" onClick={() => i18n.changeLanguage('en')}>
            <img src={usFlag} alt="us flag"/>
            <span>EN</span>
        </button>}
        {currentLanguage === 'en' && <button className="fr" onClick={() => i18n.changeLanguage('fr')}>
            <img src={frFlag} alt="french flag"/>
            <span>FR</span>
        </button>}
    </div>
}

export default LanguageButton;
