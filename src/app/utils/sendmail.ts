import nodemailer from 'nodemailer';
import config from '../../config/config';

//define the user info from form
type User = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const send_mail = async (user: User) => {
  //create nodemail transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: config.smtp_user as string,
      pass: config.smtp_pass as string,
    },
    secure: true,
  });

  // verify transporter
  await new Promise((resolve, reject) => {
    transporter.verify((error, success) => {
      if (error) {
        reject(error);
        console.log('verify error', error);
      } else {
        resolve(success);
        console.log('verify success', success);
      }
    });
  });

  // mail template for own

  const mailDataOwn = {
    from: config.smtp_user as string,
    to: config.send_me as string,
    subject: 'New contact Request',
    html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h1 style="color: #4CAF50;">New Contact Request From Portfolio</h1>
            <p><strong>Name :</strong> ${user.name || 'Unknown'}</p>
            <p><strong>Subject :</strong> ${user.subject || 'No Subject'}</p>
            <p><strong>Email Address : </strong>${user.email}</p>
            <p style="background: #f4f4f4; padding: 10px; border-left: 5px solid #4CAF50;">Message : ${user.message}</p>
            <hr>
            <p style="font-size: 12px; color: #777;">This email was sent from portfolio website contact form.</p>
           </div>`,
  };

  // mail template for my clients

  const mailDataClient = {
    from: process.env.SMTP_USER as string,
    to: user.email,
    subject: `Contact Form Submitted Successfully`,
    text: `Dear ${user.name || 'Customer'},\n\nThank you for your contact. I have received your email and I will get back to you as soon as possible.\n\nBest Regards,\nRakibul Hasan`,
    html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #4CAF50;">Thank You for Contact</h2>
            <p>Dear <strong>${user.name || 'Customer'}</strong>,</p>
            <p>I have received your message and appreciate you reaching out. I will review your inquiry and get back to you as soon as possible.</p>
            <p><strong>Your Message:</strong></p>
            <p style="background: #f4f4f4; padding: 10px; border-left: 5px solid #4CAF50;">${user.message}</p>
            <p>If this is urgent, please contact us directly at [01732247599].</p>
            <hr>
            <p style="font-size: 12px; color: #777;">Best Regards,<br>Rakibul Hasan</p>
           </div>`,
  };

  // send mail to my own
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailDataOwn, (error, info) => {
      if (error) {
        console.log('mail send error', error);
        reject(error);
      } else {
        console.log('mail send success', info);
        resolve(info);
      }
    });
  });

  // send confirmation form submittion mail to my client

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailDataClient, (error, info) => {
      if (error) {
        console.log('client mail send error', error);
        reject(error);
      } else {
        console.log('client mail send success', info);
        resolve(info);
      }
    });
  });
};

export default send_mail;
