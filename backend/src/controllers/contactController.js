import asyncHandler from 'express-async-handler';
import { sendContactEmail } from '../utils/sendEmail.js';

export const sendContactMessage = asyncHandler(
  async (req, res) => {
    const { name, email, phone, subject, message } =
      req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'Name, Email, and Message are required.',
      });
    }

    try {
      await sendContactEmail({
        name,
        email,
        phone,
        subject,
        message,
      });

      res.status(200).json({
        message:
          'Message received and email sent. Thank you!',
      });
    } catch (error) {
      console.error('Error in contact form:', error);
      res.status(500).json({
        message: 'Something went wrong. Please try again.',
      });
    }
  }
);
