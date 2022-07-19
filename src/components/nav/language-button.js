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
        {currentLanguage === 'en' && <div>
            <img src={usFlag} alt="us flag"/>
            <span className="active">EN</span>
            <button onClick={() => i18n.changeLanguage('fr')}>
                <span>FR</span>
            </button>
        </div>}
        {currentLanguage === 'fr' && <div>
            <img src={frFlag} alt="fr flag"/>
            <span className="active">FR</span>
            <button onClick={() => i18n.changeLanguage('en')}>
                <span>EN</span>
            </button>
        </div>}
    </div>
}

export default LanguageButton;
