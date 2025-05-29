import nodemailer from 'nodemailer';
import config from '../../config/config';

//define the user info from form
type User = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

//create nodemail transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: false,
  auth: {
    user: config.smtp_user as string,
    pass: config.smtp_pass as string,
  },
});

const send_mail = async (user: User) => {
  // send a email to me
  await transporter.sendMail({
    from: config.smtp_user as string,
    to: config.send_me as string,
    subject: user.subject,
    html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h1 style="color: #4CAF50;">New Contact Request</h1>
            <p><strong>Name:</strong> : ${user.name || 'Unknown'}</p>
            <p><strong>Email Address : </strong>${user.email}</p>
            <p><strong>Message : ${user.message} </strong></p>
            <p style="background: #f4f4f4; padding: 10px; border-left: 5px solid #4CAF50;">${user.message}</p>
            <hr>
            <p style="font-size: 12px; color: #777;">This email was sent from portfolio website contact form.</p>
           </div>`,
  });

  // send a email to my client
  await transporter.sendMail({
    from: process.env.SMTP_USER as string,
    to: user.email,
    subject: `Thank You for Contact`,
    text: `Dear ${user.name || 'Customer'},\n\nThank you for reaching out to me. I have received your message and I will get back to you shortly.\n\nBest Regards,\nRakibul Hasan`,
    html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #4CAF50;">Thank You for Contacting with me</h2>
            <p>Dear <strong>${user.name || 'Customer'}</strong>,</p>
            <p>I have received your message and appreciate you reaching out. I will review your inquiry and get back to you as soon as possible.</p>
            <p><strong>Your Message:</strong></p>
            <p style="background: #f4f4f4; padding: 10px; border-left: 5px solid #4CAF50;">${user.message}</p>
            <p>If this is urgent, please contact us directly at [01732247599].</p>
            <hr>
            <p style="font-size: 12px; color: #777;">Best Regards,<br>Rakibul Hasan</p>
           </div>`,
  });
};

export default send_mail;
