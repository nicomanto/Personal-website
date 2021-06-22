import React from "react";
import { useTranslation } from "react-i18next";
import { Badge, Button, ListGroup } from "react-bootstrap";
import { SiInstagram, SiGithub, SiLinkedin, SiFacebook, SiTelegram } from "react-icons/si";
import {
  IoCalendarSharp,
  IoLanguageSharp,
  IoLocationSharp,
} from "react-icons/io5";



const PersonalInfo = () => {

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
                <li className="list-inline-item mx-2">
                    <a
                        href="https://github.com/nicomanto"
                        className="socialIconLink"
                        title="GitHub Niccolò Mantovani"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiGithub className="iconInfo" />
                    </a>
                </li>
                <li className="list-inline-item mx-2">
                    <a
                        href="/"
                        title="LinkedIn Niccolò Mantovani"
                        className="socialIconLink"
                        target="_blank"
                        rel="noopener"
                    >
                        <SiLinkedin className="iconInfo" />
                    </a>
                </li>
                <li className="list-inline-item mx-2">
                    <a
                        href="https://t.me/nicomanto"
                        className="socialIconLink"
                        title="Telegram Niccolò Mantovani"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiTelegram className="iconInfo" />
                    </a>
                </li>
                <li className="list-inline-item mx-2">
                    <a
                        href="https://www.instagram.com/niccolo_mantovani"
                        className="socialIconLink"
                        title="Instagram Niccolò Mantovani"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiInstagram className="iconInfo" />
                    </a>
                </li>
                <li className="list-inline-item mx-2">
                    <a
                        href="https://www.facebook.com/nicomanto49"
                        className="socialIconLink"
                        title="Facebook Niccolò Mantovani"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiFacebook className="iconInfo" />
                    </a>
                </li>
            </ul>

            <ListGroup variant="flush" className="my-4">
                <ListGroup.Item title="Birthday">
                <IoCalendarSharp className="iconInfo mb-1" />
                {` ${t("personalInfo.birthday")}`}
                </ListGroup.Item>
                <ListGroup.Item title="Works location">
                <IoLocationSharp className="iconInfo mb-1" />
                {` ${t("personalInfo.location")}`}
                </ListGroup.Item>
                <ListGroup.Item title="Language">
                <IoLanguageSharp className="iconInfo mb-1" />
                {` ${t("personalInfo.language")}`}
                </ListGroup.Item>
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
    )
};

export default PersonalInfo;