import React from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { IconBaseProps } from "react-icons";

type Props = {
  i18nParam: string;
  icon: IconBaseProps;
};

const WhatIDoCard = ({ i18nParam, icon }: Props) => {
  const { t } = useTranslation(["whatIDo"]);

  return (
    <Card className="whatIDoCard mx-auto my-2">
      {icon}
      <Card.Body>
        <Card.Title>{t(`${i18nParam}.title`)}</Card.Title>
        <Card.Text>{t(`${i18nParam}.description`)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WhatIDoCard;
