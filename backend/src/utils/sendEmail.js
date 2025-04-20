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

export const sendTempleCreateEmail = async ({
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
export const sendContactEmail = async ({
  name,
  email,
  phone,
  subject,
  message,
}) => {
  const emailBody = {
    body: {
      name: name || 'Anonymous',
      intro:
        'You have received a new message from the Temple Outreach contact form.',
      table: {
        data: [
          {
            Name: name,
            Email: email,
            Phone: phone || 'N/A',
            Subject: subject || 'No Subject',
            Message: message,
          },
        ],
      },
      outro: 'Please follow up with the user if necessary.',
    },
  };

  const emailHtml = mailGenerator.generate(emailBody);

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_TO,
    subject: subject || 'New Contact Form Message',
    html: emailHtml,
  };

  await transporter.sendMail(mailOptions);
};
