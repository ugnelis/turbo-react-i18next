import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { I18nextProvider, Trans, useTranslation } from "react-i18next";
import { Example } from "ui";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Web</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button type="button" onClick={() => changeLanguage("de")}>
          de
        </button>
        <button type="button" onClick={() => changeLanguage("en")}>
          en
        </button>

        <Trans i18nKey="description.part1">
          To get started, edit <code>src/App.js</code> and save to reload.
        </Trans>
        <div>{t("description.part2")}</div>
        <I18nextProvider i18n={i18n}>
          <Example />
        </I18nextProvider>
      </header>
    </div>
  );
}

export default App;
