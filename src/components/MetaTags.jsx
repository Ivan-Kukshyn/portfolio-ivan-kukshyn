import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const MetaTags = () => {
    const { t } = useTranslation();
    return (
        <Helmet>
            <title>{t('meta.title')}</title>
            <meta name="description" content={t('meta.description')}/>
            <meta name="keywords" content={t('meta.keywords')}/>
        </Helmet>
    );
};

export default MetaTags;