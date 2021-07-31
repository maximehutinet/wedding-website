import {useTranslation} from "react-i18next";
import React from "react";
import './nav.scss'
import usFlag from '../icons/us.svg'
import frFlag from '../icons/france.svg'

function Nav() {
    const {i18n} = useTranslation('common');
    return <div className="language-wrapper">
        <button className="en" onClick={() => i18n.changeLanguage('en')}>
            <img src={usFlag}  alt="us flag"/>
        </button>
        <button className="fr" onClick={() => i18n.changeLanguage('fr')}>
            <img src={frFlag}  alt="french flag"/>
        </button>
    </div>
}

export default Nav;
