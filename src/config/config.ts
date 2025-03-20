import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT,
  db: process.env.DB_URI,
  origin: process.env.ORIGIN,
  dbname: process.env.DB_NAME,
  sitetoken: process.env.SITE_TOKEN,
};
