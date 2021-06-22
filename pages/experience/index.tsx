import React from "react";
import { useTranslation } from "react-i18next";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { IoSchoolOutline } from "react-icons/io5";
import Layout from "../../components/Layout";
import "react-vertical-timeline-component/style.min.css";

const ExperiencePage = () => {
  const { t } = useTranslation(["experience"]);

  return (
    <Layout title={t("pageName")}>
      <div className="text-center my-4">
        <h1>{t("title")}</h1>
        <h2>{t("subtitle")}</h2>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={`09/2018 - ${t("experience.present")}`}
          icon={<IoSchoolOutline />}
        >
          <h3 className="vertical-timeline-element-title">{t("experience.unipd.title")}</h3>
          <h4 className="vertical-timeline-element-subtitle">{t("experience.unipd.place")}</h4>
          <p>{t("experience.unipd.description")}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="09/2013 - 07/2018"
          icon={<IoSchoolOutline />}
        >
          <h3 className="vertical-timeline-element-title">{t("experience.itis.title")}</h3>
          <h4 className="vertical-timeline-element-subtitle">{t("experience.itis.place")}</h4>
          <p>{t("experience.itis.description")}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Layout>
  );
};

export default ExperiencePage;
