"use server";
import nodemailer from "nodemailer";

export default async function sendMail(html: string): Promise<void> {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const receiver = process.env.EMAIL_RECEIVER;

  if (!host || !port || !user || !pass || !receiver) {
    throw new Error("Faltam configurações do servidor SMTP.");
  }

  console.log({ host, port, secure: true, auth: { user, pass } });

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: true,
    auth: {
      user,
      pass,
    },
  });

  const message = {
    from: user,
    to: receiver,
    subject: "Pesquisa de Satisfação",
    html,
  };

  const info = await transporter.sendMail(message);
  console.log("Message sent: %s", info.messageId);
}
