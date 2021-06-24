import React from "react";
import { Row, Col } from "react-bootstrap";
import WhatIDoCard from "../../../interfaces/Card/WhatIDoCard";
import WhatIDoCardElement from "./WhatIDoCard";

type Props = {
  cardList: WhatIDoCard[];
};

const WhatIDoCardList = ({ cardList }: Props) => (
  <Row>
    {cardList.map((element) => {
      return (
        <Col>
          <WhatIDoCardElement card={element} />
        </Col>
      );
    })}
  </Row>
);

export default WhatIDoCardList;
