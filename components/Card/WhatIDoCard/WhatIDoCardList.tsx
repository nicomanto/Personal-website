import React from "react";
import { Row, Col } from "react-bootstrap";
import WhatIDo from "../../../interfaces/WhatIDo";
import WhatIDoCardElement from "./WhatIDoCard";
import {IoServerOutline} from "react-icons/io5";
import { BsCodeSlash, BsWindow } from "react-icons/bs";

const getWhatIDoInfo = (): WhatIDo[] => {
  const WhatIDoInfo: WhatIDo[] = [
    {
      i18nParam: "BE",
      icon: <IoServerOutline className="iconCard" />,
    },
    {
      i18nParam: "FE",
      icon: <BsCodeSlash className="iconCard" />,
    },
    {
      i18nParam: "WEB",
      icon: <BsWindow className="iconCard" />,
    },
  ];
  return WhatIDoInfo;
};

const WhatIDowhatIDoList = () => (
  <Row>
    {getWhatIDoInfo().map((element) => {
      return (
        <Col>
          <WhatIDoCardElement whatIDoElement={element} />
        </Col>
      );
    })}
  </Row>
);

export default WhatIDowhatIDoList;
