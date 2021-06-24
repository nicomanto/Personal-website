import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  IoServerOutline,
  IoCalendarSharp,
  IoLanguageSharp,
  IoLocationSharp,
} from "react-icons/io5";
import { BsCodeSlash, BsWindow } from "react-icons/bs";
import { SiInstagram, SiGithub, SiLinkedin, SiFacebook, SiTelegram } from "react-icons/si";
import Layout from "../components/Layout";
import { Social, PersonalInfoForList } from "../interfaces/PersonalInfo/PersonalInfo";
import PersonalInfoID from "../components/PersonalInfo/PersonalInfoID";
import WhatIDoCard from "../interfaces/Card/WhatIDoCard";
import WhatIDoCardList from "../components/Card/WhatIDoCard/WhatIDoCardList";

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

const getWhatIDoInfo = (): WhatIDoCard[] => {
  const WhatIDoInfo: WhatIDoCard[] = [
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

const IndexPage = () => {
  const { t } = useTranslation(["index"]);

  return (
    <Layout title="Home | Niccolò Mantovani">
      <Row className="my-4">
        <Col lg={4} className="text-center my-auto">
          <PersonalInfoID socialList={getSocial()} personalInfoList={getPersonalInfoList()} />
        </Col>
        <Col lg className="biographyIndex my-4">
          <h1>{t("title")}</h1>
          <p>{t("biography")}</p>

          <h2>{t("subtitle")}</h2>
          <WhatIDoCardList cardList={getWhatIDoInfo()} />
        </Col>
      </Row>
    </Layout>
  );
};

export default IndexPage;
