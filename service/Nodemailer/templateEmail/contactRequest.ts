import { EmailInfo } from "../../../interfaces/Email";

export const contactHMTLTemplate = (emailInfo: EmailInfo): string => {
  const html: string = `<p>Ciao Niccolò, hai ricevuto un nuovo messaggio:</p>
  <ul>
    <li>Nome: ${emailInfo.name}</li>
    <li>Email: ${emailInfo.email}</li>
    <li>Messaggio: <p>${emailInfo.message}</p></li>
  </ul>`;

  return html;
};

export const contactTXTTemplate = (emailInfo: EmailInfo): string => {
  const text: string = `Ciao Niccolò, hai ricevuto un nuovo messaggio:\n\n
    - Nome: ${emailInfo.name}\n
    - Email: ${emailInfo.email}\n
    - Messaggio: \n${emailInfo.message}`;

  return text;
};
