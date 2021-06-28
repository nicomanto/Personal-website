import React from "react";
import { Row, Col } from "react-bootstrap";
import Project from "../../../interfaces/Project";
import ProjectCardElement from "./ProjectCard";

type Props = {
  projectList: Project[];
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
