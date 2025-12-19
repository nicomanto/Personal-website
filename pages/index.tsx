import { Row, Col } from "react-bootstrap";
import { useTranslation, Trans } from "react-i18next";
import Layout from "../components/Layout";
import PersonalInfoID from "../components/PersonalInfo/PersonalInfoID";
import WhatIDoCardList from "../components/Card/WhatIDoCard/WhatIDoCardList";

const IndexPage = () => {
  const { t } = useTranslation(["index"]);

  return (
    <Layout title="Home | Niccolò Mantovani">
      <Row className="my-4">
        <Col lg={4} className="text-center my-auto">
          <PersonalInfoID />
        </Col>
        <Col lg className="biographyIndex">
          <h1>{t("title")}</h1>
          <p>
            <Trans
              t={t}
              i18nKey="biography"
              components={{
                1: <strong />,
                2: <strong />,
                3: <strong />,
                4: <br />,
                5: <br />,
                6: <strong />,
                7: <strong />,
                8: <strong />,
                9: <br />,
                10: <strong />,
                11: <strong />,
                12: <br />,
              }}
            >
              Ciao, mi chiamo Niccolò Mantovani e sono uno{" "}
              <strong>sviluppatore software Back-End</strong>{" "}
              con solida esperienza nel linguaggio <strong>Golang</strong>{" "}
              e nell’utilizzo dei servizi <strong>AWS</strong>. 
              Mi occupo dell’intero ciclo di vita delle applicazioni, dalla progettazione e sviluppo fino al deploy e alla gestione in produzione di servizi scalabili e affidabili.
              Utilizzo quotidianamente anche altri linguaggi di programmazione come{" "}
              <strong>JavaScript</strong>, <strong>Python</strong> e <strong>Java</strong>, adattando le tecnologie al contesto e alle esigenze del progetto.
              Ho una forte esperienza con <strong>MongoDB</strong> e, più in generale, con soluzioni database di tipo <strong>NoSQL</strong>, che impiego per la progettazione e gestione di sistemi orientati alle performance e alla scalabilità.
              Sono una persona curiosa e orientata alla crescita continua, sempre aperta ad affrontare nuove sfide e ad approfondire nuove tecnologie per migliorare la qualità delle soluzioni sviluppate.
            </Trans>
          </p>

          <h2>{t("subtitle")}</h2>
          <WhatIDoCardList />
        </Col>
      </Row>
    </Layout>
  );
};

export default IndexPage;
