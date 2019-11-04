import React from 'react'
import { useTranslation } from 'react-i18next';

const PlayLanguages = (props) => {
    const { t, i18n } = useTranslation()

    const handleLang = (lang) => {
        console.log("LANG", lang)
        i18n.changeLanguage(lang)
    }
    return (
        <>
                <div>Traslate things</div>
                <button onClick={() => handleLang('es')}>Español</button>
                <button onClick={() => handleLang('en')}>English</button>
                <p>{t('Hola')}</p>
        </>
    )
}

export { PlayLanguages as default }