import React from "react";
import { Row, Col } from "react-bootstrap";
import WhatIDoCard from "../../../interfaces/Card/WhatIDoCard";
import WhatIDoCardElement from "./WhatIDoCard";

type Props = {
  whatIDoList: WhatIDoCard[];
};

const WhatIDowhatIDoList = ({ whatIDoList }: Props) => (
  <Row>
    {whatIDoList.map((element) => {
      return (
        <Col>
          <WhatIDoCardElement whatIDoElement={element} />
        </Col>
      );
    })}
  </Row>
);

export default WhatIDowhatIDoList;
