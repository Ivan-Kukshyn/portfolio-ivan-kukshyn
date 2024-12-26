import '/src/assets/css/MentionLegales.css';
import { useTranslation } from 'react-i18next';

function MentionLegales() {
    const { t } = useTranslation();
    return (
        <>
            <section className="mentionLegales" id="mentionLegales">
                <h1>{t('MentionLegales.title')}</h1>
                <h2>1 - {t('MentionLegales.section_1.heading')}</h2>
                <p>{t('MentionLegales.section_1.text.1')}</p>
                <p>{t('MentionLegales.section_1.text.2')}</p>
                <p>{t('MentionLegales.section_1.text.3')}</p>
                <p>{t('MentionLegales.section_1.text.4')}</p>
                <h2>2 - {t('MentionLegales.section_2.heading')}</h2>
                <p>{t('MentionLegales.section_2.text.1')}</p>
                <p>{t('MentionLegales.section_2.text.2')}</p>
                <p>{t('MentionLegales.section_2.text.3')}</p>
                <p>{t('MentionLegales.section_2.text.4')}</p>
                <p>{t('MentionLegales.section_2.text.5')}</p>
                <h2>3 - {t('MentionLegales.section_3.heading')}</h2>
                <p>{t('MentionLegales.section_3.text.1')} <a href="https://www.campus-centre.fr/">CCI Campus Centre</a> {t('MentionLegales.section_3.text.2')}</p>
                <h2>4 - {t('MentionLegales.section_4.heading')}</h2>
                <p><strong>{t('MentionLegales.section_4.text.1')}</strong> {t('MentionLegales.section_4.text.2')}</p>
                <p>{t('MentionLegales.section_4.text.3')}</p>
                <h2>5 – {t('MentionLegales.section_5.heading')}</h2>
                <p>{t('MentionLegales.section_5.text')}</p>
                <h2>6 – {t('MentionLegales.section_6.heading')}</h2>
                <p>{t('MentionLegales.section_6.text')} <a href="https://devicon.dev/">devicon.dev</a>, <a href="https://www.flaticon.com/">flaticon.com</a>, <a href="https://fontawesome.com/">fontawesome.com</a> and <a
                    href="https://www.freepik.com/">freepik.com</a>.</p>
            </section>
        </>
    );
};

export default MentionLegales;