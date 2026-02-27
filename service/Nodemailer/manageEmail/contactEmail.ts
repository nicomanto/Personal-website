// service/Nodemailer/manageEmail/contactEmail.ts
import Nodemailer from "nodemailer";
import { EmailInfo } from "../../../app/api/contact/route";

const sendCollaborationEmail = async (emailInfo: EmailInfo): Promise<boolean> => {
  const transporter = Nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_BOT,
      pass: process.env.EMAIL_BOT_PASS,
    },
  });

  try {
   await transporter.sendMail({
      from: `"Your Website" <${process.env.EMAIL_BOT}>`,
      to: process.env.EMAIL_TO_SEND!,
      subject: `Nuovo contatto da ${emailInfo.name}`, // Dynamic subject line
      text: `
    Hai ricevuto un nuovo messaggio dal modulo di contatto:

    DETTAGLI CONTATTO
    -----------------
    Nome: ${emailInfo.name}
    Email: ${emailInfo.email}

    MESSAGGIO:
    ${emailInfo.message}

    ---
    Inviato dal bot del sito web.
      `.trim(),
      html: `
        <div style="background-color: #f4f4f4; padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0;">
            <tr>
              <td style="background-color: #007bff; padding: 20px; text-align: center; color: #ffffff;">
                <h1 style="margin: 0; font-size: 24px;">Nuovo Messaggio</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 30px;">
                <p style="font-size: 16px; margin-bottom: 20px;">Hai ricevuto una nuova richiesta di contatto dal tuo sito web.</p>
                
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 20px;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; width: 80px;"><strong>Nome:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${emailInfo.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${emailInfo.email}" style="color: #007bff; text-decoration: none;">${emailInfo.email}</a></td>
                  </tr>
                </table>

                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff; margin-top: 20px;">
                  <p style="margin-top: 0; color: #555;"><strong>Messaggio:</strong></p>
                  <p style="white-space: pre-wrap; line-height: 1.6; margin-bottom: 0;">${emailInfo.message}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; text-align: center; font-size: 12px; color: #999; background-color: #fbfbfb;">
                Questo messaggio è stato generato automaticamente dal tuo sito web.
              </td>
            </tr>
          </table>
        </div>
      `,
    });
    return true;
  } catch (err) {
    console.error("Failed to send email:", err);
    return false;
  }
};

export default sendCollaborationEmail;