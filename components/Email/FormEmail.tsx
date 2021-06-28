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
import { IconBaseProps } from "react-icons";
import { EmailInfo } from "../../interfaces/Email";

const FormEmail = () => {
  const { t } = useTranslation(["formEmail"]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

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
      setFailed(true);
    }

    setLoading(false);
  };

  if (!loading && !submitted && !failed) {
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

        <Form.Group as={Row}>
          <Col lg>
            <HiOutlineUser className="iconForm" title="User" />
            <Form.Label>{t("name.label")}</Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. Niccolò Mantovani"
              required
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
              placeholder="ex. sample@email.com"
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
          <Form.Control as="textarea" rows={8} required id="messageValue" name="messageValue" />
          <Form.Text className="text-muted">{t("formText")}</Form.Text>
        </Form.Group>

        <div className="text-center">
          <Button type="submit" className="my-3 px-5" variant="dark">
            {t("formButtonName")}
          </Button>
        </div>
      </Form>
    );
  }
  if (loading) {
    return (
      <div className="text-center infoMessage">
        <Spinner animation="border" role="status">
          <span className="sr-only">{t("sendEmail.loadingSR")}</span>
        </Spinner>
      </div>
    );
  }

  let classMessage: string = "text-success";
  let message: string = t("sendEmail.successSend");
  let icon: IconBaseProps = (
    <HiOutlineCheckCircle className="iconAfterSending" title="Success sending email icon" />
  );

  if (failed) {
    classMessage = "text-danger";
    message = t("sendEmail.failedSend");
    icon = (
      <HiOutlineExclamationCircle className="iconAfterSending" title="Error sending email icon" />
    );
  }

  return (
    <div className="text-center infoMessage">
      {icon}
      <p className={classMessage}>{message}</p>

      <a href="/" className="simpleLink" title="Home">
        {t("sendEmail.buttonBack")}
      </a>
    </div>
  );
};

export default FormEmail;
