import React from "react";
import { Badge, Container } from "react-bootstrap";
import Skill from "../../interfaces/Skill";

type Props = {
  skillList: Skill[];
};

const Skills = ({ skillList }: Props) => (
  <Container className="text-center my-4" lang="en">
    <h1>Skills</h1>
    <ul className="list-inline mx-auto justify-content-center my-2">
      {skillList.map((element) => {
        return (
          <li className="list-inline-item mx-2">
            <Badge variant="info" className="badgeSD my-2">
              {element.abbr !== undefined ? (
                <abbr title={element.abbr}>{element.name}</abbr>
              ) : (
                element.name
              )}
            </Badge>
          </li>
        );
      })}
    </ul>
  </Container>
);

export default Skills;
