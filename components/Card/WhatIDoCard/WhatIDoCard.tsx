import React from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import WhatIDoCardInterface from "../../../interfaces/Card/WhatIDoCard";

type Props = {
  card: WhatIDoCardInterface;
};

const WhatIDoCard = ({ card }: Props) => {
  const { t } = useTranslation(["whatIDo"]);

  return (
    <Card className="whatIDoCard mx-auto my-2">
      {card.icon}
      <Card.Body>
        <Card.Title>{t(`${card.i18nParam}.title`)}</Card.Title>
        <Card.Text>{t(`${card.i18nParam}.description`)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WhatIDoCard;
