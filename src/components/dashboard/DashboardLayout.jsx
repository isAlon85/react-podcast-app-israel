import React from 'react';
import { useTranslation } from "react-i18next";
import Navbar from '../shared/Navbar';

export default function DashboardLayout(props) {

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  return (
    <main className={`dashboard-main d-flex flex-column justify-content-between align-items-start`}>
      <Navbar/>
      <div className={`dashboard-pages d-flex flex-column justify-content-center align-items-center align-items-lg-start`}>
        { props.main }
      </div>
    </main>
  );
}