import React from "react";
import { useTranslation } from "react-i18next";
import { Badge, ListGroup } from "react-bootstrap";
import { IoCalendarSharp, IoLanguageSharp, IoLocationSharp } from "react-icons/io5";
import { SiInstagram, SiGithub, SiLinkedin, SiFacebook, SiTelegram } from "react-icons/si";
import { HiOutlineDownload } from "react-icons/hi";
import { Social, PersonalInfoForList } from "../../interfaces/PersonalInfo";

const getSocial = (): Social[] => {
  const socialList: Social[] = [
    {
      icon: <SiGithub className="iconInfo" title="GitHub Niccolò Mantovani" />,
      url: "https://github.com/nicomanto",
    },
    {
      icon: <SiLinkedin className="iconInfo" title="LinkedIn Niccolò Mantovani" />,
      url: "/",
    },
    {
      icon: <SiTelegram className="iconInfo" title="Telegram Niccolò Mantovani" />,
      url: "https://t.me/nicomanto",
    },
    {
      icon: <SiInstagram className="iconInfo" title="Instagram Niccolò Mantovani" />,
      url: "https://www.instagram.com/niccolo_mantovani",
    },
    {
      icon: <SiFacebook className="iconInfo" title="Facebook Niccolò Mantovani" />,
      url: "https://www.facebook.com/nicomanto49",
    },
  ];

  return socialList;
};

const getPersonalInfoList = (): PersonalInfoForList[] => {
  const personalInfoList: PersonalInfoForList[] = [
    {
      title: "Birthday",
      icon: <IoCalendarSharp className="iconInfo mb-1" />,
      i18nParam: "birthday",
    },
    {
      title: "Works location",
      icon: <IoLocationSharp className="iconInfo mb-1" />,
      i18nParam: "location",
    },
    {
      title: "Language",
      icon: <IoLanguageSharp className="iconInfo mb-1" />,
      i18nParam: "language",
    },
  ];
  return personalInfoList;
};

const PersonalInfoID = () => {
  const { t } = useTranslation(["personalInfo"]);

  return (
    <div>
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
        {getSocial().map((element) => {
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
        {getPersonalInfoList().map((element) => {
          return (
            <ListGroup.Item title={element.title}>
              {element.icon}
              {` ${t(`personalInfo.${element.i18nParam}`)}`}
            </ListGroup.Item>
          );
        })}
      </ListGroup>

      {/* not use <Button> because not support download tag */}
      <a
        href="/CV/CV-Mantovani-Niccolò-IT.pdf"
        title="Download Curriculm Vitae"
        className="btn btn-dark"
        role="button"
        download
      >
        <HiOutlineDownload className="iconInfo mr-1" />
        {"Download "}
        <abbr lang="la" title="Curriculum Vitae">
          CV
        </abbr>
      </a>
    </div>
  );
};

export default PersonalInfoID;
