"use server";
import nodemailer from 'nodemailer';

export default async function sendMail(html: string): Promise<void> {

  console.log({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      pass: process.env.EMAIL_PASS,
      user: process.env.EMAIL_USER,
    },
  });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      pass: process.env.EMAIL_PASS,
      user: process.env.EMAIL_USER,
    },
  });

  const message = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: "Pesquisa de Satisfação",
    html,
  };

  const info = await transporter.sendMail(message);
  console.log('Message sent: %s', info.messageId);
}
