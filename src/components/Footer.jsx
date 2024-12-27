import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Footer() {
    const { t } = useTranslation();

    return (
        <>
            <footer className="footer">
            <div className="footer-text">
                <p>{t('Footer.hero_name')} | 
                    <Link to="/mention-legales"> {t('Footer.mention_legales')}</Link>
                </p>
            </div>
                <div className="footer-iconTop">
                    <a href="#home"><i className="fa-solid fa-arrow-up"></i></a>
                </div>
            </footer>
        </>
    )
};

export default Footer;