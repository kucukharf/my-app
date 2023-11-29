import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import es from "./locales/es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    fr: {
      translation: fr,
    },
    de: {
      translation: de,
    },
    es: {
      translation: es,
    },
  },
  lng: window?.localStorage?.getItem("language")
    ? window?.localStorage?.getItem("language")
    : "en",
  fallbackLng: window?.navigator?.language?.split("-")?.[0]
    ? window.navigator.language.split("-")[0]
    : "en",

  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
