import {useTranslation} from "react-i18next";
import React from "react";
import './nav.scss'
import usFlag from '../icons/us.svg'
import frFlag from '../icons/france.svg'
import i18next from "i18next";

function Nav() {
    const {i18n} = useTranslation('common');
    const currentLanguage = i18next.language
    return <div className="language-wrapper">
        {currentLanguage === 'fr' && <button className="en" onClick={() => i18n.changeLanguage('en')}>
            <img src={usFlag} alt="us flag"/>
        </button>}
        {currentLanguage === 'en' && <button className="fr" onClick={() => i18n.changeLanguage('fr')}>
            <img src={frFlag} alt="french flag"/>
        </button>}
    </div>
}

export default Nav;
