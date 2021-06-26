import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "../../../interfaces/Card/ProjectCard";
import ProjectCardElement from "./ProjectCard";

type Props = {
  projectList: ProjectCard[];
};

const ProjectCardList = ({ projectList }: Props) => (
  <Row>
    {projectList.map((element) => {
      return (
        <Col lg={6}>
          <ProjectCardElement projectElement={element} />
        </Col>
      );
    })}
  </Row>
);

export default ProjectCardList;
