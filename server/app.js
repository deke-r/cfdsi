const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

require('dotenv').config()

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for port 465
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
});

// Contact Form Route
app.post('/contact-form-data', async (req, res) => {
  try {
    const { name, email, phone, city, message, service } = req.body;

    // Basic validation
    if (!name || !email || !phone || !message || !service) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.'
      });
    }

    const mailOptions = {
      from: process.env.USER,
      to: 'bhavishya.sense@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
          <h2 style="color: #0d141f;">New Contact Form Submission</h2>
          <table cellspacing="0" cellpadding="10" border="1" style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr><td style="background-color: #f2f2f2; font-weight: bold;">Name</td><td>${name}</td></tr>
            <tr><td style="background-color: #f2f2f2; font-weight: bold;">Email</td><td>${email}</td></tr>
            <tr><td style="background-color: #f2f2f2; font-weight: bold;">Phone</td><td>${phone}</td></tr>
            <tr><td style="background-color: #f2f2f2; font-weight: bold;">City</td><td>${city || 'Not Provided'}</td></tr>
            <tr><td style="background-color: #f2f2f2; font-weight: bold;">Service</td><td>${service}</td></tr>
            <tr><td style="background-color: #f2f2f2; font-weight: bold;">Message</td><td>${message}</td></tr>
          </table>
          <p style="margin-top: 20px; font-size: 13px; color: #555;">
            This email was sent from the <strong>CFDSI website</strong>.
          </p>
        </div>
      `
    };

    // Attempt to send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully!',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while sending the email. Please try again later.',
      error: error.message
    });
  }
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`✅ Server is running on port ${process.env.PORT}`);
});
