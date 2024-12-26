import React from "react";
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <>
            <footer className="footer">
                <div className="footer-text">
                    <p>{t('Footer.hero_name')} | <a href="/mention-legales">{t('Footer.terms_of_use')}</a></p>
                </div>
                <div className="footer-iconTop">
                    <a href="#home"><i className="fa-solid fa-arrow-up"></i></a>
                </div>
            </footer>
        </>
    )
};

export default Footer;