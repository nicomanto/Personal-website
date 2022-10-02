/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from "next/app";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CookieConsent from "react-cookie-consent";
import i18n from "../i18n/config";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import * as dotenv from "dotenv";
dotenv.config();

const PersonalWebsite = ({ Component, pageProps }: AppProps) => {
  const { t } = useTranslation(["cookie"]);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  });

  return (
    <>
      <Component {...pageProps} />
      <CookieConsent
        style={{ background: "#212529" }}
        buttonText={t("button")}
        buttonStyle={{ background: "white" }}
      >
        {t("message")}
      </CookieConsent>
    </>
  );
};

export default PersonalWebsite;
