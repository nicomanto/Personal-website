import React from "react";
import { Row, Col } from "react-bootstrap";
import WhatIDoCard from "../../../interfaces/WhatIDoCard";
import WhatIDoCardElement from "./WhatIDoCard";

type Props = {
  cardList: WhatIDoCard[];
};

const WhatIDoCardList = ({ cardList }: Props) => (
  <Row>
    {cardList.map((element) => {
      return (
        <Col>
          <WhatIDoCardElement i18nParam={element.I18nparam} icon={element.icon} />
        </Col>
      );
    })}
  </Row>
);

export default WhatIDoCardList;
