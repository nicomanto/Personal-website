import React from "react";
import { GetStaticProps } from "next";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";
import "react-vertical-timeline-component/style.min.css";
import Skill from "../../interfaces/Skill";
import Skills from "../../components/Skills/Skills";
import TimeLineElement from "../../interfaces/TimelineElement";
import ExperienceTimeline from "../../components/Timeline/ExperienceTimeline";

type Props = {
  skillList: Skill[];
  timeLineElementList: TimeLineElement[];
};

const ExperiencePage = ({ skillList, timeLineElementList }: Props) => {
  const { t } = useTranslation(["experience"]);

  return (
    <Layout title={t("pageName")}>
      <div className="text-center my-4">
        <h1>{t("title")}</h1>
        <h2>{t("subtitle")}</h2>
      </div>

      <ExperienceTimeline timeLineElementList={timeLineElementList} />

      <Skills skillList={skillList} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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
    {
      name: "TDD",
      abbr: "Test Driven Development",
    },
  ];

  const timeLineElementList: TimeLineElement[] = [
    {
      date: {
        date: "09/2018 -",
        presentI18n: true,
      },
      icon: "education",
      i18nParam: "unipd",
    },
    {
      date: {
        date: "09/2013 - 07/2018",
        presentI18n: false,
      },
      icon: "education",
      i18nParam: "itis",
    },
  ];

  return {
    props: {
      skillList,
      timeLineElementList,
    },
  };
};

export default ExperiencePage;
