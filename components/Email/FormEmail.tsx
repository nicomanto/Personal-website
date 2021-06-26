import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FormGroup, FormLabel, Form, FormControl, Button, FormText } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
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
        <p className="my-5">{t("formMessage")}</p>
        <FormText>{t("formText")}</FormText>
        <Form.Group controlId="formEmail">

          <Form.Label>{`${t("name.label")}*`}</Form.Label>
          <Form.Control type="text" placeholder="ex. Niccolò Mantovani" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>

          <Form.Label>{`${t("email.label")}*`}</Form.Label>
          <Form.Control type="email" placeholder="ex. sample@email.com" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>

          <Form.Label>{`${t("message.label")}*`}</Form.Label>
          <Form.Control as="textarea" rows={3}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>

        </Form.Group>
      </Form>
    );
  }
  if (loading) {
    return (
      <div className="spinner-border text-light my-5" role="status">
        <span className="sr-only">{t("sendEmail.loadingSR")}</span>
      </div>
    );
  }

  let classMessage: string = "text-success";
  let message: string = t("sendEmail.successSend");

  if (failed) {
    classMessage = "text-danger";
    message = t("sendEmail.failedSend");
  }

  return (
    <div className="my-5">
      <p className={classMessage}>{message}</p>

      <a href="/" className="simpleLink" title="Home">
        {t("sendEmail.buttonBack")}
      </a>
    </div>
  );
};

export default FormEmail;
