import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { ButtonGroup, Container, ToggleButton } from "react-bootstrap";
import { GetStaticProps } from "next";
import ProjectCardList from "../../components/Card/ProjectCard/ProjectCardList";
import ProjectCard from "../../interfaces/Card/ProjectCard";
import Layout from "../../components/Layout";

const getProjectsInfo = (): ProjectCard[] => {
  const projects: ProjectCard[] = [
    {
      i18nParam: "PhotoSite",
      imgName: "photo-site.png",
      projectGitHubURL: "https://github.com/nicomanto/Photo-site",
      projectWebisteURL: "https://photo-site-nicomanto.vercel.app/",
      haveBERole: true,
      haveFERole: true,
    },
    {
      i18nParam: "EmporioLambda",
      imgName: "emporio-lambda.png",
      projectGitHubURL: "https://github.com/nicomanto/EmporioLambda",
      projectWebisteURL: "https://emporio-lambda-fe.vercel.app/",
      haveBERole: true,
      haveFERole: false,
    },
    {
      i18nParam: "FlyWeb",
      imgName: "FlyWebLogo.png",
      projectGitHubURL: "https://github.com/nicomanto/FlyWeb",
      haveBERole: true,
      haveFERole: false,
    },
    {
      i18nParam: "Oenology",
      imgName: "oenology.png",
      projectGitHubURL: "https://github.com/nicomanto/Oenology",
      haveBERole: true,
      haveFERole: false,
    },
    {
      i18nParam: "QuizRoom",
      imgName: "quiz-room.png",
      projectGitHubURL: "https://github.com/nicomanto/QuizRoom",
      haveBERole: true,
      haveFERole: true,
    },
  ];

  return projects;
};

type Props = {
  buttonRole: string[];
};

const ProjectsPage = ({ buttonRole }: Props) => {
  const { t } = useTranslation(["projects"]);
  const [topicProjects, setTopicProjects] = useState(buttonRole[0]);
  const [projectsList, setProjectsList] = useState(getProjectsInfo());

  const handleSelect = (e) => {
    setTopicProjects(e);

    if (e === "All projects") {
      setProjectsList(getProjectsInfo());
    } else if (e === "Back-end role") {
      setProjectsList(getProjectsInfo().filter((element) => element.haveBERole));
    } else if (e === "Front-end role") {
      setProjectsList(getProjectsInfo().filter((element) => element.haveFERole));
    } else {
      setProjectsList(
        getProjectsInfo().filter((element) => element.haveBERole && element.haveFERole)
      );
    }
  };

  return (
    <Layout title={t("pageName")}>
      <div className="text-center my-4">
        <h1>{t("title")}</h1>
        <Container>
          <ButtonGroup toggle className="row">
            {buttonRole.map((element) => {
              return (
                <ToggleButton
                  className="projectRadio"
                  variant="outline-dark"
                  checked={topicProjects === element}
                  key={element}
                  type="radio"
                  name={`optionsRadios${element}`}
                  id={`optionsRadios${element}`}
                  value={element}
                  onChange={() => {
                    handleSelect(element);
                  }}
                >
                  {element}
                </ToggleButton>
              );
            })}
          </ButtonGroup>
        </Container>

        <ProjectCardList cardList={projectsList} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const buttonRole = [
    "All projects", // the first must be the default button
    "Back-end role",
    "Front-end role",
    "Full-stack role",
  ];

  return {
    props: {
      buttonRole,
    },
  };
};

export default ProjectsPage;
