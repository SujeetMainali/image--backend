import { DotenvConfig } from '../config/env.config';
import nodemailer from 'nodemailer';

interface IMailOptions {
  to: string;
  subject: string;
  text: string;
  from: string;
  html?: string;
}

// const sendMailUtil = async ({ to, html, subject, text, from }: IMailOptions) => {
const sendMailUtil = ({ to, html, subject, text, from }: IMailOptions) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: DotenvConfig.MAIL_USERNAME,
      pass: DotenvConfig.MAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from,
    text,
    to,
    html,
    subject,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
    }
  });
};

export default sendMailUtil;
