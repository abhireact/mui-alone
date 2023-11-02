/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Material Dashboard 2 PRO React TS Context Provider
import { MaterialUIControllerProvider } from "context";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import translatearabic from "./translations/arabic/language.json";
import englishlang from "./translations/en/language.json";
import translatehindi from "./translations/hindi/language.json";

i18next.init({
  lng: "eng",
  resources: {
    en: {
      translation: englishlang,
    },

    arabic: {
      translation: translatearabic,
    },
    hindi: {
      translation: translatehindi,
    },
  },
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
const root = createRoot(document.getElementById("root"));

root.render(
  <I18nextProvider i18n={i18next}>
    <BrowserRouter>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </BrowserRouter>
  </I18nextProvider>
);
