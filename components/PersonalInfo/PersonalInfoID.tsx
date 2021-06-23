import React from "react";
import { useTranslation } from "react-i18next";
import { Badge, Button, ListGroup } from "react-bootstrap";
import { Social, PersonalInfoForList } from "../../interfaces/PersonalInfo/PersonalInfo";

type Props = {
  socialList: Social[];
  personalInfoList: PersonalInfoForList[];
};

const PersonalInfoID = ({ socialList, personalInfoList }: Props) => {
  const { t } = useTranslation(["personalInfo"]);

  return (
    <div id="personalInfo">
      <img
        className="profilePicture"
        src="https://www.gravatar.com/avatar/cceb51c1797bca97b7cd5211907dd744?s=1000"
        alt="Niccolò Mantovani profile"
      />
      <h1 lang="it" className="my-2 display-4 nameTitle">
        Niccolò Mantovani
      </h1>
      <Badge pill variant="info" className="badgeSD my-2">
        {t("badge")}
      </Badge>

      <ul className="list-inline mx-auto justify-content-center my-2">
        {socialList.map((element) => {
          return (
            <li className="list-inline-item mx-2">
              <a
                href={element.url}
                className="socialIconLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                {element.icon}
              </a>
            </li>
          );
        })}
      </ul>

      <ListGroup variant="flush" className="my-4">
        {personalInfoList.map((element) => {
          return (
            <ListGroup.Item title={element.title}>
              {element.icon}
              {` ${t(`personalInfo.${element.i18nParam}`)}`}
            </ListGroup.Item>
          );
        })}
      </ListGroup>

      <a href="/CV/CV-Mantovani Niccolò-IT.pdf" download>
        <Button title="Download Curriculm Vitae" lang="en" variant="dark">
          {"Download "}
          <abbr lang="la" title="Curriculum Vitae">
            CV
          </abbr>
        </Button>
      </a>
    </div>
  );
};

export default PersonalInfoID;
