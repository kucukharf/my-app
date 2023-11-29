import logo from "./logo.svg";
import { useTranslation, initReactI18next } from "react-i18next";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value, () => {
      localStorage?.setItem("language", event.target.value);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>{t("ActivityBox.viewAllTitle")}</span>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Body.CallToActionBtn.Title")}
        </a>
      </header>
      <div className="language-selector">
        <select onChange={onChangeLanguage}>
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="es">ES</option>
          <option value="de">DE</option>
        </select>
      </div>
    </div>
  );
}

export default App;
