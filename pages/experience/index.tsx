import React from "react";
import { GetStaticProps } from "next";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";
import "react-vertical-timeline-component/style.min.css";
import Skill from "../../interfaces/Skill";
import SkillsContainer from "../../components/Skills/SkillsContainer";
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

      <SkillsContainer skillList={skillList} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const skillList: Skill[] = [
    {
      name: "Go",
    },
    {
      name: "Flink",
    },
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
      name: "Bootstrap",
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
    {
      name: "React",
    },
    {
      name: "MongoDB",
    },
    {
      name: "Kafka streams",
    },
  ];

  const timeLineElementList: TimeLineElement[] = [
    {
      date: {
        date: "04/2022 - ",
        currentI18n: true,
      },
      iconType: "work",
      i18nParam: "datasoil",
      websiteURL: "https://datasoil.it/",
    },
    {
      date: {
        date: "09/2018 - 09/2021",
        currentI18n: false,
      },
      iconType: "education",
      i18nParam: "unipd",
      websiteURL: "https://www.scienze.unipd.it/",
    },
    {
      date: {
        date: "09/2013 - 07/2018",
        currentI18n: false,
      },
      iconType: "education",
      i18nParam: "itis",
      websiteURL: "https://www.fermimn.edu.it/",
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
