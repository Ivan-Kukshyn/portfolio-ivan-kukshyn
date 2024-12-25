import React from "react";
import i18n from "i18next";

const languages = [
    { code: "en", lang: "EN" },
    { code: "fr", lang: "FR" },
    { code: "ua", lang: "UA" },
    { code: "ru", lang: "RU" },
];

const LanguageSelector = () => {
    // language change handler
    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage); // changing the language with i18next
    };

    return (
        // set the current default language
        <select id="language-switch" onChange={handleChange} defaultValue={i18n.language}>
            {languages.map((lng) => (
                <option key={lng.code} value={lng.code}>
                    {lng.lang}
                </option>
            ))}
        </select >
    );
};

export default LanguageSelector;