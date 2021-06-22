import React from "react";
import { useTranslation } from "react-i18next";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { IoSchoolOutline } from "react-icons/io5";
import Layout from "../../components/Layout";
import "react-vertical-timeline-component/style.min.css";
import Skill from "../../interfaces/Skill";
import Skills from "../../components/Skills/Skills";

const getSkills = (): Skill[] => {
  const skillList: Skill[] = [
    {
      name: "TypeScript",
    },
    {
      name: "JavaScript",
    },
    {
      name: "C",
    },
    {
      name: "C++",
    },
    {
      name: "Java",
    },
    {
      name: "PHP",
      abbr: "Hypertext Preprocessor",
    },
    {
      name: "Boostrap",
    },
    {
      name: "API",
      abbr: "Application Programming Interface",
    },
    {
      name: "AWS",
      abbr: "Amazon Web Services",
    },
    {
      name: "Serverless",
    },
    {
      name: "Next.js",
    },
    {
      name: "HTML",
      abbr: "HyperText Markup Language",
    },
    {
      name: "CSS",
      abbr: "Cascading Style Sheets",
    },
    {
      name: "SQL",
      abbr: "Structured Query Language",
    },
    {
      name: "Python",
    },
    {
      name: "Latex",
    },
    {
      name: "Scala",
    },
    {
      name: "CI",
      abbr: "Continuous Integration",
    },
    {
      name: "CD",
      abbr: "Continuous Deployment",
    },
  ];

  return skillList;
};

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

      <Skills skillList={getSkills()} />
    </Layout>
  );
};

export default ExperiencePage;
