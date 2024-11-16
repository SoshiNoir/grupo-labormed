import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, rating, comments } = req.body;

    // Configure o seu transporter (use as credenciais corretas)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // ou outro serviço de e-mail
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // seu e-mail
      subject: 'Resposta da Pesquisa de Satisfação',
      text: `Nome: ${name}\nE-mail: ${email}\nAvaliação: ${rating}\nComentários: ${comments}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      return res.status(500).json({ message: 'Erro ao enviar e-mail.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
