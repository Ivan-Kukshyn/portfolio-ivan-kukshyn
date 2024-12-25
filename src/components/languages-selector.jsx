import React from "react";

const language = [
    { code: "en", lang: "EN" },
    { code: "fr", lang: "FR" },
    { code: "uk", lang: "UK" },
    { code: "ru", lang: "RU" },
];

const LanguageSelector = () => {
    return (
        <select id="language-switch">
            {language.map((lng) => (
                <option key={lng.code} value={lng.code}>
                    {lng.lang}
                </option>
            ))}
        </select>
    );
};

export default LanguageSelector;