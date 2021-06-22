import { Row, Col} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { IoServerOutline } from "react-icons/io5";
import { BsCodeSlash, BsWindow } from "react-icons/bs";
import Layout from "../components/Layout";
import CardWhatIDo from "../components/Project/CardWhatIDo";
import PersonalInfo from "../components/PersonalInfo/PersonalInfo";

const IndexPage = () => {
  const { t } = useTranslation(["index"]);

  return (
    <Layout title="Home | Niccolò Mantovani">
      <Row className="my-4">
        <Col lg={4} className="text-center my-auto">
          <PersonalInfo/>
        </Col>
        <Col lg className="biographyIndex my-4">
          <h1>{t("title")}</h1>
          <p>{t("biography")}</p>

          <h2>{t("whatIDo.title")}</h2>
          <Row>
            <Col>
              <CardWhatIDo
                title={t("whatIDo.BE.title")}
                description={t("whatIDo.BE.description")}
                icon={<IoServerOutline className="iconCard" />}
              />
            </Col>
            <Col>
              <CardWhatIDo
                title={t("whatIDo.FE.title")}
                description={t("whatIDo.FE.description")}
                icon={<BsCodeSlash className="iconCard" />}
              />
            </Col>
            <Col>
              <CardWhatIDo
                title={t("whatIDo.WEB.title")}
                description={t("whatIDo.WEB.description")}
                icon={<BsWindow className="iconCard" />}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default IndexPage;
