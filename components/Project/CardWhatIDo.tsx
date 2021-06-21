import React from "react";
import { Card } from "react-bootstrap";
import { IconBaseProps } from "react-icons";

type Props = {
  title: string;
  description: string;
  icon: IconBaseProps;
};

const CardWhatIDo = ({ title, description, icon }: Props) => (
  <Card className="whatIDoCard mx-auto my-2">
    {icon}
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default CardWhatIDo;
