import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import routes from '../../routes/routes';

function NotFoundPage() {

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  return (
    <main className="notfound d-flex flex-column justify-content-center align-items-center">
      <h2 >{t('notFound.notFound')}</h2>
      <Link to={routes.home} id=""><button id="page404-button">{t('notFound.landing')}</button></Link>
    </main>
  );
}

export default NotFoundPage;