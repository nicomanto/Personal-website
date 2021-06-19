import { Container, Row, Col, Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { SiInstagram } from "react-icons/si";
import Layout from "../components/Layout";

const IndexPage = () => {
  const { t } = useTranslation(["index"]);

  return (
    <Layout title="Home | Niccolò Mantovani">
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <img
              className="profilePicture"
              src="https://www.gravatar.com/avatar/cceb51c1797bca97b7cd5211907dd744?s=1000"
              alt="Niccolò Mantovani profile"
            />
            <h1 lang="it">Niccolò Mantovani</h1>
            <Badge pill variant="info">
              Sviluppatore Software
            </Badge>

            <ul className="list-inline mx-auto justify-content-center">
              <li className="list-inline-item">
                <i>
                  <SiInstagram />
                </i>
              </li>
              <li className="list-inline-item">
                <i>
                  <SiInstagram />
                </i>
              </li>
              <li className="list-inline-item">
                <i>
                  <SiInstagram />
                </i>
              </li>
            </ul>
          </Col>
          <Col md>
            <h1>{t("title")}</h1>
            <p>{t("biography")}</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;
