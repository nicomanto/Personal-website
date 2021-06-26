import React from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import WhatIDoCardInterface from "../../../interfaces/Card/WhatIDoCard";

type Props = {
  whatIDoElement: WhatIDoCardInterface;
};

const WhatIDoCard = ({ whatIDoElement }: Props) => {
  const { t } = useTranslation(["whatIDo"]);

  return (
    <Card className="whatIDoCard mx-auto my-2">
      {whatIDoElement.icon}
      <Card.Body>
        <Card.Title>{t(`${whatIDoElement.i18nParam}.title`)}</Card.Title>
        <Card.Text>{t(`${whatIDoElement.i18nParam}.description`)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WhatIDoCard;
