import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT,
  db: process.env.DB_URI,
  origin: process.env.ORIGIN,
  dbname: process.env.DB_NAME,
  sitetoken: process.env.SITE_TOKEN,
  smtp_user: process.env.SMTP_USER,
  send_me: process.env.SEND_ME,
  smtp_pass: process.env.SMTP_PASS,
  admin_token: process.env.ADMIN,
};
