import * as nodemailer from 'nodemailer';
import Credentials from './credentials';

export default class MailServer {
  transporter = nodemailer.createTransport({
    service: Credentials.mailServer,
    auth: {
      user: Credentials.email,
      pass: Credentials.password,
    },
  });
}
