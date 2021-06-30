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
          <PersonalInfoID/>
        </Col>
        <Col lg className="biographyIndex">
          <h1>{t("title")}</h1>
          <p>
            <Trans t={t} i18nKey="biography">
              Ciao, mi chiamo Niccolò Mantovani e sono uno <strong>sviluppatore software</strong>.<br/>Sono sempre stato un ragazzo appassionato dell'ambito tecnolgico, sopratutto perchè è un settore in continuo sviluppo e questo mi affascina molto. Durante il periodo accademico, da prima studiando alla scuola <em>ITIS Enrico Fermi di Mantova</em> e poi all'<em>Università degli studi di Padova</em> ho appreso le capacità di sviluppo di un applicativo software nella sua totalità.<br/><br/>Sviluppo principalmente per quanto riguarda la parte <strong>Back-end</strong> degli applicativi, i quali devono essere scalabili, funzionali e sicuri per garantire un risultato ottimale. Sono comunque sempre disponibile ad affrontare nuove sfide e ad ampliare il mio bagaglio culturale per quanto riguarda la compressione di nuove tecnolgie e allo sviluppo tramite esse.<br/>Attualmente risiedo in un piccolo paese in provincia di Mantova, ma molto spesso mi trovo anche nella città di Padova.<br/>Contattami al più presto!  {/* eslint-disable-line*/}
            </Trans>
          </p>

          <h2>{t("subtitle")}</h2>
          <WhatIDoCardList/>
        </Col>
      </Row>
    </Layout>
  );
};

export default IndexPage;
