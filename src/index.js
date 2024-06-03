import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { I18nextProvider} from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
<script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin></script>

const DETECTION_OPTIONS = {
  order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
};

const languages = ["en", "es"];

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: DETECTION_OPTIONS,
    interpolation: {escapeValue: false},
    fallbackLng: "es",
    whitelist: languages,
    resources:{
      es:{
        global: global_es,
      },
      en:{
        global: global_en,
      },
    },
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={ i18next }>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
