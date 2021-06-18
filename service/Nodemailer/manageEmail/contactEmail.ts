import { EmailInfo, EmailOption } from "../../../interfaces/Email";
import Nodemailer from "../Nodemailer";
import {
  contactHMTLTemplate,
  contactTXTTemplate,
} from "../templateEmail/contactRequest";

const sendContactEmail = async (emailInfo: EmailInfo): Promise<boolean> => {
  const mailOption: EmailOption = {
    from: `"Niccolò Mantovani website" <${process.env.EMAIL}>`, // sender address
    to: process.env.EMAIL_TO_SEND!, // list of receivers
    subject: "Contatto dal sito", // Subject line
    text: contactTXTTemplate(emailInfo), // plaintext body
    html: contactHMTLTemplate(emailInfo), // html body
  };

  return Nodemailer.sendEmail(mailOption);
};

export default sendContactEmail;
