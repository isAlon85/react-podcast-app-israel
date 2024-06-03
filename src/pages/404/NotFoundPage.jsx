import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function NotFoundPage() {

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  return (
    <main className="notfound-login d-flex flex-column justify-content-center align-items-center">
      <h2 >{t('notfound.notfound')}</h2>
      <Link to={'/'} id=""><button id="page404-button" className="correspondence-see-button">{t('notfound.landing')}</button></Link>
    </main>
  );
}

export default NotFoundPage;