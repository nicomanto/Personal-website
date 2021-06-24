import React from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ProjectCardInterface from "../../../interfaces/Card/ProjectCard";

type Props = {
  card: ProjectCardInterface;
};

const ProjectCard = ({ card }: Props) => {
  const { t } = useTranslation(["projectsList"]);

  return (
    <Card className="projectCard mx-auto my-2">
      <Card.Body>
        <Card.Img
          variant="top"
          alt=""
          src={`img/projects/${card.imgName}`}
          className="projectImg mb-4"
        />
        <Card.Title>{t(`${card.i18nParam}.title`)}</Card.Title>
        <Card.Text>{t(`${card.i18nParam}.description`)}</Card.Text>
        <Card.Link
          target="_blank"
          rel="noopener"
          href={card.projectGitHubURL}
          title="GitHub repository"
          lang="en"
        >
          GitHub repository
        </Card.Link>
        {card.projectWebisteURL !== undefined ? (
          <Card.Link
            target="_blank"
            rel="noopener"
            href={card.projectWebisteURL}
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
