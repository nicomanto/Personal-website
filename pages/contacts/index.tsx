import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";
import FormEmail from "../../components/Email/FormEmail";

const ContactPage = () => {
  const { t } = useTranslation(["contacts"]);

  return (
    <Layout title={t("pageName")}>
        <div className="text-center my-4">
            <h1>{t("title")}</h1>
        </div>
        <FormEmail />
        
    </Layout>
  );
};

export default ContactPage;
