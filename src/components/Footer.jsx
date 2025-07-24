import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';  // estilos abajo
import '../i18n'; // importa la config de i18n (ajusta ruta si es necesario)

const Footer = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nextLang);
  };

  return (
    <footer className="footer">
      <div className="footer-text">{t('footer_text')}</div>
      <button className="lang-button" onClick={toggleLanguage}>
        {t('change_language')}
      </button>
    </footer>
  );
};

export default Footer;
