import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineChatAlt,
  HiOutlineEmojiHappy,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import ReCAPTCHA from "react-google-recaptcha";
import { EmailInfo } from "../../interfaces/Email";

const FormEmail = () => {
  const { t } = useTranslation(["formEmail"]);

  // state of submitted email
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  // state of value in form
  const [nameForm, setNameForm] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [msgForm, setMsgForm] = useState("");

  // state of param in error message
  const [errorParami18n, setErrorParami18n] = useState("generalFailedSend");

  const recaptchaRef: any = useRef<ReCAPTCHA>();

  // manage information form
  const sendInformation = async (event: any) => {
    event.preventDefault();

    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    setLoading(true);
    const infoEmail: EmailInfo = {
      name: event.target.nameValue.value,
      email: event.target.emailValue.value,
      message: event.target.messageValue.value,
    };

    const data = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ infoEmail, token }),
    });

    if (data.status === 200) {
      setSubmitted(true);
    } else {
      if (data.status === 400) setErrorParami18n("fillFailedSend");

      setFailed(true);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="text-center infoMessage">
        <Spinner animation="border" role="status">
          <span className="sr-only">{t("sendEmail.loadingSR")}</span>
        </Spinner>
      </div>
    );
  }
  if (submitted) {
    return (
      <div className="text-center infoMessage">
        <HiOutlineCheckCircle className="iconAfterSending" title="Success sending email icon" />
        <p className="text-success">{t("sendEmail.successSend")}</p>

        <a href="/" title="Home">
          {t("sendEmail.buttonBack")}
        </a>
      </div>
    );
  }

  return (
    <Form onSubmit={sendInformation}>
      <ReCAPTCHA
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY!}
        ref={recaptchaRef}
      />
      <p>
        {t("formMessage")}
        <HiOutlineEmojiHappy className="iconForm" title="Smile" />
      </p>

      {failed ? (
        <div className="text-center">
          <HiOutlineExclamationCircle
            className="iconAfterSending"
            title="Error sending email icon"
          />
          <p className="text-danger">{t(`sendEmail.${errorParami18n}`)}</p>
        </div>
      ) : null}

      <Form.Group as={Row}>
        <Col lg>
          <HiOutlineUser className="iconForm" title="User" />
          <Form.Label>{t("name.label")}</Form.Label>
          <Form.Control
            type="text"
            placeholder="ex. Niccolò Mantovani"
            required
            value={nameForm}
            onChange={(e) => {
              setNameForm(e.target.value);
            }}
            id="nameValue"
            name="nameValue"
          />
          <Form.Text className="text-muted">{t("formText")}</Form.Text>
        </Col>

        <Col lg>
          <HiOutlineMail className="iconForm" title="Email" />
          <Form.Label>{t("email.label")}</Form.Label>
          <Form.Control
            type="email"
            placeholder="ex. niccolo@email.com"
            value={emailForm}
            onChange={(e) => {
              setEmailForm(e.target.value);
            }}
            required
            id="emailValue"
            name="emailValue"
          />
          <Form.Text className="text-muted">{t("formText")}</Form.Text>
        </Col>
      </Form.Group>
      <Form.Group>
        <HiOutlineChatAlt className="iconForm" title="Message" />
        <Form.Label>{t("message.label")}</Form.Label>
        <Form.Control
          as="textarea"
          rows={8}
          required
          id="messageValue"
          name="messageValue"
          value={msgForm}
          onChange={(e) => {
            setMsgForm(e.target.value);
          }}
        />
        <Form.Text className="text-muted">{t("formText")}</Form.Text>
      </Form.Group>

      <div className="text-center">
        <Button type="submit" className="my-3 px-5" variant="dark">
          {t("formButtonName")}
        </Button>
      </div>
    </Form>
  );
};

export default FormEmail;
