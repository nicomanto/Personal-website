import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { ButtonGroup, Container, ToggleButton } from "react-bootstrap";
import { GetStaticProps } from "next";
import ProjectCardList from "../../components/Card/ProjectCard/ProjectCardList";
import Project from "../../interfaces/Project";
import Layout from "../../components/Layout";

type Props = {
  buttonRole: string[];
  projects: Project[];
};

const ProjectsPage = ({ buttonRole, projects }: Props) => {
  const { t } = useTranslation(["projects"]);
  const [topicProjects, setTopicProjects] = useState(buttonRole[0]);
  const [projectsList, setProjectsList] = useState(projects);

  const handleSelect = (e) => {
    setTopicProjects(e);

    if (e === "All projects") {
      setProjectsList(projects);
    } else if (e === "Back-end role") {
      setProjectsList(projects.filter((element) => element.haveBERole));
    } else if (e === "Front-end role") {
      setProjectsList(projects.filter((element) => element.haveFERole));
    } else {
      setProjectsList(projects.filter((element) => element.haveFERole && element.haveBERole));
    }
  };

  return (
    <Layout title={t("pageName")}>
      <div className="text-center my-4">
        <h1>{t("title")}</h1>
        <Container>
          <ButtonGroup toggle className="row my-4">
            {buttonRole.map((element, index) => {
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
                  {t(`button.${index}.name`)}
                </ToggleButton>
              );
            })}
          </ButtonGroup>
        </Container>

        <ProjectCardList projectList={projectsList} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const buttonRole: String[] = [
    "All projects", // the first must be the default button
    "Back-end role",
    "Front-end role",
    "Full-stack role",
  ];

  const projects: Project[] = [
    {
      i18nParam: "photoSite",
      imgName: "photo-site.png",
      projectGitHubURL: "https://github.com/nicomanto/Photo-site",
      projectWebisteURL: "https://photo-site-nicomanto.vercel.app/",
      haveBERole: true,
      haveFERole: true,
      iconType: "work",
    },
    {
      i18nParam: "emporioLambda",
      imgName: "emporio-lambda.png",
      projectGitHubURL: "https://github.com/nicomanto/EmporioLambda",
      projectWebisteURL: "https://emporio-lambda-fe.vercel.app/",
      haveBERole: true,
      haveFERole: false,
      iconType: "academic",
    },
    {
      i18nParam: "flyWeb",
      imgName: "FlyWebLogo.png",
      projectGitHubURL: "https://github.com/nicomanto/FlyWeb",
      haveBERole: true,
      haveFERole: false,
      iconType: "academic",
    },
    {
      i18nParam: "oenology",
      imgName: "oenology.png",
      projectGitHubURL: "https://github.com/nicomanto/Oenology",
      haveBERole: true,
      haveFERole: false,
      iconType: "academic",
    },
    {
      i18nParam: "quizRoom",
      imgName: "quiz-room.png",
      projectGitHubURL: "https://github.com/nicomanto/QuizRoom",
      haveBERole: true,
      haveFERole: true,
      iconType: "academic",
    },
  ];

  return {
    props: {
      buttonRole,
      projects,
    },
  };
};

export default ProjectsPage;
