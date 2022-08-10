import './covid-warning.scss'
import {useTranslation} from "react-i18next";
import React from "react";

function CovidWarning() {
    const {t} = useTranslation('common');
    return <div id="covid-warning">
        {t('covid.warning')}
    </div>
}

export default CovidWarning;