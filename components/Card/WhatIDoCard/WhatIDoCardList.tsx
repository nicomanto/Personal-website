import React from "react";
import { Row, Col } from "react-bootstrap";
import WhatIDo from "../../../interfaces/WhatIDo";
import WhatIDoCardElement from "./WhatIDoCard";

type Props = {
  whatIDoList: WhatIDo[];
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
