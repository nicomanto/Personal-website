import React from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { IoBriefcaseOutline, IoSchoolOutline } from "react-icons/io5";
import Project from "../../../interfaces/Project";

type Props = {
  projectElement: Project;
};

const ProjectCard = ({ projectElement }: Props) => {
  const { t } = useTranslation(["projectsList"]);

  return (
    <Card className="mx-auto my-2">
      <Card.Body>
        <Card.Img
          variant="top"
          alt=""
          src={`img/projects/${projectElement.imgName}`}
          className="projectImg mb-4"
        />
        {projectElement.iconType === "academic" ? (
          <IoSchoolOutline title="academic" className="iconProjectRole" />
        ) : (
          <IoBriefcaseOutline title="work" className="iconProjectRole" />
        )}
        <Card.Title>{t(`${projectElement.i18nParam}.title`)}</Card.Title>
        <Card.Text className="mx-4">{t(`${projectElement.i18nParam}.description`)}</Card.Text>
        <Card.Link
          target="_blank"
          rel="noopener"
          href={projectElement.projectGitHubURL}
          title="GitHub repository"
          lang="en"
        >
          GitHub repository
        </Card.Link>
        {projectElement.projectWebisteURL !== undefined ? (
          <Card.Link
            target="_blank"
            rel="noopener"
            href={projectElement.projectWebisteURL}
            title="Website's project"
            lang="en"
          >
            Website
          </Card.Link>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
