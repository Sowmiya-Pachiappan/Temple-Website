import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'Temple Connect',
    link: process.env.FRONTEND_URL,
  },
});

const sendEmail = async ({
  to,
  subject,
  intro,
  instructions,
  buttonText,
  buttonLink,
}) => {
  const emailBody = mailGenerator.generate({
    body: {
      intro,
      action: {
        instructions,
        button: {
          color: '#22BC66',
          text: buttonText,
          link: buttonLink,
        },
      },
      outro:
        'Thank you for supporting the Temple community.',
    },
  });

  const message = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html: emailBody,
  };

  await transporter.sendMail(message);
};

export default sendEmail;
