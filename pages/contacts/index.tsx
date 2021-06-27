import React from "react";
import { GetStaticProps } from "next";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import FormEmail from "../../components/Email/FormEmail";
import GoogleMapOptions from "../../interfaces/GoogleMapOptions";
import Map from "../../components/Map/Map";

type Props = {
  worksLocation: GoogleMapOptions;
};

const ContactPage = ({ worksLocation }: Props) => {
  const { t } = useTranslation(["contacts"]);

  return (
    <Layout title={t("pageName")}>
      <div className="text-center my-4">
        <h1>{t("title")}</h1>
      </div>

      <Row>
        <Col lg>
          <h2 lang="en">Form</h2>
          <FormEmail />
        </Col>
        <Col lg="5">
          <h2>{t("subtitleMap")}</h2>
          <Map mapOptions={worksLocation} />
        </Col>
      </Row>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mapOptions: google.maps.MapOptions = {
    zoom: 9,
    center: {
      lat: 45.18850908719348,
      lng: 11.26573010072715,
    } /* center from padova to mantova */,
  };

  const markerOptions: google.maps.MarkerOptions[] = [
    {
      position: { lat: 45.156419948822666, lng: 10.791379041365822 },
      title: "Mantova",
    },
    {
      position: { lat: 45.41021406053265, lng: 11.880835139668408 },
      title: "Padova",
    },
  ];

  const worksLocation: GoogleMapOptions = {
    mapOptions,
    markerOptions,
  };

  return {
    props: {
      worksLocation,
    },
  };
};

export default ContactPage;
