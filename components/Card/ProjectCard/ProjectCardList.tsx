import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "../../../interfaces/Card/ProjectCard";
import ProjectCardElement from "./ProjectCard";

type Props = {
  cardList: ProjectCard[];
};

const ProjectCardList = ({ cardList }: Props) => (
  <Row>
    {cardList.map((element) => {
      return (
        <Col lg={6}>
          <ProjectCardElement card={element} />
        </Col>
      );
    })}
  </Row>
);

export default ProjectCardList;
