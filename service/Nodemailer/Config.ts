const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_BOT,
    pass: process.env.EMAIL_BOT_PASS,
  },
});

export default transporter;
